#!/usr/bin/env python3
"""Build and validate Aurora distributions from the maintained source tree."""
import argparse
import importlib.util
import hashlib
import json
import os
from pathlib import Path
import re
import shutil
import sys
import tarfile
import tempfile
from urllib.parse import unquote
import zipfile

CANONICAL = "aurora-design-system"
SKILLS = (CANONICAL,)
PLUGIN = "aurora-design-system"
DISPLAY_NAME = "Aurora Design System 2.0"
LOCATION = Path(__file__).resolve().parent.parent
ROOT = (LOCATION.parent.parent if LOCATION.name == PLUGIN
        and (LOCATION.parent.parent / "dashboard/index.html").is_file()
        and (LOCATION.parent.parent / "skills" / CANONICAL / "SKILL.md").is_file()
        else LOCATION)
IGNORE = shutil.ignore_patterns(".DS_Store", "__pycache__", "*.pyc")


def require(condition, message):
    if not condition:
        raise ValueError(message)


def dependencies(skill):
    return [CANONICAL]


def validate_skills(root, selected=SKILLS):
    """Resolve local Markdown resources, including links inside copied references."""
    for name in selected:
        folder = root / "skills" / name
        require((folder / "SKILL.md").is_file(), f"Missing skill: {folder}")
        text = (folder / "SKILL.md").read_text()
        require(re.search(rf"^name: {re.escape(name)}$", text, re.M), f"Wrong skill name: {folder}")
        require("$aurorads" not in text and "../aurorads/" not in text,
                f"Removed skill dependency in {folder}")
        for source in folder.rglob("*.md"):
            for target in re.findall(r"\]\(([^)]+)\)", source.read_text()):
                target = target.strip("<>").split("#", 1)[0]
                if not target or re.match(r"^[a-zA-Z][a-zA-Z0-9+.-]*:", target):
                    continue
                resolved = (source.parent / unquote(target)).resolve()
                require(resolved.exists(), f"Broken resource: {source.relative_to(root)} -> {target}")
                if name == CANONICAL:
                    require(resolved.is_relative_to(folder.resolve()),
                            f"Canonical skill is not self-contained: {source} -> {target}")


def digest_tree(folder):
    return {str(p.relative_to(folder)): hashlib.sha256(p.read_bytes()).hexdigest()
            for p in sorted(folder.rglob("*")) if p.is_file()
            and p.name != ".DS_Store" and "__pycache__" not in p.parts and p.suffix != ".pyc"}


def bundled_explorer_html(source):
    """The repository page is one level deep; the plugin page is two."""
    return source.replace("../skills/aurora-design-system/", "../../skills/aurora-design-system/")


def component_profile(plugin):
    spec = importlib.util.spec_from_file_location('aurora_lightweight', ROOT / 'scripts/lightweight-aurora.py')
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module.slim(plugin)


def sync_plugin():
    require((ROOT / "dashboard/index.html").is_file(), "Sync must run from the source repository")
    validate_skills(ROOT)
    plugin = ROOT / "plugins" / PLUGIN
    # These two directories are generated mirrors. All maintained inputs live outside the plugin.
    skill_dest = plugin / "skills"
    if skill_dest.exists():
        shutil.rmtree(skill_dest)
    skill_dest.mkdir()
    # Publish the registered skill allowlist, never an arbitrary source folder
    # that might contain retired entrypoints or unrelated future work.
    for name in SKILLS:
        shutil.copytree(ROOT / "skills" / name, skill_dest / name, ignore=IGNORE)
    component_profile(plugin)
    for source, dest in ((ROOT / "distribution/lightweight-handbook", plugin / "assets/handbook"),):
        if dest.exists():
            shutil.rmtree(dest)
        shutil.copytree(source, dest, ignore=IGNORE)
    index_file = plugin / "assets/handbook/index.html"
    # The consumer explorer uses only bundled native controls.
    for file in (plugin / "assets/handbook").glob("*.tsx"):
        file.unlink()
    for name in ("aurora_distribution.py", "install-aurora-skill.sh", "package-aurora-skill.sh", "serve-aurora-preview.py"):
        shutil.copy2(ROOT / "scripts" / name, plugin / "scripts" / name)
    manifest = plugin / ".codex-plugin/plugin.json"
    data = json.loads(manifest.read_text())
    data["version"] = (plugin / "VERSION").read_text().strip()
    manifest.write_text(json.dumps(data, indent=2) + "\n")
    verify_plugin(plugin)
    print(f"Synchronized plugin from skills/ and dashboard/: {plugin}")
    return plugin


def verify_plugin(plugin):
    data = json.loads((plugin / ".codex-plugin/plugin.json").read_text())
    require(data.get("name") == PLUGIN, "Unexpected plugin ID")
    require(data.get("interface", {}).get("displayName") == DISPLAY_NAME, "Unexpected plugin display name")
    require(data["version"] == (plugin / "VERSION").read_text().strip(), "Manifest/VERSION mismatch")
    require(data.get("skills") in ("./skills/", "./skills", "skills/", "skills"), "Unexpected plugin skill directory")
    actual_skills = sorted(p.name for p in (plugin / "skills").iterdir() if p.is_dir())
    require(actual_skills == sorted(SKILLS), "Plugin must expose only the canonical Aurora skill")
    agent_file = plugin / "skills" / CANONICAL / "agents/openai.yaml"
    display = re.search(r"^\s*display_name:\s*(.+?)\s*$", agent_file.read_text(), re.M)
    require(display and display.group(1).strip("\"'") == DISPLAY_NAME, "Unexpected skill display name")
    validate_skills(plugin)
    for relative in ["scripts/serve-aurora-preview.py", "assets/handbook/index.html", "assets/handbook/app.js", "assets/handbook/styles.css",
                     *[data["interface"][key] for key in ("composerIcon", "logo") if data["interface"].get(key)],
                     *data["interface"].get("screenshots", [])]:
        require((plugin / relative).is_file(), f"Missing plugin resource: {relative}")
    repo = plugin.parent.parent
    if (repo / "dashboard/index.html").is_file() and plugin == repo / "plugins" / PLUGIN:
        with tempfile.TemporaryDirectory(prefix="aurora-profile-parity-") as temporary:
            expected = Path(temporary)
            
            for name in SKILLS:
                shutil.copytree(repo / "skills" / name, expected / "skills" / name, ignore=IGNORE)
            shutil.copy2(plugin / "VERSION", expected / "VERSION")
            component_profile(expected)
            require(digest_tree(expected / "skills") == digest_tree(plugin / "skills"), "Plugin skills drift: run sync-plugin.sh")
        expected_explorer = digest_tree(repo / "distribution/lightweight-handbook")
        expected_explorer = {key: value for key, value in expected_explorer.items() if not key.endswith('.tsx')}
        require(expected_explorer == digest_tree(plugin / "assets/handbook"), "Bundled explorer drift: run sync-plugin.sh")
    print(f"Verified all skill links, plugin assets, version and source parity: {plugin}")


def replace_tree(source, destination, force):
    source, destination = source.resolve(), destination.resolve()
    require(source != destination and not source.is_relative_to(destination)
            and not destination.is_relative_to(source), "Destination overlaps source")
    require(force or not destination.exists(), f"Destination exists: {destination}; use --force to replace")
    destination.parent.mkdir(parents=True, exist_ok=True)
    with tempfile.TemporaryDirectory(prefix=".aurora-install-", dir=destination.parent) as temp:
        staged = Path(temp) / "new"
        shutil.copytree(source, staged, ignore=IGNORE)
        previous = Path(temp) / "previous"
        if destination.exists():
            destination.rename(previous)
        try:
            staged.rename(destination)
        except BaseException:
            if previous.exists():
                previous.rename(destination)
            raise


def install_skill(args):
    selected = dependencies(args.skill)
    validate_skills(ROOT, selected)
    dest = args.dest_root.expanduser().resolve()
    # Validate all destinations before making any changes.
    for name in selected:
        target = dest / name
        require(args.force or not target.exists(), f"Destination exists: {target}; use --force to replace")
    for name in selected:
        replace_tree(ROOT / "skills" / name, dest / name, args.force)
    print(f"Installed {', '.join(selected)} into {dest}")
    print("Open a new Codex chat or reload skills to pick up changed instructions.")


def package_skill(args):
    selected = dependencies(args.skill)
    validate_skills(ROOT, selected)
    dest = args.output.expanduser().resolve()
    dest.mkdir(parents=True, exist_ok=True)
    archive = dest / f"{args.skill}.tgz"
    with tarfile.open(archive, "w:gz") as tf:
        for name in selected:
            tf.add(ROOT / "skills" / name, arcname=name,
                   filter=lambda item: None if ".DS_Store" in item.name or "__pycache__" in item.name else item)
    print(f"Packaged complete skill bundle: {archive}")


def package_plugin(args):
    plugin = sync_plugin() if (ROOT / "dashboard/index.html").is_file() else ROOT
    verify_plugin(plugin)
    version = (plugin / "VERSION").read_text().strip()
    output = args.output.expanduser().resolve()
    require(not output.is_relative_to(plugin.resolve()), "Plugin archives must be written outside the plugin tree")
    output.mkdir(parents=True, exist_ok=True)
    stem = f"{PLUGIN}-{version}"
    paths = (output / f"{stem}.zip", output / f"{stem}.tar.gz")
    with zipfile.ZipFile(paths[0], "w", compression=zipfile.ZIP_DEFLATED) as zf:
        for path in sorted(plugin.rglob("*")):
            if path.is_file() and path.name != ".DS_Store" and "__pycache__" not in path.parts:
                zf.write(path, str(Path(PLUGIN) / path.relative_to(plugin)))
    with tarfile.open(paths[1], "w:gz") as tf:
        tf.add(plugin, arcname=PLUGIN, filter=lambda item: None if ".DS_Store" in item.name or "__pycache__" in item.name else item)
    hashes = {p.name: hashlib.sha256(p.read_bytes()).hexdigest() for p in paths}
    (output / f"{stem}.sha256").write_text("".join(f"{sha}  {name}\n" for name, sha in hashes.items()))
    (output / f"{stem}.json").write_text(json.dumps({"name": PLUGIN, "version": version, "sha256": hashes}, indent=2) + "\n")
    print(f"Built plugin archives and checksums in {output}")


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    commands = parser.add_subparsers(dest="command", required=True)
    commands.add_parser("sync")
    commands.add_parser("verify")
    commands.add_parser("verify-skills")
    install = commands.add_parser("install-skill")
    install.add_argument("--skill", choices=SKILLS, default=CANONICAL)
    install.add_argument("--force", action="store_true")
    install.add_argument("--dest-root", type=Path, default=Path(os.environ.get("CODEX_HOME", str(Path.home() / ".codex"))) / "skills")
    package = commands.add_parser("package-skill")
    package.add_argument("--skill", choices=SKILLS, default=CANONICAL)
    package.add_argument("--output", type=Path, default=ROOT / "dist")
    plugin = commands.add_parser("package-plugin")
    plugin.add_argument("--output", type=Path,
                        default=(ROOT if (ROOT / "dashboard/index.html").is_file() else ROOT.parent) / "dist/plugins")
    local = commands.add_parser("install-plugin")
    local.add_argument("target", nargs="?", type=Path, default=Path.home() / "plugins")
    local.add_argument("--force", action="store_true")
    args = parser.parse_args()
    if args.command == "sync":
        sync_plugin()
    elif args.command == "verify":
        verify_plugin(ROOT / "plugins" / PLUGIN if (ROOT / "dashboard/index.html").is_file() else ROOT)
    elif args.command == "verify-skills":
        validate_skills(ROOT)
        print("Verified skill names and Markdown resources")
    elif args.command == "install-skill":
        install_skill(args)
    elif args.command == "package-skill":
        package_skill(args)
    elif args.command == "package-plugin":
        package_plugin(args)
    elif args.command == "install-plugin":
        source = sync_plugin() if (ROOT / "dashboard/index.html").is_file() else ROOT
        verify_plugin(source)
        target = args.target.expanduser() / PLUGIN
        replace_tree(source, target, args.force)
        print(f"Copied plugin distribution to {target}")
        print("Add this path as a local plugin in Codex; copying alone does not register a plugin.")


if __name__ == "__main__":
    try:
        main()
    except (ValueError, FileNotFoundError) as exc:
        sys.exit(f"Aurora distribution error: {exc}")

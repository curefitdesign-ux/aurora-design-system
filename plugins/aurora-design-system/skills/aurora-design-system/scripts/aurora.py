#!/usr/bin/env python3
"""Bind a pinned Aurora skill snapshot to a project without rewriting its UI."""

from __future__ import annotations

import argparse
import hashlib
import json
import os
from pathlib import Path, PurePosixPath
import re
import sys
import tempfile

SKILL_DIR = Path(__file__).resolve().parents[1]
START = "<!-- aurora-design-system:start -->"
END = "<!-- aurora-design-system:end -->"
SCHEMA = 1


class BindingError(Exception):
    pass


def digest(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest()


def json_bytes(value: object) -> bytes:
    return (json.dumps(value, indent=2, sort_keys=True) + "\n").encode()


def relative_path(value: str) -> Path:
    path = PurePosixPath(value)
    if not value or path.is_absolute() or ".." in path.parts or "\\" in value:
        raise BindingError(f"Unsafe snapshot path: {value!r}")
    return Path(*path.parts)


def read_json(path: Path) -> dict:
    try:
        value = json.loads(path.read_text())
    except (OSError, ValueError) as error:
        raise BindingError(f"Cannot read {path}: {error}") from error
    if not isinstance(value, dict):
        raise BindingError(f"Expected a JSON object in {path}")
    return value


def snapshot() -> tuple[bytes, dict, dict[str, bytes]]:
    """Check shipped hashes before allowing the bundle to enter a project."""
    source_file = SKILL_DIR / "assets/source-manifest.json"
    source = read_json(source_file)
    entries = source.get("runtime")
    if not isinstance(entries, list) or not entries:
        raise BindingError("Source manifest needs a nonempty runtime list of path/sha256 records.")
    runtime = SKILL_DIR / "assets/runtime"
    expected = {}
    for entry in entries:
        if not isinstance(entry, dict) or not isinstance(entry.get("path"), str):
            raise BindingError("Malformed runtime record in source manifest.")
        name = entry["path"]
        for prefix in ("assets/runtime/", "runtime/"):
            if name.startswith(prefix):
                name = name[len(prefix):]
                break
        relative = relative_path(name)
        name = relative.as_posix()
        if name in expected:
            raise BindingError(f"Duplicate runtime record: {name}")
        sha = entry.get("sha256", "")
        if not isinstance(sha, str) or not re.fullmatch(r"[a-f0-9]{64}", sha):
            raise BindingError(f"Missing SHA-256 for runtime file: {name}")
        file = runtime / relative
        if file.is_symlink() or not file.is_file() or runtime.resolve() not in file.resolve().parents:
            raise BindingError(f"Missing or unsafe bundled runtime file: {name}")
        content = file.read_bytes()
        if digest(content) != sha:
            raise BindingError(f"Bundled runtime hash mismatch: {name}. Reinstall the skill snapshot.")
        expected[name] = content
    actual = {p.relative_to(runtime).as_posix() for p in runtime.rglob("*") if p.is_file()}
    if actual != set(expected):
        raise BindingError("Runtime inventory differs from source manifest: " + ", ".join(sorted(actual ^ set(expected))))
    if "aurora.css" not in expected:
        raise BindingError("The bundled runtime is missing its aurora.css entrypoint.")
    return source_file.read_bytes(), source, expected


def design_contract(source: dict, copied_runtime: bool, internal: bool = False) -> bytes:
    prefix = "" if internal else ".aurora/"
    repo = source.get("repository", "https://github.com/curefit/curefit-design-system")
    revision = source.get("commit", source.get("ref", "See source manifest"))
    runtime = f"Import `{prefix}runtime/aurora.css` once at the application entrypoint and add `aurora-root` to the requested UI wrapper (plus `theme-white` on the same wrapper for white mode). The path here is relative to this document; resolve the import from the actual application entrypoint." if copied_runtime else "The runtime was not copied. Use the project's verified Aurora implementation, or review this binding before upgrading it to include the runtime."
    react = ""
    if copied_runtime and source.get("libraries", {}).get("react"):
        react = f"\nFor React buttons, form controls, `AuroraScope`, `AuroraCard` and `AuroraBackground`, import from the lightweight `{prefix}runtime/react/native.js` entry. Import compiled styles from `{prefix}runtime/react/styles.css` and optional local Inter faces from `{prefix}runtime/react/fonts.css`; wrap the UI in `AuroraScope`, which automatically supplies the main Aurora gradient. Keep its default `background=\"previous\"`; Figma alternatives are `new`, `old`, `earthy`, and `pilate`. Keep app page containers transparent so the gradient remains visible. The metadata catalog uses `{prefix}runtime/react/index.js` and is indexed by `{prefix}runtime/react/catalog.json`. In the components-only profile, index.js re-exports native.js; static screen renders are omitted. Import only catalog entries marked compiled-export. Adapt Code Connect package imports to these copied project-local exports; never import authoring files by an absolute path into another checkout. Larger visual compositions need the product's handlers and native behavior.\n"
    return f"""{START}
# Aurora Design Contract

Aurora is the visual source of truth for UI work in this project. Read this contract before changing text, controls, layout, icons, or component styling.

Source: {repo}\nPinned revision: `{revision}`.\nProvenance and exact coverage: [{prefix}source-manifest.json]({prefix}source-manifest.json).

{runtime}
{react}
- Inspect the current project's framework, routes, existing Aurora components, and styles before implementation. Reuse verified components and keep their behavior.
- Use actual bundled CSS variables, including `--font-primary`, the `--text-*` typography scales, and the spacing, color, radius, and motion tokens. Do not invent semantic token names that do not exist in the runtime.
- In React, prefer the copied library’s native button and form adapters. For CSS-only integration, buttons use `.aurora-cta` with the verified primary, secondary, tertiary, size, and twins modifiers. Use native buttons for actions and anchors for navigation. Connect every action to product behavior.
- Keep Aurora typography and component geometry. Load the licensed Aurora fonts available to this project; document fallbacks when a font asset is unavailable.
- Use one intentional Aurora theme. A Figma-only control is not an implemented runtime component: inspect its exact node before adapting it, and report any missing evidence or state coverage.
- Remove competing visual styles only from surfaces within the requested change. Preserve unrelated content, data, navigation, and application behavior.
- Do not introduce another design system's visual defaults. External references may inform documentation and organization, never Aurora colors, type, icons, or components.
- Validate affected text and controls in the running product, including keyboard focus, disabled/loading/error states, form labels, mobile layout, and theme behavior. Report untested states honestly.

`aurora.py check` checks snapshot integrity and binding files. It does not certify visual fidelity, accessibility, application wiring, or every component.
{END}
""".encode()


def agent_block() -> str:
    return f"""{START}
## Aurora UI

For UI work in this project, read `DESIGN.md` and `.aurora/source-manifest.json` first, then `.aurora/runtime/react/catalog.json` when the React library is present. Prefer `.aurora/runtime/react/native.js` for React controls and surfaces; index.js re-exports native.js. Import only catalog entries marked compiled-export; other entries are source metadata. Use the Aurora design system's pinned tokens and components, verify missing coverage against Aurora Figma, and preserve product behavior. Apply no other design system's visual defaults. Snapshot integrity checks do not replace testing the running UI.
{END}"""


def project_path(value: str) -> Path:
    path = Path(value).expanduser().resolve()
    if not path.is_dir():
        raise BindingError(f"Project directory does not exist: {path}")
    return path


def inspect_binding(project: Path) -> tuple[dict, list[str]]:
    folder = project / ".aurora"
    if folder.is_symlink():
        raise BindingError(".aurora must be a regular directory, not a symlink.")
    state = read_json(folder / "binding.json")
    problems = []
    if state.get("schema") != SCHEMA or not isinstance(state.get("files"), dict):
        raise BindingError("Unsupported or malformed .aurora/binding.json")
    required = {"DESIGN.md", ".aurora/DESIGN.md", ".aurora/source-manifest.json"}
    if not required.issubset(state["files"]):
        raise BindingError("Binding inventory is missing required contract or provenance files.")
    if any(name != "DESIGN.md" and not name.startswith(".aurora/") for name in state["files"]):
        raise BindingError("Binding inventory contains an unmanaged project path.")
    for name, sha in state["files"].items():
        file = project / relative_path(name)
        if file.is_symlink() or not file.is_file() or project not in file.resolve().parents:
            problems.append(f"Missing or unsafe file: {name}")
        elif digest(file.read_bytes()) != sha:
            problems.append(f"Changed file: {name}")
    expected_runtime = {name for name in state["files"] if name.startswith(".aurora/runtime/")}
    actual_runtime = {p.relative_to(project).as_posix() for p in (folder / "runtime").rglob("*") if p.is_file()}
    for name in sorted(actual_runtime - expected_runtime):
        problems.append(f"Untracked runtime file: {name}")
    source_file = folder / "source-manifest.json"
    if source_file.is_file() and not source_file.is_symlink():
        if digest(source_file.read_bytes()) != state.get("source_manifest_sha256"):
            problems.append("Source manifest differs from the pinned binding revision")
        if state.get("runtime_copied"):
            source = read_json(source_file)
            entries = source.get("runtime")
            if not isinstance(entries, list) or not entries:
                problems.append("Source manifest has no runtime inventory")
            else:
                source_paths = set()
                for entry in entries:
                    if not isinstance(entry, dict) or not isinstance(entry.get("path"), str):
                        problems.append("Malformed runtime record in copied source manifest")
                        continue
                    name = entry["path"]
                    for prefix in ("assets/runtime/", "runtime/"):
                        if name.startswith(prefix):
                            name = name[len(prefix):]
                            break
                    relative = relative_path(name)
                    name = ".aurora/runtime/" + relative.as_posix()
                    source_paths.add(name)
                    file = project / name
                    if file.is_file() and not file.is_symlink() and digest(file.read_bytes()) != entry.get("sha256"):
                        problems.append(f"Runtime differs from source manifest: {name}")
                if source_paths != expected_runtime:
                    problems.append("Runtime inventory differs from copied source manifest")
    if state.get("agent_block_sha256"):
        file = project / "AGENTS.md"
        if file.is_symlink():
            problems.append("Unsafe AGENTS.md symlink")
        else:
            text = file.read_text() if file.is_file() else ""
            if text.count(START) != 1 or text.count(END) != 1:
                problems.append("Missing or duplicate Aurora block in AGENTS.md")
            else:
                block = text[text.index(START):text.index(END) + len(END)]
                if digest(block.encode()) != state["agent_block_sha256"]:
                    problems.append("Changed Aurora block in AGENTS.md")
    return state, problems


def initialize(args: argparse.Namespace) -> dict:
    project = project_path(args.project)
    source_bytes, source, runtime = snapshot()
    folder = project / ".aurora"
    if folder.exists() or folder.is_symlink():
        state, problems = inspect_binding(project)
        if problems:
            raise BindingError("Existing binding was modified; preserve and review it before replacing:\n" + "\n".join(problems))
        if state.get("source_manifest_sha256") != digest(source_bytes) or state.get("runtime_copied") != args.runtime:
            raise BindingError("A different Aurora snapshot or runtime selection is already bound. Review the existing .aurora binding before upgrading it.")
        if args.bind_agent and not state.get("agent_block_sha256"):
            raise BindingError("The existing binding has no AGENTS.md block. Add the documented Aurora instruction manually after reviewing AGENTS.md.")
        return {"status": "unchanged", "project": str(project), "runtime_copied": args.runtime}
    root_design = project / "DESIGN.md"
    if root_design.exists() or root_design.is_symlink():
        raise BindingError("DESIGN.md already exists. Preserve it, reconcile its design contract with Aurora, then choose a clean project or move the reviewed original before initializing. No files were changed.")
    agents = project / "AGENTS.md"
    agent_text = None
    if args.bind_agent:
        if agents.is_symlink() or (agents.exists() and not agents.is_file()):
            raise BindingError("AGENTS.md is not a regular file; refusing to replace it.")
        prior = agents.read_text() if agents.exists() else ""
        if START in prior or END in prior:
            raise BindingError("AGENTS.md already contains an Aurora managed marker. Review it before binding.")
        agent_text = prior.rstrip() + ("\n\n" if prior.strip() else "") + agent_block() + "\n"
    files = {
        "DESIGN.md": design_contract(source, args.runtime),
        ".aurora/DESIGN.md": design_contract(source, args.runtime, internal=True),
        ".aurora/source-manifest.json": source_bytes,
    }
    if args.runtime:
        files.update({f".aurora/runtime/{name}": data for name, data in runtime.items()})
    state = {
        "schema": SCHEMA,
        "source_manifest_sha256": digest(source_bytes),
        "runtime_copied": args.runtime,
        "files": {name: digest(data) for name, data in sorted(files.items())},
    }
    if agent_text is not None:
        state["agent_block_sha256"] = digest(agent_block().encode())
    # Preflight all collisions before writing. Stage the managed directory on the
    # same filesystem so its final placement is one rename.
    with tempfile.TemporaryDirectory(prefix=".aurora-stage-", dir=project) as temp:
        staged = Path(temp) / ".aurora"
        staged.mkdir()
        for name, data in files.items():
            if not name.startswith(".aurora/"):
                continue
            file = Path(temp) / name
            file.parent.mkdir(parents=True, exist_ok=True)
            file.write_bytes(data)
        (staged / "binding.json").write_bytes(json_bytes(state))
        # Exclusive creation handles a concurrent writer without replacing it.
        with root_design.open("xb") as out:
            out.write(files["DESIGN.md"])
        try:
            os.rename(staged, folder)
        except OSError:
            if root_design.read_bytes() == files["DESIGN.md"]:
                root_design.unlink()
            raise
    if agent_text is not None:
        agents.write_text(agent_text)
    next_step = "Use a verified Aurora runtime before styling the application."
    if args.runtime:
        next_step = "For CSS-only UI, import .aurora/runtime/aurora.css and add aurora-root to the wrapper; then verify the running UI."
        if source.get("libraries", {}).get("react"):
            next_step = "For React controls/surfaces, import .aurora/runtime/react/native.js and styles.css, then wrap the UI in AuroraScope. react/index.js re-exports native controls; static screen renders are excluded. CSS-only projects use aurora.css and aurora-root. Resolve paths from the actual entrypoint and verify the running UI."
    return {"status": "initialized", "project": str(project), "runtime_copied": args.runtime, "bound_agent": args.bind_agent, "next": next_step}


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    commands = parser.add_subparsers(dest="command", required=True)
    init = commands.add_parser("init", help="Create an Aurora contract and pinned project snapshot; preserve existing files")
    init.add_argument("--project", required=True)
    init.add_argument("--runtime", action="store_true", help="Copy verified CSS and optional prebuilt React runtime assets")
    init.add_argument("--bind-agent", action="store_true", help="Append an Aurora instruction block to AGENTS.md")
    for name in ("check", "report"):
        command = commands.add_parser(name, help="Inspect binding integrity; no UI or accessibility certification")
        command.add_argument("--project", default=".")
    args = parser.parse_args()
    try:
        if args.command == "init":
            result = initialize(args)
            code = 0
        else:
            project = project_path(args.project)
            state, problems = inspect_binding(project)
            result = {"status": "changed" if problems else "intact", "project": str(project), "runtime_copied": state.get("runtime_copied"), "source": read_json(project / ".aurora/source-manifest.json"), "problems": problems, "scope": "Snapshot integrity only; inspect the running UI separately."}
            code = 1 if problems else 0
        print(json.dumps(result, indent=2))
        return code
    except (BindingError, OSError) as error:
        print(f"Aurora: {error}", file=sys.stderr)
        return 1


if __name__ == "__main__":
    raise SystemExit(main())

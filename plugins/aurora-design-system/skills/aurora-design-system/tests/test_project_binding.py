"""Exercise installation-independent project binding and preservation failures."""

import hashlib
import json
from pathlib import Path
import shutil
import subprocess
import sys
import tempfile
import unittest


SCRIPT = Path(__file__).resolve().parents[1] / "scripts/aurora.py"


class ProjectBindingTest(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory(prefix="aurora binding tests ")
        self.addCleanup(self.temp.cleanup)
        self.root = Path(self.temp.name)
        self.skill = self.root / "installed skill"
        (self.skill / "scripts").mkdir(parents=True)
        shutil.copy2(SCRIPT, self.skill / "scripts/aurora.py")
        self.runtime = self.skill / "assets/runtime"
        self.runtime.mkdir(parents=True)
        self.css = b":root { --font-primary: Inter; }\n.aurora-cta { font-family: var(--font-primary); }\n"
        (self.runtime / "aurora.css").write_bytes(self.css)
        self.source = {"repository": "https://github.com/curefit/curefit-design-system", "commit": "a" * 40, "runtime": [{"path": "aurora.css", "sha256": hashlib.sha256(self.css).hexdigest(), "sourcePath": "my-app/src/index.css"}]}
        self.source_file = self.skill / "assets/source-manifest.json"
        self.write_source()
        self.project = self.root / "another project with spaces"
        self.project.mkdir()
        self.cwd = self.root / "unrelated cwd"
        self.cwd.mkdir()

    def write_source(self):
        self.source_file.write_text(json.dumps(self.source))

    def run_cli(self, command, *args, expected=0):
        result = subprocess.run([sys.executable, str(self.skill / "scripts/aurora.py"), command, "--project", str(self.project), *args], cwd=self.cwd, text=True, capture_output=True)
        self.assertEqual(result.returncode, expected, result.stdout + result.stderr)
        return result

    def initialize(self, *args):
        return self.run_cli("init", "--runtime", *args)

    def test_other_cwd_spaces_idempotence_and_independent_projects(self):
        self.initialize()
        self.assertEqual((self.project / ".aurora/runtime/aurora.css").read_bytes(), self.css)
        first = (self.project / "DESIGN.md").read_bytes()
        result = self.initialize()
        self.assertEqual(json.loads(result.stdout)["status"], "unchanged")
        self.assertEqual((self.project / "DESIGN.md").read_bytes(), first)
        self.run_cli("check")
        self.project = self.root / "third project"
        self.project.mkdir()
        self.initialize()
        self.run_cli("report")

    def test_existing_design_is_preserved_without_partial_binding(self):
        file = self.project / "DESIGN.md"
        file.write_text("Existing project contract\n")
        self.run_cli("init", "--runtime", expected=1)
        self.assertEqual(file.read_text(), "Existing project contract\n")
        self.assertFalse((self.project / ".aurora").exists())

    def test_agent_rules_opt_in_preserve_other_edits(self):
        agents = self.project / "AGENTS.md"
        agents.write_text("Use Dia.\n")
        self.initialize("--bind-agent")
        self.assertTrue(agents.read_text().startswith("Use Dia.\n\n"))
        agents.write_text(agents.read_text() + "\nAn unrelated new instruction.\n")
        self.run_cli("check")
        self.initialize("--bind-agent")
        self.assertIn("An unrelated new instruction.", agents.read_text())

    def test_agent_file_untouched_without_flag(self):
        agents = self.project / "AGENTS.md"
        agents.write_text("Use Dia.\n")
        self.initialize()
        self.assertEqual(agents.read_text(), "Use Dia.\n")

    def test_modified_runtime_detected_and_never_overwritten(self):
        self.initialize()
        runtime = self.project / ".aurora/runtime/aurora.css"
        runtime.write_text("/* local change */\n")
        self.run_cli("check", expected=1)
        self.run_cli("init", "--runtime", expected=1)
        self.assertEqual(runtime.read_text(), "/* local change */\n")

    def test_missing_and_untracked_runtime_files_detected(self):
        self.initialize()
        runtime = self.project / ".aurora/runtime/aurora.css"
        runtime.unlink()
        self.run_cli("check", expected=1)
        runtime.write_bytes(self.css)
        (runtime.parent / "other.css").write_text("foreign runtime")
        self.run_cli("check", expected=1)

    def test_corrupt_bundle_rejected_before_any_project_writes(self):
        (self.runtime / "aurora.css").write_text("corrupt bundle")
        self.run_cli("init", "--runtime", expected=1)
        self.assertEqual(list(self.project.iterdir()), [])

    def test_missing_bundle_rejected_before_any_project_writes(self):
        self.source_file.unlink()
        self.run_cli("init", "--runtime", expected=1)
        self.assertEqual(list(self.project.iterdir()), [])

    def test_manifest_path_traversal_rejected(self):
        self.source["runtime"][0]["path"] = "../outside.css"
        self.write_source()
        self.run_cli("init", "--runtime", expected=1)
        self.assertEqual(list(self.project.iterdir()), [])

    def test_unowned_aurora_directory_is_preserved(self):
        (self.project / ".aurora").mkdir()
        custom = self.project / ".aurora/user.txt"
        custom.write_text("keep")
        self.run_cli("init", "--runtime", expected=1)
        self.assertEqual(custom.read_text(), "keep")
        self.assertFalse((self.project / "DESIGN.md").exists())

    def test_modified_managed_agent_block_detected(self):
        self.initialize("--bind-agent")
        agents = self.project / "AGENTS.md"
        agents.write_text(agents.read_text().replace("pinned tokens", "unverified tokens"))
        self.run_cli("check", expected=1)

    def test_changed_source_requires_review_not_silent_upgrade(self):
        self.initialize()
        self.source["commit"] = "b" * 40
        self.write_source()
        self.run_cli("init", "--runtime", expected=1)
        source = json.loads((self.project / ".aurora/source-manifest.json").read_text())
        self.assertEqual(source["commit"], "a" * 40)


if __name__ == "__main__":
    unittest.main()

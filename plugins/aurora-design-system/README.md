# Aurora Design System 2.0 Plugin

Version 2.0.12 is an offline component-only package. It includes 60 native APIs (with source aliases), Aurora tokens, CSS, fonts, vector backgrounds, icons and small assets required by controls. Heavy reference images and static Figma screen renders are excluded. There is no bootstrap or required download. React 18.2–19 and Python 3.9+ are supplied by the consuming environment.

The full source catalog remains searchable, but only entries marked `compiled-export` are bundled code. `source-metadata-only` entries link to Aurora sources for implementation; they are not functioning components. Both `index.js` and `native.js` expose the native API.

## Public installation

```bash
codex plugin marketplace add https://github.com/curefitdesign-ux/aurora-design-system.git
codex plugin add aurora-design-system@aurora
```

Downloadable releases: https://github.com/curefitdesign-ux/aurora-design-system/releases/latest

For updates, run `codex plugin marketplace upgrade aurora` and then `codex plugin add aurora-design-system@aurora`.

## Use in another project

Enable **Aurora Design System 2.0** in Codex and start a new chat after updating it. Invoke:

```text
Use $aurora-design-system to implement this screen. Bind Aurora to this project's
stack, replace competing styles within the requested scope, and verify typography,
buttons, interactions and responsive behavior against the bundled source evidence.
```

The skill includes its references, implementation assets and compiled React runtime, so it works outside the Aurora repository.

From the source checkout, make the local marketplace available across projects using the supported CLI:

```bash
codex plugin marketplace add /absolute/path/to/Aurora
codex plugin add aurora-design-system@aurora
```

The runtime pins owning-source commit `29ae6058c6a93319dcdf6247578024be60b1ece9` from `main`. For a target web project, use the skill folder shown by Codex:

```bash
python3 "<absolute-skill-folder>/scripts/aurora.py" init --project /path/to/project --runtime --bind-agent
python3 "<absolute-skill-folder>/scripts/aurora.py" check --project /path/to/project
```

Setup copies files and the project contract. Import the runtime and implement Aurora controls using the bundled implementation guide; the integrity check does not certify rendered fidelity or functional behavior.

For React, import the lightweight native entry and its styles from your actual entrypoint:

```tsx
import { AuroraScope, AuroraPrimaryButton } from '../.aurora/runtime/react/native.js';
import '../.aurora/runtime/react/styles.css';
import '../.aurora/runtime/react/fonts.css';

<AuroraScope theme="white">
  <AuroraPrimaryButton icon={false} onClick={continueFlow}>Continue</AuroraPrimaryButton>
</AuroraScope>
```

Adjust relative paths for your project. `native.js` includes native controls and gradient/card surfaces; `index.js` adds the full source composition catalog. Supply application callbacks for product actions. The Inter font import is optional when the app already loads Inter.

For plain CSS, import `.aurora/runtime/aurora.css` once through the app's stylesheet entrypoint and add `aurora-root` to the application root or requested surface wrapper. For white mode put `theme-white` on that same wrapper. Keep overlays within the root/theme scope. The React runtime includes licensed Inter font files; load other required fonts through the project's font pipeline.

## Standalone skill installation

From an extracted plugin directory:

```bash
bash scripts/install-aurora-skill.sh --force
```

This installs the canonical `aurora-design-system` skill globally. Use `--dest-root /path/to/project/.agents/skills` for a project-only installation. Avoid duplicate global and plugin copies of the same skill.

## Preview and verify

From the plugin directory:

```bash
bash scripts/preview-handbook.sh
bash scripts/verify-plugin.sh
```

Open [the component explorer](http://127.0.0.1:4173/assets/handbook/). The server must expose the plugin root so the page can load its shared runtime, assets and local fonts from `skills/`. Verification works even when the plugin is extracted outside its source repository; no deleted skills or parent marketplace files are required.

## Build or copy a distribution

```bash
bash scripts/package-plugin.sh
bash scripts/install-plugin-local.sh /path/to/local/plugins
```

The copy command preserves an existing destination unless `--force` is supplied. Copying files does not register a plugin in Codex: add the copied directory as a local plugin through the app's plugin setup. This repository also exposes the plugin in `.agents/plugins/marketplace.json` for environments supporting local marketplaces.

Plugin archives include checksums and can be written to a custom directory with `--output`. From the maintained source repository, packaging first mirrors `skills/` and `dashboard/` into the plugin. Those bundled directories are generated; make source changes in the repository rather than editing the mirrors.

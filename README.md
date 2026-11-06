# Aurora Design System 2.0

Aurora App and Web design tokens, components, variants, and a reusable Codex skill. This repository distributes the maintained plugin; its source provenance remains inside the package.

## Install in Codex

```bash
codex plugin marketplace add https://github.com/curefitdesign-ux/aurora-design-system.git
codex plugin add aurora-design-system@aurora
```

In the Codex plugin marketplace UI, add `curefitdesign-ux/aurora-design-system` as a source. Install **Aurora Design System 2.0**. Refresh skills or start a new chat if it is not listed.

Then ask:

```text
Use $aurora-design-system to build this UI using only Aurora App and Web components.
Bind the runtime to this project and verify its controls and themes.
```

The plugin contains all resources needed for supported offline work. Figma authentication is only needed when you request live Figma reads or changes. Python 3.9+ is needed for project binding; React projects supply their own compatible React installation. Public directory listing is a separate review process; adding this GitHub marketplace does not require that listing.

## Download or view

- [Latest versioned download](https://github.com/curefitdesign-ux/aurora-design-system/releases/latest)
- [Component explorer](https://curefitdesign-ux.github.io/aurora-design-system/)
- [Full plugin setup guide](plugins/aurora-design-system/README.md)
- [Privacy](PRIVACY.md) · [Source and third-party notices](NOTICES.md)

A downloaded ZIP is a snapshot. Use the marketplace and update commands to receive a later published release.

## Update

```bash
codex plugin marketplace upgrade aurora
codex plugin add aurora-design-system@aurora
```

Projects with a copied `.aurora` runtime remain pinned to their installed snapshot. Use the skill to migrate an existing project to a newer release; inspect local changes before replacing that runtime.

## Included

- Aurora App and Aurora Web sources only: 1,271 exports across 682 browse targets.
- 60 native component APIs, including slider, questionnaire sheet, accordion and categories popup.
- Previous Aurora gradient/cloud composition as the default background; New, Old, Earthy and Pilate Figma backgrounds remain optional.
- Neutral 20% fading card strokes, 80px popup blur, and solid pink dark primary CTA labels.
- Dark and white themes, local fonts, portable assets and source coverage reports.

Source render availability is distinct from verified product workflows. Supply application callbacks and verify final compositions in your target application.

## Standalone project skill

Extract a release ZIP, open its `aurora-design-system` folder, and run:

```bash
python3 scripts/aurora_distribution.py install-skill --dest-root /path/to/project/.agents/skills
```

Choose either the plugin or a standalone skill installation to avoid duplicate skill entries.

## Maintainers

Publish changes from the authoring repository with its `scripts/publish-aurora-public.py` helper. This distribution repository contains the packaged integration. The helper validates the package and publishes versioned archives and checksums. An optional tag-driven GitHub Actions workflow is included in `docs/release-workflow.yml.example`; enabling it requires a maintainer with workflow-write permission. Existing source copyrights and licenses are preserved.

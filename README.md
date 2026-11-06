# Aurora Design System 2.0 — Codex organization install

Pinned 2.0.10 native components and tokens, without heavy reference renders. No personal file paths, Figma credentials or first-use downloads are required. Python 3.9+ runs the project binder; React applications supply React 18.2–19.

## Optional organization installation

In Admin Console > Plugins > Add > Import marketplace:

- Source: https://github.com/curefitdesign-ux/aurora-design-system
- Path: leave empty
- Branch, tag, or commit: v2.0.10-org-opt-in

Authorize read access to this private repository for the workspace import. After importing, select Aurora Design System 2.0 and set Installation policy to **Available for installation**, retaining all intended roles. Repository policy does not apply these workspace settings automatically.

Members who need Aurora install it from the workspace plugin directory, then start a new chat. It is not installed automatically. They do not need individual GitHub repository access after successful workspace-managed distribution.

Starter prompt: `Use $aurora-design-system to build this UI. Bind the packaged runtime to this project and preserve the existing app behavior.`

## Local fallback for members with repository access

```sh
codex plugin marketplace add https://github.com/curefitdesign-ux/aurora-design-system.git --ref v2.0.10-org-opt-in
codex plugin add aurora-design-system@aurora
```

ChatGPT workspace skill sharing and local Codex plugin installation have separate controls. Do not treat a shared ChatGPT skill as proof of local installation.

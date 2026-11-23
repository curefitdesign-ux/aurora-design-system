# Aurora Design System 2.0 — Organization distribution

Access is restricted to the organization. The repository is private and its earlier public Pages preview has been disabled. The workspace plugins below are now published; their sharing is managed separately from repository access.

The shared Codex plugin release is recorded in `latest.json`. Release 2.0.14 documents compact responsive dashboards and inherits the 2.0.13 changes: halved light-mode Aurora background intensity, pure-white cards with independent opacity, and white gradient CTA labels. Existing installations and older workspace skill imports must be updated to adopt the new release; publishing the repository does not automatically replace an organization-managed skill. The component-only package excludes heavy source renders.

## Install from the curefitcodex directory

Both plugins were verified **Visible in curefitcodex directory** on November 23, 2026:

- [Aurora Design System 2.0.14](https://chatgpt.com/plugins/Plugin_73c097ae65348191b91125442b959688)
- [Aurora Taste 1.0.0](https://chatgpt.com/plugins/Plugin_dc3a3d240b5481919b3d5ad61e554143)

Open **Plugins → curefitcodex**, install them, and start a new chat. Design System requires a supported desktop/local executor. Members do not need GitHub access. See [workspace access](docs/workspace-access.md) and [the publication records](docs/workspace-plugins.json).

These are uploaded workspace plugins, so future GitHub pushes do not automatically replace their contents. Update the existing plugin identities when shipping a new package; preserve their directory visibility.

## Repository distribution

Repository source: https://github.com/curefitdesign-ux/aurora-design-system

Workspace admins can import a pinned repository ref under Admin > Plugins > Import marketplace, or upload the prepared skill under Workspace Settings > Skills and set workspace access. Importing a private source requires the admin's GitHub authorization; ordinary members use the workspace skill rather than receiving repository credentials.

Official workspace import guidance: https://learn.chatgpt.com/docs/enterprise/plugin-management

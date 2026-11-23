# Aurora workspace access

Verified on **November 23, 2026**: both plugins are **Visible in curefitcodex directory**. Their saved sharing settings were independently refetched and both returned `LISTED`.

| Plugin | Published version | Install link |
| --- | --- | --- |
| Aurora Design System 2.0 | 2.0.14 | [Open Design System](https://chatgpt.com/plugins/Plugin_73c097ae65348191b91125442b959688) |
| Aurora Taste | 1.0.0 | [Open Aurora Taste](https://chatgpt.com/plugins/Plugin_dc3a3d240b5481919b3d5ad61e554143) |

## Use as a workspace member

1. Select the **curefitcodex** workspace in ChatGPT/Codex.
2. Open **Plugins → curefitcodex** and search for Aurora, or use the links above.
3. Install each plugin. Design System requires a supported local/desktop executor; its web listing offers **Open in desktop app**.
4. Start a new chat. In Codex, use `$aurora-design-system` for Aurora tokens/components and `$aurora-taste` for composition and visual polish.

Workspace members do not need GitHub repository access or a manual skill-folder installation for these published plugins. If the directory was already open, refresh it. Product and member permissions still govern whether a particular member can use plugins and a required execution surface.

Aurora Extended 1.0.4 remains a separate repository/local package. It is not one of the two workspace plugins verified here.

## Maintain the existing publications

The exact workspace, plugin IDs, release IDs, versions, URLs and verification date are recorded in [workspace-plugins.json](workspace-plugins.json). Reuse those IDs for future updates; do not create duplicate plugins.

These two workspace plugins were uploaded and shared directly. **Pushing GitHub changes or creating a GitHub release does not automatically update their uploaded contents.** Update each existing workspace plugin when shipping a new package, preserve directory visibility, and refetch the saved version and sharing status afterward. Existing standalone workspace skill uploads are separate objects and are not proof of a plugin version.

Both directory listings are restricted to the curefitcodex workspace, not the public plugin directory. GitHub repositories remain private. A member role alone does not establish publishing access: sharing/publishing permissions can be granted separately. The earlier absent Share action is a historical troubleshooting observation, not the current publication state.

For future imported marketplaces, use the unified source `https://github.com/curefitdesign-ux/aurora-cross-platform-ui-skill` with Path empty and branch `main`; it contains Design System, Taste and Extended. The separate `aurora-design-system` repository contains Design System only. Do not import another copy solely to install the two listings above.

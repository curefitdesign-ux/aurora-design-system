# OpenAI public directory submission

GitHub marketplace distribution and OpenAI directory listing are separate publication routes.

1. Open https://platform.openai.com/plugins using an OpenAI organization with submission access.
2. Select the verified developer identity that is authorized to represent this distribution.
3. Upload the `*-directory.zip` from this repository's Releases page. The component-only package is below the portal's 100 MiB upload limit.
4. This skills-only package requires local execution; its manifests set `requires_local_executor: true`.
5. Resolve automated metadata and skill findings, then submit for review.
6. After approval, publish the reviewed version from the portal.

The current directory and marketplace profiles contain the same offline components, tokens, types, fonts and required small control assets. Heavy reference images and static screen renders are excluded. No bootstrap download is performed. No Aurora login or MCP server is required. The directory can restrict availability by host and workspace policy; a desktop-only package is not a web-executable plugin.

Review cases:

- Create an Aurora form with primary action, checkbox and dual-thumb slider; verify labels, callbacks, keyboard use and disabled states.
- Build white-theme cards and a popup; verify the previous Aurora background, 20% neutral fading stroke and 80px popup backdrop blur.
- Browse the four Figma background variants while preserving the previous default.
- Request an unrelated writing task; the design-system skill should not replace that task with UI work.

Organization identity verification, legal agreements and OpenAI's review decision belong to the account holder and OpenAI. A GitHub release is not evidence of directory approval.

Official requirements: https://developers.openai.com/plugins/deploy/submission and https://developers.openai.com/plugins/deploy/desktop-only

## Submission status — 2026-11-07

The directory profile uploaded successfully as a draft under Aurora Design System 2.0, version 2.0.11. The portal reports: **“We are not accepting more skills-only submissions at this time.”** This is an eligibility blocker; the plugin is not approved or published in the OpenAI directory. GitHub marketplace installation and the public component explorer remain available. Do not add a placeholder MCP server to bypass this restriction.

The first upload also reported an invalid `Design` category; the revised directory profile uses `Productivity`.

Version 2.0.12 replaces the earlier download-based directory profile with a self-contained component-only package. The 2.0.11 draft does not imply approval of later releases.

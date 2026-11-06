# OpenAI public directory submission

GitHub marketplace distribution and OpenAI directory listing are separate publication routes.

1. Open https://platform.openai.com/plugins using an OpenAI organization with submission access.
2. Select the verified developer identity that is authorized to represent this distribution.
3. Upload the `*-directory-lite.zip` from this repository's Releases page. The portal enforces a 100 MiB upload limit; the complete offline ZIP is larger.
4. This skills-only package requires local execution; its manifests set `requires_local_executor: true`.
5. Resolve automated metadata and skill findings, then submit for review.
6. After approval, publish the reviewed version from the portal.

The directory profile contains its app icon, source provenance, component code, tokens, types and fonts. On first project binding it restores the larger source image assets from the pinned public release after verifying SHA-256 and every runtime hash. Offline preparation accepts the matching complete skill archive. The regular GitHub marketplace package includes the complete offline runtime. No Aurora login or MCP server is required. The directory can restrict availability by host and workspace policy; a desktop-only package is not a web-executable plugin.

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

# Source contract

The owning repository is `curefit/curefit-design-system`. `assets/source-manifest.json` pins the revision, packaged files, transformations, and SHA-256 values. Check that manifest and the actual CSS before using values. Verify live owning source for work that depends on later updates.

The supplied Figma node `3875:26646` is **New? Start Here**, a documentation page. Use `components.md` to select actual components in file `jD7tZtVeQCMRlIHN7L8umI`. The runtime contains all approved App source render exports and all 33 component states from the approved Web file, with 60 native component APIs. Source render coverage does not imply product workflow behavior. Legacy counts collected on 2026-04-17 in audit references are historical observations, not a live inventory.

## Known code/Figma conflict

Figma inspection on 2026-11-06 confirmed Primary `175:36`: white 335×50px container, radius5; Inter700 label at 14px/16px, uppercase, tracking1px, gradient text yellow `#FFDB17` to pink `#FF3278`. Its style is `King CTA Text • Coloured`.

The legacy code CTA utility uses solid pink text, tracking0.5px and line-height1. The new AuroraPrimaryButton native React adapter reuses the exact Figma visuals and therefore preserves Figma’s gradient label and variant geometry. The bundle preserves the code values rather than silently rewriting them; selector scoping and build compatibility transformations are listed in the manifest. For exact Figma Primary fidelity create a documented local adapter with a label span and the verified gradient/text values. Do not apply Primary's tracking globally: Figma Tertiary `716:3369` uses 0.5px, 14px/18px large and 12px/16px small. Resolve conflicts explicitly for the surface being built.

`get_variable_defs` for Primary returned a text style, not semantic variables. Planning names like `color.surface.canvas` and `type.title.lg` do not establish runtime names or values. Use actual `--color-*`, `--text-*`, and `--cta-*` definitions.

The portable adapter also fixes a confirmed cascade bug: white-theme and paired-action gradients overrode disabled Primary styling. Its final disabled selector restores the existing disabled background/text tokens in all themes; no new color values are introduced.

## Scope

The original CSS snapshot is a web adapter with dark defaults and `.theme-white` overrides. The additional React library contains native control adapters and source-backed components/variants from the complete authorized Figma export; read library.md and its coverage files to distinguish code availability from interaction or visual certification. Strategy names Classic/Earthy/Night/Day do not establish four complete implemented themes. Figma's mobile visuals need platform adaptation for desktop and native products.

## Access

On 2026-11-06 Figma reads worked. The connected GitHub account returned 404 for the private owning repository, while the user's authenticated Dia session could read it. This is an account-access mismatch, not proof of a missing repository. Use the pinned bundle for supported offline work and state any limitation affecting live updates. Never extract browser credentials to work around access.

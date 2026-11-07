# Source contract

The owning repository is `curefit/curefit-design-system`. `assets/source-manifest.json` pins the revision, packaged files, transformations, and SHA-256 values. Check that manifest and the actual CSS before using values. Verify live owning source for work that depends on later updates.

The supplied Figma node `3875:26646` is **New? Start Here**, a documentation page. Use `components.md` to select actual components in file `jD7tZtVeQCMRlIHN7L8umI`. The runtime contains all approved App source render exports and all 33 component states from the approved Web file, with 60 native component APIs. Source render coverage does not imply product workflow behavior. Legacy counts collected on 2026-04-17 in audit references are historical observations, not a live inventory.

## Known code/Figma conflict

Figma inspection on 2026-11-06 confirmed Primary `175:36`: white 335×50px container, radius5; Inter700 label at 14px/16px, uppercase, tracking1px, gradient text yellow `#FFDB17` to pink `#FF3278`. Its style is `King CTA Text • Coloured`.

The native code adapters intentionally use solid Aurora pink `#FF3278` for dark primary CTA labels, following the user's approved system rule; white-theme gradient-filled labels use solid white, per the 2026-11-07 user update. Raw Figma evidence previews retain their authored gradient text. Do not reintroduce gradient labels into native primary CTAs. Preserve source variant geometry and typography; Figma Tertiary `716:3369` uses 0.5px tracking, 14px/18px large and 12px/16px small. Do not apply Primary tracking globally.

`get_variable_defs` for Primary returned a text style, not semantic variables. Planning names like `color.surface.canvas` and `type.title.lg` do not establish runtime names or values. Use actual `--color-*`, `--text-*`, and `--cta-*` definitions.

The portable adapter also fixes a confirmed cascade bug: white-theme and paired-action gradients overrode disabled Primary styling. Its final disabled selector restores the existing disabled background/text tokens in all themes; no new color values are introduced.

## Scope

The original CSS snapshot is a web adapter with dark defaults and `.theme-white` overrides. The additional React library contains native control adapters and source-backed components/variants from the complete authorized Figma export; read library.md and its coverage files to distinguish code availability from interaction or visual certification. Strategy names Classic/Earthy/Night/Day do not establish four complete implemented themes. Figma's mobile visuals need platform adaptation for desktop and native products.

## Access

On 2026-11-06 Figma reads worked. The connected GitHub account returned 404 for the private owning repository, while the user's authenticated Dia session could read it. This is an account-access mismatch, not proof of a missing repository. Use the pinned bundle for supported offline work and state any limitation affecting live updates. Never extract browser credentials to work around access.

## 2026-11-07 light-theme update

`light-theme.css` is a user-approved adapter, not an edited upstream evidence file. It halves decorative background alpha while keeping content opacity intact; light cards use white 60% by default and white 80% for raised/popups, with explicit independent white-alpha variants. Gradient CTA labels are white. The earlier ink-on-gradient contrast adaptation is intentionally superseded; no AA claim transfers to the requested white-on-bright-gradient treatment. Dark primary pink labels, disabled states, the neutral 20% fading stroke and popup 80px blur remain unchanged.

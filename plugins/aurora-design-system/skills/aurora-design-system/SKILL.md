---
name: aurora-design-system
description: Build, restyle, or review app and web UI using Cult Aurora only. Use for Aurora text, buttons, forms, components, screens, and migrations in any project. Includes a portable runtime, source provenance, Figma lookup, setup, and checks.
---

## Component-only offline package

This installation includes the working native React APIs, tokens, CSS, fonts, vector backgrounds, icons and small assets needed by controls. Static Figma screen renders and heavy reference images are excluded. No bootstrap download is performed. `react/index.js` re-exports `native.js`. Search the retained catalog, but import only entries marked `codeAvailability: compiled-export`; `source-metadata-only` entries describe Aurora sources and are not bundled code. Use product content for images. The source authoring inventory counts are not the number of bundled native APIs.


# Aurora Design System 2.0

Use Aurora App and Aurora Web as the only visual design libraries for the requested surface. Keep the user's product, content, framework, and functionality. Do not use third-party libraries or copied design systems found among imported Figma references. External systems may inform documentation organization, never the output's visual identity.

## Start in any project

Resolve this skill's folder from the path used to read this file; it is **not** the working directory. All resources below live inside this skill. The packaged runtime requires no sibling skill, Aurora checkout, network connection, or hardcoded machine path.

1. Inspect the target project's `AGENTS.md`, app entrypoint, dependencies, shared components, stylesheet imports, and design rules. Scope changes to the user's request.
2. Read [source contract](references/source-contract.md), [implementation](references/implementation.md), and [complete library usage](references/library.md). These distinguish code, Figma evidence, and missing coverage.
3. Read [component lookup](references/components.md) for the needed components. For React projects search `assets/runtime/react/catalog.json` for the requested text, control, molecule, organism or template, and use the prebuilt component library described in library usage; prefer its native controls over static source visuals. For exact token values inspect [assets/runtime/aurora.css](assets/runtime/aurora.css) and its imports. Proposed semantic names are not implemented CSS variables.
4. For an implementation or migration, bind the project using the helper below. For read-only work, inspect resources without initializing files; `report` describes an existing binding.

```bash
python3 "<absolute-skill-folder>/scripts/aurora.py" init --project "<target-project>" --runtime --bind-agent
python3 "<absolute-skill-folder>/scripts/aurora.py" check --project "<target-project>"
```

`init` copies the runtime and project contract. It does not import styles into the app or replace components. Integrate those explicitly using the implementation guide, including `aurora-root` on the requested surface wrapper. Preserve conflicting existing documents and reconcile the requested scope instead of forcing overwrites. `check` verifies snapshot integrity and setup, **not** visual fidelity or behavior.

## Source precedence

Inspect the packaged catalog and code before making live Figma reads. Existing source-backed components work offline. If live reads hit a quota, continue from the pinned source for covered components, state its freshness, and avoid repeating a full-library scan.

- Owning repository: [curefit/curefit-design-system](https://github.com/curefit/curefit-design-system). The bundle pins a revision; it is not automatically current forever.
- Visual library: [Aurora App DS](https://www.figma.com/design/jD7tZtVeQCMRlIHN7L8umI/Aurora-App-Design-System?node-id=3875-26646). Consult the actual component, variant, and usage description. Prefer an existing organism or molecule over rebuilding atoms.
- Approved web library: [Aurora Web DS](https://www.figma.com/design/2ltwLvqwn6hSKN15ZR9gxB). Confirm imported components against their actual owning file. Other files and copies are outside the approved library scope.
- Reuse project components already mapped to Aurora. Use the snapshot for its supported web subset. For native projects translate verified values and behaviors into native code; CSS is a web adapter.
- When live Figma and code disagree, name and resolve the conflict for the requested surface. Do not silently mix values. Known differences are in the source contract.
- The handbook is a preview and inventory, not proof that every illustrated control has production code. Strategy documents and proposed token names are not runtime definitions.

## Implement Aurora only

- Choose suitable compositions from the full catalog by product intent; library availability does not require placing unrelated controls on a screen. Use actual Aurora type roles, action hierarchy, spacing, geometry, icons, and variants. Load the required fonts; a font-family declaration alone does not load fonts. Report unavailable assets and fallback rendering.
- When converting an existing surface, replace its conflicting theme imports, fonts, component skins, and overrides once Aurora replacements work. Preserve behavior, business logic, and unrelated pages. Do not delete dependencies still used elsewhere.
- Do not add another visual design system, icon family, or styling framework to approximate missing Aurora components. Existing behavior primitives may remain when their visible styling is replaced by verified Aurora styling.
- Missing code is a coverage gap: retrieve exact Figma context and screenshots, implement states in the target stack, and record the source node. Missing evidence is a limitation, not permission to invent an Aurora-looking substitute.
- Use semantic HTML/native controls and real handlers. Cover keyboard, focus, disabled, selected, loading, validation, empty, error, and success behavior where relevant. Exported Figma mockups are not functional controls.
- Preserve verified theme support. Do not fabricate Classic/Earthy values, desktop tables, or responsive tokens just because planning references mention them.

## Verify and hand off

Use [the portable runtime preview](assets/preview.html) for a quick CSS smoke check; it reports its font and coverage limitations. Read [verification](references/verification.md). Run relevant project checks, exercise changed interactions, and compare rendered output with exact Aurora sources at the requested viewport(s). Check changed text roles, controls, icons, states, and layout. Remove in-scope competing styling.

Report files changed, source revision and Figma nodes used, checks performed, and remaining gaps. A packaging or integrity check cannot certify every Aurora component or every future prompt.

## Primary CTA preference

In dark theme, primary CTA text must be solid Aurora pink (`--color-curefit-pink`, `#FF3278`), never gradient text. Apply this to standalone and grouped primary actions. Use the packaged theme adapter; use solid white labels on gradient-filled white-theme CTAs, and preserve disabled-state treatment.

For blur/glass/solid cards with fading strokes, use the packaged `AuroraCard` API documented in [library usage](references/library.md#blur-and-fading-stroke-cards); use Aurora blur and palette tokens only.

Default secondary surfaces to neutral Aurora white shades (10% and 20%), keeping light-theme card fills pure white with independent alpha. Keep yellow and secondary accent colors sparse and purposeful; do not spread them across cards or secondary controls. Preserve solid pink text for dark primary CTAs.

All popup cards, menus, dialogs and bottom sheets must blur the background: use `AuroraCard popup` or the scoped `aurora-popup-card` surface with the default Aurora strong blur (80px). Keep foreground text sharp. Show the blur value in component documentation; opacity alone is not blur. Use `AuroraAccordion` for accordion lists, with consistent 20px insets and aligned title, trailing detail and 24px icon columns. See [popup and accordion usage](references/library.md#popups-and-accordion-lists).

Hard constraint: almost all composed cards must have a 1px neutral fading stroke with exactly 20% peak opacity, in dark and white themes. Use `AuroraCard` (fading is the default) or `aurora-fading-card`. This includes popup cards and sheets. Keep opacity on the stroke only; surface opacity and 80px popup blur are independent. Allow a borderless exception only for nested cards where a second border is unnecessary. Do not use 10% or full-opacity/color strokes. Preserve raw Figma evidence previews.

Hard constraint: always keep the Aurora gradient visible on the main page background. Restore and retain the previous Aurora gradient/cloud composition as the default (`background="previous"`). The four Figma variants `new`, `old`, `earthy`, and `pilate` remain optional; do not switch the default to New. `AuroraScope` provides the background automatically.

## Light-theme surfaces and gradient actions

In light/white mode, reduce only the decorative Aurora background color intensity by exactly 50%: previous cloud opacity is 0.225 (from 0.45), radial mesh peaks are 5% pink, 5% blue and 3% yellow (from 10%, 10%, 6%), and optional Figma background-art opacity is 0.06 (from 0.12). Keep the background visible; never halve opacity on the page, content or text.

Light-theme cards use pure white, never black/ink-alpha backgrounds. The default card fill is white at 60%; stronger/popup surfaces use white at 80%. `AuroraCard surfaceOpacity={10 | 20 | 40 | 60 | 80 | 100}` selects actual white alpha independently; omit it for theme defaults. Solid cards stay opaque. Control/disabled ink-alpha tokens are separate and must not be reused as card fills. Keep the 20% neutral fading stroke and 80px popup blur independent.

A gradient-filled CTA has solid white text, including paired/grouped primary actions in light mode. Dark primary CTAs retain solid Aurora pink labels. Preserve disabled fills and labels. This user-approved paint contract supersedes the earlier white-theme ink-label adaptation; do not describe white text over the bright source gradient as WCAG AA certified.

When primary and secondary CTAs are paired, use matching authored 40px variants (Primary small, Secondary large), equal widths and a shared spacing-token gap; stack both at equal width when the row is too narrow. Keep foreground and disabled semantics intact.

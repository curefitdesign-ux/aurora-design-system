# Implement Aurora in another project

## Setup

Run `scripts/aurora.py init --project <path> --runtime --bind-agent` from the installed skill's absolute folder. It copies runtime into `.aurora/runtime/`, records provenance, and provides a project contract. `--bind-agent` adds a scoped instruction block while preserving existing `AGENTS.md` content. Read existing design rules first; reconcile conflicts within the requested scope.

Import the runtime **once** from the existing global stylesheet/entrypoint. The helper cannot infer the correct import for every framework. Root HTML example:

```html
<link rel="stylesheet" href="./.aurora/runtime/aurora.css">
```

Add `aurora-root` to the application root or the wrapper of the requested surface so its scoped tokens apply. For white mode, put `theme-white` on that same wrapper (or a descendant), not only on an unrelated outer element. Keep overlays/portals inside the Aurora root or give their host its own Aurora root and theme. Generic token names then stay inside the authorized surface.

For Vite import from the actual `src/main.*` with the correct relative path. For Next.js use its router's global stylesheet entrypoint. Keep CSS imports before declarations. Preserve the project's stack. The portable CSS requires no Tailwind installation. Verify production CSS includes imported stylesheets.

## Fonts and page defaults

The runtime declares font families, but contains no font binaries or remote font requests. Load Inter and needed weights through the project's font pipeline. Load Bebas Neue, Roboto Mono, or licensed Bw Modelica only for roles that need them. State any unavailable font; check computed rendering and loaded weights.

Wrap the app entry in `AuroraScope`, which automatically paints the main Aurora gradient using the previous Aurora gradient and clouds by default. Use `background="new" | "old" | "earthy" | "pilate"` only for an explicitly selected alternative. Keep application page wrappers transparent so the gradient stays visible. Use Aurora font and semantic foreground tokens. Avoid duplicating the background wrapper; preserve the previous composition as the default. The portable entry has no global body reset; do not copy handbook navigation or typography into products.

## Buttons and text

```html
<button type="button" class="aurora-cta aurora-cta--primary">Continue</button>
<button type="button" class="aurora-cta aurora-cta--secondary aurora-cta--sm">Details</button>
<button type="button" class="aurora-cta aurora-cta--tertiary" disabled>Unavailable</button>
```

These are code snapshot utilities. Inspect `components/cta.css` for sizes/state modifiers; `.aurora-cta-twins` composes actions. Navigation uses links. `aria-disabled` alone does not prevent keyboard activation: wire behavior or use native disabled buttons. Exact Figma Primary needs the documented adapter in `source-contract.md`.

Type tokens are variables, not the browser h1–h6 scale: Aurora H5 can be larger than H1. Use semantic heading levels independently from visual type roles. Define project wrappers using actual `--text-h1-size`, `--text-h1-weight`, `--text-h1-lh`, `--text-h1-ls` (or another verified role). Cover body, captions, labels, links, and validation text too. Do not substitute documentation-heading styles.

## Other components

Use the additional React library in `library.md` for its available source components and native adapters. The legacy CSS snapshot alone contains no complete framework library; Vue/native implementations still require adaptation. Use `components.md` to locate exact Figma sources and inspect all needed variants, usage descriptions, and screenshots before implementing missing controls. Prefer groups and higher-level compositions where specified. Preserve labels, validation, events, selection, routing, search, dialogs, and async feedback; exported design markup contains no application logic.

Download returned Figma icons/assets locally following its instructions and preserve geometry. Never ship temporary asset URLs or replace Aurora icons with emoji or another icon family.

## Conversion

Map existing controls to Aurora before editing. Replace fonts, color, borders, radii, spacing, icons, elevation and skins together. Once replacements work, remove competing stylesheet imports and overrides on that surface. Retained behavior primitives must use Aurora visual styling. Search changed code and inspect computed styles for leftovers. Preserve unaffected functionality and routes.

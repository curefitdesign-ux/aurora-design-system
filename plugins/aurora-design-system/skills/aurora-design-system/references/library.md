

## Component-only offline package

This installation includes the working native React APIs, tokens, CSS, fonts, vector backgrounds, icons and small assets needed by controls. Static Figma screen renders and heavy reference images are excluded. No bootstrap download is performed. `react/index.js` re-exports `native.js`. Search the retained catalog, but import only entries marked `codeAvailability: compiled-export`; `source-metadata-only` entries describe Aurora sources and are not bundled code. Use product content for images. The source authoring inventory counts are not the number of bundled native APIs.

# Complete Aurora library source and code

## Choose the correct layer

The Aurora App file contains foundations/sub-atoms, atoms, molecules, organisms, templates, exceptions and process components. In an installed skill, read `assets/runtime/react/catalog.json` for exact public nodes, code exports, variants and coverage. The maintained repository also has `figma/component-inventory.json` for the 12-page source inventory; that repository file is not required by a consuming project. Counts describe individual component/variant nodes; a variant family is not the same as a single variant or a placed instance. The main public inventory has 1,063 component/variant nodes and 663 connection targets. The separate Aurora Web library has 33 individual component states in 8 variant families and 11 plain component targets, covering all 6 inspected pages; its 19 targets include Arrow_2. Internal masters expanded inside original Aurora component trees are rendering dependencies, not extra public components.

The portable React build is copied to `assets/runtime/react/` when the distribution is built. `aurora.py init --runtime` copies that build to `.aurora/runtime/react/` alongside the CSS snapshot. The prebuilt code needs React in the consumer project; it needs neither Tailwind, a Figma API connection, nor the original `.fig` archive. In a non-React project, use the exact source contract and CSS assets, and implement the needed controls in that project's stack. Do not replace its framework just to use this package.

Only the provided Aurora App file (`jD7tZtVeQCMRlIHN7L8umI`) and verified Aurora Web file (`2ltwLvqwn6hSKN15ZR9gxB`) are approved design libraries. Standalone documentation helpers, platform examples, copied libraries and other foreign references are excluded from the usable catalog, exported components and active Code Connect templates. Their audit evidence does not authorize using them as product UI.

When Code Connect returns an authoring source path in the Aurora checkout, reuse the matching exported component from the copied runtime. Adapt `@curefit/aurora-library` snippet imports to that local runtime rather than introducing an absolute dependency on the authoring checkout or plugin cache.

Import the copied React exports and compiled stylesheet with paths relative to the actual application entrypoint:

```tsx
import {
  AuroraScope, AuroraBackground, AuroraCard, AuroraPrimaryButton,
  AuroraTextInput, AuroraCheckbox,
} from '../.aurora/runtime/react/native.js';
import '../.aurora/runtime/react/styles.css';

<AuroraScope>
  <AuroraBackground>
    <AuroraCard stroke="fading">
      <AuroraTextInput label="Name" placeholder="Enter your name" />
      <AuroraCheckbox label="Send reminders" />
      <AuroraPrimaryButton icon={false} onClick={save}>Continue</AuroraPrimaryButton>
    </AuroraCard>
  </AuroraBackground>
</AuroraScope>
```

Load the bundled licensed Inter fonts using `react/fonts.css` if the app does not already load Inter through its font pipeline. Other font roles remain their own font families. Exact archive glyph geometry is available for static fidelity and missing font assets; do not substitute a new visual font silently.

Use the independent `react/native.js` entry for the 60 native component APIs, `AuroraScope`, `AuroraBackground` and `AuroraCard`. Its module includes the four approved background vector scenes but no full-screen product scenes or archive image resolver, so a small form does not emit the full source catalog's raster assets. Static source compositions are omitted from this package; implement them from their linked Aurora sources when needed. Both entries use the same `styles.css`; load it once. The catalog records the correct `runtimeModule` and preview props for each entry.

## Gradient and fading strokes

`AuroraScope` automatically supplies the previous Aurora gradient and clouds by default (`background="previous"`). Keep this default. Figma family 22777:33718 remains available through `background="new" | "old" | "earthy" | "pilate"`, or the equivalent `AuroraBackground variant` prop. Figma variants are static; the previous composition supports optional cloud animation. White mode retains the previous theme gradient, with a light adaptation for explicitly selected Figma art. Keep page wrappers transparent.

`AuroraCard` uses the owning Aurora glass surface. `stroke="fading"` is the default and peaks at exactly 20% neutral opacity. Legacy `stroke="reflective"` normalizes to fading. Use `stroke="none"` only for explicitly borderless nested cards. These generic wrappers are compositions of existing code. Use the actual Plan Card component for that Figma composition rather than claiming the generic wrapper is the whole Plan Card.

Source visuals preserve the original component’s paint/theme values. `AuroraScope` theme overrides do not establish Day variants for every archived component. Choose the exact library theme variant when present, and verify any new theme adaptation instead of automatically recoloring brand assets.

## Native controls versus source visuals

The native entry includes 59 interactive APIs and one dynamic review summary. The source questionnaire bottom sheet is available as `AuroraQuestionnaireSheet`, with the six original labels, exclusive selection, keyboard navigation, form/reset state, dismiss and header callbacks, and progress. Use a product dialog wrapper for modal focus trapping. Controls cover action buttons and groups, radios, checkboxes, switches, text/phone/email/password/search/chat fields, dropdowns, chips and grouped choices, the two-thumb vertical slider, counters, dates, tabs, pagination and swipe actions. They reuse the Figma source geometry and Aurora primitives, adding semantics, labels, handlers, state and form behavior. Their white theme uses white card fills and solid-white gradient CTA labels; neutral text and focus use Aurora ink; the dark primary action uses solid Aurora pink (#FF3278), with no text gradient. Original source scenes and icon silhouettes are retained. This adaptation does not establish white variants for every remaining static archive visual. Wire actions to the product; samples are not a backend.

Search aliases in `catalog.json`, not only component names. The actual slider is `AuroraSlider`, Figma `7899:49440` Range Selector, with min/max and two values. The source named “filter slider” (`4410:29253`) is an adjustment icon. The “All Categories Tab” is a complete screen composition, not a button. `AuroraRating` displays aggregate reviews; `AuroraFloatingRating` and `AuroraMoodRating` support sentiment choice. Read the typed declarations for the exact callback and controlled/uncontrolled props.

The bundled explorer provides native control demos, theme switching and searchable working component entries. The retained full catalog is source metadata; its original inventory counts do not describe this component-only runtime.

Static source compositions are not bundled. Read their linked Aurora Figma nodes before implementing those compositions with the provided native APIs.

Variant selectors must select an actual source variant. Invalid or ambiguous combinations must be reported, not approximated with a guessed style. Prefer native adapters for interactive controls even when a matching static archive variant is available.

## Provenance and Code Connect

The library combines high-fidelity Figma design-context evidence with a complete authorized `File > Save Local Copy` export. The archive hash, public inventory, normalized scene hashes, asset hashes and code coverage are tracked separately. A source rebuild verifies the original archive. Consumers use its prebuilt assets and do not need that large source archive.

Code Connect templates live under `packages/aurora-library/figma/`; actual publication responses are retained under `figma/evidence/connections/`. A prepared template is not a published mapping. An existing connection is not proof that its source matches a newer generated export. Use the connection report for the current publication status.

Current server readbacks confirm component-to-file connections but report `hasTemplate: false`. Figma documents that template writes fall back to simple mappings when its server feature flag is disabled ([official setup guidance](https://github.com/figma/mcp-server-guide/blob/main/skills/figma-generate-library/references/code-connect-setup.md)). The validated local templates remain ready for publication through the official CLI with authorized Code Connect write access; do not describe the simple mappings as published prop-aware snippets.

Until GitHub has an authenticated account with access to the owning private repository, local source paths are legitimate Code Connect targets on this machine. Do not invent remote source URLs or claim that the owning GitHub repository was updated. Preserve any pre-existing mappings and distinguish them from mappings created by this work.

## Blur and fading-stroke cards

Use `AuroraCard` for reusable card surfaces. Default card fill is white at 10% in dark mode and 60% in white mode; white popups use 80%. Use `surfaceOpacity={10 | 20 | 40 | 60 | 80 | 100}` for actual pure-white alpha in either theme. Fading strokes stay at 20%. Stroke opacity is a hard constraint: `strokeOpacity` accepts only `20`, and runtime normalization also enforces 20%. The stroke uses semantic white/ink at exactly 20% in both themes. Solid cards retain the opaque theme surface.

`surface="glass"` defaults to 30px blur; `surface="blur"` defaults to 80px; `surface="solid"` disables blur. `blur="weak" | "medium" | "strong"` selects Aurora's 10/30/80px tokens. `stroke="fading"` provides a masked border fading to transparent at both ends without covering content or intercepting clicks.

```tsx
<AuroraCard surface="blur" stroke="fading">…</AuroraCard>
<AuroraCard surface="glass" surfaceOpacity={20} stroke="fading" strokeOpacity={20}>…</AuroraCard>
<AuroraCard surface="solid" stroke="fading">…</AuroraCard>
```

Keep secondary cards, controls, dividers, and strokes neutral. Avoid repeated yellow or secondary-color decoration. Legacy stroke color arguments normalize to neutral. Put any purposeful brand accents in card content, keeping the border neutral. Dark primary CTA text remains solid Aurora pink.

These are code compositions of existing Aurora tokens, not newly published Figma masters. Keep text on semantic foreground tokens. Blur needs content behind the card to be visible.

## Popups and accordion lists

Every popup card uses a real background blur: `AuroraCard popup` defaults to `--aurora-popup-blur: var(--blur-strong, 80px)`. The property is applied as both `backdrop-filter` and `-webkit-backdrop-filter`. It remains translucent even when `surface="solid"` is passed. Keep a theme-aware pure-white surface (dark 10%, white 80%) and 20% neutral fading stroke. The same default applies to scoped `.aurora-popup-card`, `[popover]`, `[role="dialog"]` and `[role="alertdialog"]` containers, plus `AuroraQuestionnaireSheet`. Native OS select menus remain platform-owned.

```tsx
<AuroraCard popup stroke="fading">Popup content</AuroraCard>
<AuroraAccordion title="Main Workout" detail="20 Min">
  Workout details
</AuroraAccordion>
```

`AuroraAccordion` adapts App 5623:38667 and 12185:49429 into a responsive list row: 20px horizontal padding, 84px minimum trigger height, flexible title, right-aligned detail and fixed 24px arrow. Longer titles wrap without shifting the detail/icon columns. Its native button toggles with keyboard or pointer, exposes `aria-expanded` and supports `open`, `defaultOpen`, `onOpenChange` and `disabled`. Original exports remain compatible aliases. Put actual product content in its panel.

Verify backdrop blur over visible detail or photography, not a flat fill. Apply it to the translucent foreground panel, not `filter: blur()` on text, and avoid an opaque ancestor that hides the backdrop. Raw source SVG previews retain original evidence paints; use native surfaces for working popup compositions.

`AuroraCategoriesPopup` is the native implementation of All Categories Tab (10468:56980): it keeps the source photograph, four category sections and source icon silhouettes, with real 80px backdrop blur on the card panels. Its search filters visible actions; wire `onNavigate(section, item)` and `onDismiss` to your product. The gallery reports these callbacks locally. It is an inline surface; host dialog semantics and modal focus management belong to the product.

Hard constraint: use the 1px neutral 20% fading stroke on almost all composed cards, including blur, glass, solid, popup and sheet surfaces. Apply `aurora-fading-card` to other Aurora card containers. The gradient must fade from transparent through a 20% peak back to transparent; do not set opacity on the entire card. Preserve original Figma evidence previews.

Hard constraint: the main page background must keep the previous Aurora gradient/cloud composition by default. Figma variants are optional. Surface alpha, exactly 20% fading strokes and 80px popup blur remain independent.

For non-React pages, `aurora-root` automatically supplies the previous Aurora gradient from the theme tokens. React scopes also provide the prior clouds. Figma variants remain available as vector compositions.

## Light theme intensity and labels

The light-theme adapter halves the decorative cloud, radial mesh and optional artwork opacity. It keeps foreground opacity intact, uses pure-white card/popup fills rather than ink-alpha control tokens, and gives every gradient-filled CTA solid white text. These are current user-approved runtime rules, not retrospective claims about unmodified Figma exports.

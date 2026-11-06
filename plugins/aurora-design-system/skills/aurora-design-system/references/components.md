# Component lookup

Figma file `jD7tZtVeQCMRlIHN7L8umI`. Metadata and selected contexts inspected 2026-11-06. Existence in Figma does not establish packaged production code. Fetch exact node design context and screenshot for implementations beyond the runtime subset.

| Need | Node | Evidence / usage |
| --- | --- | --- |
| Start here | `3875:26646` | Documentation, not a component |
| Principles | `2269:27340` | Design principles |
| Foundations/type/icons | `2255:26433` | Sub-Atoms page; find exact asset/role |
| Primary | `3885:28575` | Family. Large plain `175:36`, with icon `795:592`, disabled `5182:39103`, small `183:3` |
| Secondary | `3885:28583` | Large text `795:428`, small `183:25`; booked/waitlist/full/negative variants |
| Tertiary | `716:3369` | Full context inspected. Large40/small30px, radius5, tracking0.5px |
| Twins | `1016:4406` | 50px `262:42`, 40px `1016:4407` |
| Circular action | `14779:38684` | 30/40px, primary/secondary/disabled |
| Floating action bar | `7062:47949` | CTA+info, multi-action, secondary, checkbox |
| Text input | `3967:28857` | Empty filled `3967:28856`: width335, Inter400 16/20, padding12×16px, radius5, white10% fill. Typed/focused/line/paragraph variants |
| Search | `649:1156` | Default `506:33` inspected. Prefer titlebar variant where available; optional filter |
| Radio | `395:1531` | Selected `183:27` inspected. Figma says prefer Radio Buttons Group; disabled/unselected/subtext variants exist |
| Checkbox | `415:4539` | Selected `183:32` inspected. Figma says prefer Checkboxes Group; disabled/unselected/subtext variants exist |
| Radio group example | `4414:27597` | Instance; resolve parent component |
| Checkbox group example | `5011:34644` | Instance; resolve parent component |
| Toggle | `15732:37431` | Active large `15732:37430`, inactive `15732:37432`, small `19374:46410`/`19374:46412` |
| Single-select chips | `713:31` | Full context inspected. Selection only, never navigation. Selected bold14/18 with border, unselected regular14/20, radius20 |
| Multi-select chips | `795:937` | Inspect variants |
| Tags/badges | `3885:28363` | Status `406:1545`, context `1549:20186`, badges `5011:34546` |
| Progress | `3885:27129` | Continuous `834:3301`, sleek `19796:46921`, timed `563:2124`, discrete `1754:26084` |
| Molecules/cards/tabs/nav | `4840:34813` | Prefer existing higher-level compositions |
| Organisms | `802:17` | Prefer organism where available |
| Templates | `801:0` | Inspect requested template |
| Haptics/transitions | `16240:38273` / `16551:38292` | Platform-specific |

## Coverage

**Bundled code:** tokens; CTA, card, Aurora background utilities; white theme. See manifest for exact files. CSS utilities, not a full component framework.

**Context inspected:** Primary large plain, Tertiary family, empty filled text input, selected radio/checkbox, active large toggle, default search, single-select chip family. Limited visual evidence, not every variant's certification.

**Metadata only:** remaining listed families/variants; fetch context before claiming fidelity.

**Unverified:** desktop tables, date pickers, complex menus, full native implementations, uninspected theme/state combinations. Search source and Figma; if absent, report a missing contract and label any proposed Aurora extension.

## Full source inventory

The original lookup above is a navigation aid, not the full list. The full twelve-page public inventory is `figma/component-inventory.json` in the maintained repository. The complete authorized .fig export supplies source geometry beyond the API examples, and the portable React catalog/coverage records its code exports, variants, native adaptations and verification separately. Read `library.md` for usage and current Code Connect publication evidence.

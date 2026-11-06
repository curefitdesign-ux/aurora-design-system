# Verification

Run the distribution verifier for changed bundles. In consumers run `scripts/aurora.py check --project <path>` from the skill folder. Passing integrity checks do not validate the product's visuals or behavior.

For the requested UI:

1. Run relevant target-project build/lint/type checks and existing tests for affected code.
2. Compare rendered output at requested viewport(s) with exact source. Check type roles/loaded fonts, actions, color, radii, spacing, icons and depth. Name source conflicts.
3. Exercise changed actions: click, keyboard activation, Tab focus, disabled/selected states, form typing/validation, loading/error/success where applicable. Check routing, search/filter, Escape/close and focus restoration for overlays.
4. Check actual theme overrides and contrast. Small visual controls may require larger invisible touch targets; preserve visual geometry.
5. Inspect cascade and changed code for competing themes/skins, raw one-off colors, fallback fonts, temporary asset URLs and dead controls. Preserve unrelated UI.
6. Identify specific unverified sources/assets/states/viewports. Do not certify an entire family from a single inspected variant.

For implementation, fix in-scope mismatches before handoff. Report sources, checks and remaining gaps.

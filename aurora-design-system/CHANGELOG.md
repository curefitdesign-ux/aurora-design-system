# Changelog

## 2.0.2

- Include all approved Aurora Web targets and source states alongside the Aurora App library.
- Ship 57 native controls with source-backed visuals, including the working range slider and questionnaire sheet.
- Resolve shared Figma style overrides and swapped-symbol dependencies without replacing instance geometry.
- Unify the component explorer and defer the full source catalog until needed.
- Retire misleading handbook screenshot icons and preserve one canonical skill/plugin entry.
- Add detached distribution, native source-state props, theme paint, and cross-project consumer checks.

## 2.0.1

- Enforce one canonical Aurora skill in generated and detached plugin distributions.
- Reject unexpected skill entries and verify the Aurora Design System 2.0 display name.
- Preserve the 2.0.0 installation as an immutable previous release.

## 2.0.0

- Rename the plugin and skill display to Aurora Design System 2.0.
- Expose one canonical Aurora skill; retire audit and compatibility entries.
- Replace the Plates-prefixed plugin and marketplace with aurora-design-system@aurora.
- Preserve the verified Aurora App and Web runtime and Code Connect evidence.

## 0.3.0

- Add the complete public Aurora Figma source inventory and source-backed React components/variants.
- Add native control adapters, gradient backgrounds, fading card strokes, and local licensed Inter fonts.
- Record real Code Connect publication results separately from build and verification coverage.
- Bundle the prebuilt library for use in other projects without the source archive or Tailwind.
- Restrict usable components and active connection templates to Aurora App and Aurora Web; exclude standalone references from other libraries.

## 0.2.2 - 2026-11-06

- Corrected disabled primary button styling in white mode, including twin actions.
- Added a preview assertion for disabled controls.

## 0.2.1 - 2026-11-06

- Scoped runtime tokens and white theme to an explicit Aurora root.
- Made background effects opt-in and removed legacy blur overrides.
- Added a bundled implementation preview and updated source provenance.
- Documented root/theme integration and required font loading.

## 0.2.0 - 2026-11-06

- Made the canonical Aurora skill portable across project checkouts.
- Corrected the installer and skill archive to target aurora-design-system.
- Included the canonical dependency for compatibility entrypoint installations.
- Added source-to-plugin synchronization and local resource/drift checks.
- Removed verification dependencies on deleted skills and parent marketplace files.
- Added detached distribution and temporary project smoke tests.

## 0.1.0 - 2026-05-12

- packaged Aurora handbook as a repo-local Codex plugin
- bundled Aurora design-system audit, UI, and migration skills
- included local handbook assets, exported icon bundle, and preview screenshots
- added plugin preview, packaging, install, and verification scripts

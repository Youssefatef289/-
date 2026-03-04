# Palette's Journal - Telal Soul Landing Page

## 2025-03-04 - [Accessibility & Focus Visibility]
**Learning:** Legacy landing pages often disable default focus outlines without providing an alternative, breaking keyboard navigation. Additionally, Arabic sites often miss the correct `lang` attribute, affecting screen reader pronunciation.
**Action:** Always implement high-contrast `:focus-visible` styles and ensure the `lang` attribute matches the primary content language. Use `.sr-only` labels for forms that rely solely on placeholders.

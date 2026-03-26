# Palette's Journal - Telal Soul UX & Accessibility

## 2026-03-26 - Restoring Keyboard Focus and RTL Support
**Learning:** Legacy sites often suppress default browser focus indicators (`outline: none !important`) for aesthetic reasons, which completely breaks keyboard accessibility. For Arabic sites, missing `dir="rtl"` and `lang="ar"` tags also causes incorrect text rendering and poor screen reader support.
**Action:** Always replace `outline: none` with a custom `:focus-visible` style that matches the brand's accent color. Ensure the `html` tag has correct localization attributes to enable proper RTL browser behavior.

# Palette's Journal - UX & Accessibility Learnings

## 2025-05-15 - [Arabic Real Estate Landing Page RTL & A11y]
**Learning:** For Arabic-language landing pages, correctly setting `lang="ar"` and `dir="rtl"` on the `<html>` element is critical for proper layout rendering and screen reader support. Additionally, legacy templates often suppress focus indicators with `outline: none`, which should be replaced with `:focus-visible` to support keyboard navigation. When a "button" is intended for internal navigation (e.g., jumping to a contact form), it should be implemented as a semantic `<a>` link rather than a `<button>` to ensure correct browser behavior and SEO.

**Action:** Always verify `lang` and `dir` attributes on non-English sites. Audit legacy CSS for `outline: none` and replace with a custom `:focus-visible` style. Ensure interactive elements use correct semantic tags (links vs buttons).

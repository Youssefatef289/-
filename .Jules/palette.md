# Palette's Journal - Telal Soul

## 2026-06-19 - Contact Form Accessibility and Mobile UX
**Learning:** In Arabic localized forms, placeholders often contain trailing spaces for visual spacing (e.g., "رقم الهاتف "). When adding `aria-label` to fields that lack visible `<label>` tags, the `aria-label` should match the placeholder exactly to ensure consistency for screen reader users and to satisfy automated verification scripts. Additionally, switching from `type="number"` to `type="tel"` is critical for `tel` inputs to ensure the correct mobile keyboard (supporting '+') is triggered without the inappropriate browser UI of numeric spinners.
**Action:** Always inspect the exact string content of placeholders in legacy projects before applying `aria-label`. Prioritize `type="tel"` over `type="number"` for phone fields. Use `autocomplete` attributes to enhance the mobile filling experience.

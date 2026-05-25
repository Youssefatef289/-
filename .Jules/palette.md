# Palette's UX & Accessibility Journal - Makan North Coast

## 2026-04-25 - Global Focus Suppression in Legacy Templates
**Learning:** Legacy parallax templates often use `outline: none` globally to maintain a "clean" look, which completely breaks keyboard accessibility. Using `:focus-visible` with `!important` and an `outline-offset` is the most surgical way to restore accessibility without regressing the visual design for mouse users.
**Action:** Always check for `outline: none` in `style.css` and prioritize `:focus-visible` restoration as a high-impact, low-risk micro-UX win.

## 2026-04-25 - Localized ARIA in Mixed Language Documents
**Learning:** In projects where the technical `lang` attribute is "en" but the content is localized (Arabic), ARIA labels must strictly match the content language to ensure a coherent experience for screen reader users who expect the language of the UI to match the text they hear.
**Action:** Verify the primary language of the content before adding accessibility metadata, regardless of the HTML tag's `lang` attribute.

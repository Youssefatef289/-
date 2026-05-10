## 2026-04-25 - Language Consistency in Accessibility Metadata
**Learning:** In projects where the UI content is primarily in one language (e.g., Arabic) but the technical boilerplate (e.g., `<html lang="en">`) might be different, accessibility metadata such as `aria-label` and `alt` text must strictly match the content language to provide a coherent experience for local screen reader users.
**Action:** Always localize ARIA labels and alt text to the content's language, regardless of the document's `lang` attribute.

## 2026-04-25 - Surgical Focus Restoration in Legacy Codebases
**Learning:** Legacy projects frequently use global resets like `a:focus { outline: none; }` which break keyboard navigation. Modernizing these with `:focus-visible` allows for high-contrast accessibility improvements that are "invisible" to mouse users, making it an ideal surgical UX win.
**Action:** Replace `outline: none` on interactive elements with high-visibility `:focus-visible` styles to restore accessibility without impacting the visual design for mouse users.

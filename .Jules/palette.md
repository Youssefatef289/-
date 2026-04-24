## 2025-05-14 - Restoring Keyboard Focus in Legacy CSS
**Learning:** Legacy projects often use `outline: none` globally to satisfy aesthetic requirements for mouse users, inadvertently breaking keyboard accessibility. Using `:focus-visible` allows restoring high-contrast indicators only for keyboard users without regressing the visual design for mouse interactions.
**Action:** In legacy environments, surgically replace `outline: none` with high-contrast `:focus-visible` indicators (e.g., 3px solid accent color) to restore accessibility while maintaining visual polish.

## 2025-05-14 - Localizing Accessibility Metadata
**Learning:** For multi-lingual sites, accessibility metadata (ARIA labels, alt text) must match the primary content language to provide a coherent experience for screen-reader users, even if the developer's default is English.
**Action:** Always audit icon-only elements and image galleries for localized descriptions in the project's target language.

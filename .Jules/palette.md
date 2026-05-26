## 2026-05-26 - Surgical Focus Visibility with :focus-visible
**Learning:** In legacy codebases where `outline: none` is used globally to maintain a "clean" look, using `:focus-visible` with `!important` and an `outline-offset` provides a high-contrast accessibility win without regressing the visual design for mouse/touch users.
**Action:** Identify suppressed focus states and implement high-contrast `:focus-visible` rings with appropriate offsets to ensure interactive elements are discoverable by keyboard navigators.

## 2026-05-26 - Localized Accessibility in Multilingual Contexts
**Learning:** When implementing accessibility features (ARIA labels, alt text) in a document where the primary content language (e.g., Arabic) differs from the `lang` attribute (e.g., English), labels must match the content language to ensure screen reader users hear the correct voice synthesis.
**Action:** Always localize ARIA labels and alt text to the language of the surrounding content, even if it differs from the root document language.

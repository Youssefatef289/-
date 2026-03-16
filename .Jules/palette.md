# Palette's UX Journal

## 2025-05-15 - [Accessibility & Keyboard Navigation in Legacy Bootstrap]
**Learning:** In legacy Bootstrap (v4.x) environments where accessibility was often secondary, removing `outline: none` and replacing it with `:focus-visible` provides a modern, accessible experience without cluttering the UI for mouse users. Using `.sr-only` with semantic `<label>` elements is the gold standard for form accessibility even when the design doesn't visually include labels.
**Action:** Always check for `outline: none` in legacy CSS and replace with brand-colored `:focus-visible` rings. Pair placeholders with visually hidden `<label>` elements for screen reader parity.

## 2025-05-15 - [Linguistic & Technical Mobile Polish]
**Learning:** Small touches like correcting typos in localized content (e.g., 'رسالة' vs 'رساله') and using `type="tel"` for phone fields significantly improve the professional feel and usability of a landing page on mobile.
**Action:** Verify spelling in localized content and use semantic input types (`tel`, `email`) to trigger optimized mobile keyboards.

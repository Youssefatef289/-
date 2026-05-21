## 2026-04-25 - [Accessibility Restoration in Legacy CSS]
**Learning:** Legacy projects often use global resets like `a:focus { outline: none; }` which completely break keyboard accessibility. Restoring this via `:focus-visible` allows for high-contrast accessibility for keyboard users without affecting the visual experience for mouse users.
**Action:** Always scan for `outline: none` in global CSS and replace it with a high-contrast `:focus-visible` style that complements the design system.

## 2026-04-25 - [Arabic Accessibility Metadata]
**Learning:** Even when the root document `lang` is set to "en", accessibility metadata (ARIA labels, alt text) for an Arabic-first landing page must be localized to Arabic to ensure a coherent experience for screen reader users in the target demographic.
**Action:** Match the language of ARIA labels and `sr-only` text to the primary content of the page, regardless of the HTML tag's `lang` attribute.

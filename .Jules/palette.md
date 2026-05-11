## 2026-04-25 - Restoring Focus Visibility in Legacy CSS
**Learning:** Legacy projects often use `outline: none` on global `a:focus` or `button:focus` selectors to satisfy aesthetic requirements for mouse users, inadvertently breaking keyboard accessibility. Using `:focus-visible` allows for a high-contrast focus indicator that only appears for keyboard users, providing a compromise that satisfies both design and accessibility requirements.
**Action:** When encountering `outline: none` in CSS, replace it with a specific `:focus-visible` rule using a high-contrast color (like `#d40`) and `outline-offset` to ensure it stands out against diverse backgrounds.

## 2026-04-25 - Form Semantics vs. Placeholders
**Learning:** Relying solely on placeholders for form labels is a common anti-pattern that hinders accessibility (screen readers) and UX (labels disappear when typing).
**Action:** Always pair inputs with `<label>` elements. If the design prohibits visual labels, use a utility class like `.sr-only` to ensure they are available to assistive technologies without altering the UI.

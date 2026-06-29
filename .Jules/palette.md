## 2026-06-19 - Restore keyboard focus visibility
**Learning:** Legacy projects often use global resets like `a:focus { outline: none; }` or library-specific resets (e.g., Magnific Popup's `outline: none !important;`) that break keyboard accessibility. Restoring visibility with `:focus-visible` and `!important` ensures accessibility without affecting mouse users.
**Action:** Always check for `outline: none` resets in both local and library CSS, and use `:focus-visible` with `!important` and `outline-offset` to provide a high-contrast focus indicator.

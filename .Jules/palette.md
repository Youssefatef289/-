## 2026-05-31 - [Restoring Focus Visibility in Legacy CSS]
**Learning:** Legacy projects often suppress focus outlines globally for aesthetics. Using `:focus-visible` with `!important` and `outline-offset` provides a high-contrast indicator for keyboard users while maintaining the original design for mouse users.
**Action:** Always prefer `:focus-visible` over generic `:focus` when restoring accessibility to avoid visual regressions for the majority of users.

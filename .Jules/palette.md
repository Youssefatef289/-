## 2026-04-25 - High-Contrast Focus Visibility Restoration
**Learning:** Legacy CSS often suppresses focus outlines globally via `outline: none`, which is a critical accessibility barrier for keyboard users. Using `:focus-visible` allows for the restoration of high-contrast indicators without altering the visual experience for mouse users, making it a safe and surgical micro-UX win.
**Action:** Always check for `outline: none` in `a:focus` or `button:focus` and replace with a themed `:focus-visible` style (e.g., `3px solid #d40`) to ensure keyboard accessibility.

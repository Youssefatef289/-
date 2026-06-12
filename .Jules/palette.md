## 2025-05-15 - Global Focus Visibility Restoration
**Learning:** Restoring focus visibility via `:focus-visible` with a brand-aligned color and `outline-offset` in legacy codebases is a surgical micro-UX win that significantly improves keyboard accessibility without altering the visual design for mouse users.
**Action:** Always check for `outline: none` or `outline: 0` in legacy CSS and replace with high-contrast `:focus-visible` indicators.

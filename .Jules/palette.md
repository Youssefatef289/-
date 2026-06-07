## 2025-05-14 - Restoration of Focus Visibility in Legacy CSS
**Learning:** Legacy projects often use `outline: none` globally on focus, which is a major accessibility blocker. Restoring visibility via `:focus-visible` with `!important` and an `outline-offset` is a surgical micro-UX win that improves keyboard accessibility without altering the visual design for mouse users.
**Action:** Always check for `outline: none` on `:focus` in legacy codebases and propose `:focus-visible` restoration as a high-impact, low-risk improvement.

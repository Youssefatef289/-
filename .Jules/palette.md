# Palette's Journal - Critical UX Learnings

## 2025-05-15 - Restoring Focus Visibility in Legacy CRLF Environments
**Learning:** Legacy projects often use global `outline: none` on `:focus` states, creating a major accessibility barrier. Restoring these with high-contrast `:focus-visible` styles and `!important` is effective. Additionally, when working in legacy environments with CRLF line endings, using binary-mode Python scripts for surgical edits is essential to maintain a clean git history and stay within PR line-count limits.
**Action:** Always check for `outline: none` in legacy CSS and use `:focus-visible` for surgical restoration. Use binary file handling for CRLF files to avoid accidental encoding or newline conversions.

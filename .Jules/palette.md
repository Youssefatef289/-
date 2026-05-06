## 2026-04-25 - Restoring Focus Visibility in Legacy Bootstrap
**Learning:** Legacy landing pages often use `outline: none` on all focus states to maintain a "clean" look, which completely breaks keyboard navigation. Using `:focus-visible` allows us to restore high-contrast indicators for keyboard users while keeping the UI clean for mouse users by explicitly suppressing the outline on `:focus:not(:focus-visible)`.
**Action:** Always check for `outline: none` in legacy CSS and replace with a targeted `:focus-visible` style using a brand-appropriate high-contrast color (e.g., `#d40` for this project).

## 2026-04-25 - Surgical Edits in CRLF Environments
**Learning:** Modifying legacy files with CRLF line endings using standard Python `open(file, 'w')` causes silent conversion to LF, leading to PRs that appear to replace the entire file.
**Action:** When performing surgical edits on legacy Windows-style files, always use `newline=''` in `open()` or binary mode to preserve the original line endings and keep the diff under the 50-line limit.

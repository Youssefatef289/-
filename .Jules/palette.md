## 2025-05-15 - [Bypassing Patch Failures in Legacy CSS]
**Learning:** In legacy environments with inconsistent line endings (CRLF), standard diff-based patching tools often fail. Using a small Python script to append utility classes and micro-UX styles is a surgical way to ensure changes are applied without manual whole-file replacements.
**Action:** Use Python-based appending for CSS utilities in legacy projects where `replace_with_git_merge_diff` encounters byte-matching errors.

## 2025-05-15 - [High-Impact Focus Visibility]
**Learning:** Many legacy landing pages suppress default focus outlines for "cleanliness," which breaks keyboard accessibility. Restoring `:focus-visible` with a theme-consistent color provides a high-impact micro-UX win that benefits accessibility without affecting mouse users.
**Action:** Prioritize restoring `:focus-visible` in legacy UI audits to improve navigation for keyboard users.

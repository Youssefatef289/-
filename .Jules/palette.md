# Palette's Journal

## 2026-06-19 - Focus Visibility Restoration
**Learning:** Legacy projects often contain global `outline: none` resets in CSS and third-party libraries (Slick, Magnific Popup), which completely break keyboard accessibility by hiding the focus indicator.
**Action:** Use `:focus-visible` with `!important` and `outline-offset` to restore a high-visibility focus indicator that only appears for keyboard users, safely overriding legacy resets without affecting mouse users.

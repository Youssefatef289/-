## 2025-05-14 - Restoring focus visibility in legacy projects
**Learning:** Legacy stylesheets often include `a:focus { outline: none; }` which completely breaks keyboard accessibility. Removing this and replacing it with `:focus-visible` provides a modern solution that helps keyboard users without affecting mouse users.
**Action:** Always check for `outline: none` or `outline: 0` in CSS resets and replace with a high-contrast `:focus-visible` indicator aligned with the brand's color palette.

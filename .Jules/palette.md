## 2026-04-25 - Restoring Focus Visibility in Legacy CSS
**Learning:** Legacy CSS often contains `a:focus { outline: none; }` which completely removes the focus indicator for keyboard users, a major accessibility barrier. Using `:focus-visible` allows us to restore a high-contrast indicator for keyboard users without affecting the visual experience for mouse users.
**Action:** Always check for `outline: none` on interactive elements and replace it with surgical `:focus-visible` styles.

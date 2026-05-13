## 2026-04-25 - Restoration of Keyboard Focus Visibility
**Learning:** Legacy projects often use `outline: none` on interactive elements to satisfy aesthetic requirements for mouse users, inadvertently breaking keyboard accessibility. High-contrast focus rings are essential for accessibility, but can be targeted surgically.
**Action:** Use `:focus-visible` to provide high-visibility focus indicators (e.g., 3px solid outline) while suppressing them for mouse users with `*:focus:not(:focus-visible) { outline: none !important; }`.

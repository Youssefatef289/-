## 2026-04-25 - Focus Restoration vs. Aesthetic
**Learning:** Legacy projects often use `outline: none` to prevent "ugly" focus rings for mouse users, but this breaks keyboard accessibility. Using `:focus-visible` allows for high-contrast indicators only when needed, satisfying both aesthetic and accessibility requirements.
**Action:** Always replace `outline: none` with a `:focus-visible` implementation to ensure keyboard users have visual feedback without affecting the mouse-user experience.

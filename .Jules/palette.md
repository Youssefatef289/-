## 2026-04-17 - Restoring Focus Visibility in Legacy Bootstrap
**Learning:** Legacy projects often globally disable focus outlines (`outline: none`) for aesthetic reasons, which breaks keyboard accessibility. Using `:focus-visible` allows restoring high-contrast indicators for keyboard users while maintaining the desired "clean" look for mouse users.
**Action:** When encountering `outline: none` on interactive elements, replace it with a combination of `:focus-visible` (for high-contrast feedback) and `:focus:not(:focus-visible)` (to keep it hidden for mouse/touch interactions).

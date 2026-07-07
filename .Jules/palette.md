## 2026-07-06 - Restoring Keyboard Visibility
**Learning:** Legacy CSS resets often include `outline: none` on `:focus` states for aesthetic reasons, which completely breaks keyboard accessibility by removing the visual indicator for tab navigation. Modern CSS `:focus-visible` allows for high-visibility indicators that only appear for keyboard users, providing the best of both worlds.
**Action:** Always check for `outline: none` or `outline: 0` in base stylesheets and replace them with purposeful `:focus-visible` styles that match the brand's primary color and ensure sufficient contrast.

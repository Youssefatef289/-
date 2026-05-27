## 2024-05-24 - Restoring Focus Visibility
**Learning:** Legacy CSS often suppresses focus indicators (`outline: none`) for aesthetic reasons, which breaks keyboard accessibility. Using `:focus-visible` allows us to restore these indicators specifically for keyboard users without affecting the visual design for mouse users.
**Action:** Always check for `outline: none` on interactive elements and replace with a high-contrast `:focus-visible` style.

## 2024-05-24 - Semantic CTA Links
**Learning:** Using `<button>` elements without a type or form context for navigation is a common anti-pattern in static sites.
**Action:** Replace non-functional `<button>` tags with semantic `<a>` links when the intent is navigation (e.g., to an anchor or external page), ensuring they are styled as buttons and have appropriate ARIA labels.

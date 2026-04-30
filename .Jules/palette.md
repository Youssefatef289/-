## 2026-04-25 - Global Focus Suppression in Legacy CSS
**Learning:** Legacy projects often use 'a:focus { outline: none; }' to maintain visual cleanliness for mouse users, which breaks keyboard accessibility.
**Action:** Replace global focus suppression with ':focus-visible' styles to restore accessibility for keyboard users while keeping it clean for mouse users. Use high-contrast colors (e.g., #d40) for the outline.

## 2025-05-14 - Restoration of Focus Visibility

**Learning:** In media-heavy legacy landing pages, the use of `outline: none` on focus is a common but detrimental practice that breaks keyboard navigation. High-contrast focus indicators using `:focus-visible` provide accessibility without compromising the aesthetic for mouse users.

**Action:** Always replace `outline: none` with a high-contrast `:focus-visible` style that uses the brand's accent color to ensure interactive elements are discoverable via keyboard.

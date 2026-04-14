# Palette's Journal - Telal Soul Project

## 2025-01-24 - Restoring Focus Visibility and Icon Accessibility
**Learning:** Legacy CSS in this project (likely inherited from a Bootstrap 4 template) globally suppresses focus indicators using `a:focus { outline: none !important; }`. This creates a critical accessibility barrier for keyboard users. Additionally, icon-only navigation elements lack semantic descriptions.

**Action:** Use `:focus-visible` to implement high-contrast, brand-aligned focus indicators (e.g., `3px solid #d40`). This ensures accessibility for keyboard users while maintaining the "clean" look for mouse users via `:focus:not(:focus-visible) { outline: none !important; }`. Always accompany icon-only links with descriptive `aria-label` attributes in the site's primary language (Arabic).

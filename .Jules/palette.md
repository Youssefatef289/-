## 2026-05-09 - Restoring Keyboard Accessibility in Legacy Parallax Sites

**Learning:** In legacy projects (Bootstrap 4) where focus outlines are often globally suppressed (`outline: none`), restoring visibility via `:focus-visible` with a brand-aligned, high-contrast color (e.g., `#d40` orange) ensures WCAG compliance without compromising the "clean" aesthetic for mouse users.

**Action:** Always check `css/style.css` for `outline: none` on interactive elements and provide a surgical `:focus-visible` override.

## 2026-05-09 - Localized Accessibility in Hybrid Language Environments

**Learning:** When a landing page is visually localized (e.g., Arabic content) but uses an English technical skeleton (`lang="en"`), screen reader accessibility (ARIA labels, alt text) MUST be provided in the localized language to prevent a disjointed UX.

**Action:** Audit all icons and images for localized descriptions (Arabic in this case) rather than generic English placeholders.

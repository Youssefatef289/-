## 2026-04-25 - [Accessibility] Restoring Focus Visibility in Legacy CSS
**Learning:** Legacy CSS frameworks often use `outline: none` globally to prevent "ugly" focus rings, which completely breaks keyboard navigation. Removing these rules and replacing them with `:focus-visible` using a brand-compatible high-contrast color (like `#d40` orange) restores accessibility without affecting the visual experience for mouse users.
**Action:** Always scan `style.css` for `outline: none` and `a:focus` blocks. Implement a global `:focus-visible` style that contrasts well with both light and dark background sections.

## 2026-04-25 - [UX] Semantic CTAs for Landing Pages
**Learning:** Minimalist landing page templates often use `<button>` tags as placeholders for primary CTAs. Converting these to semantic `<a>` links with proper fragment identifiers (e.g., `#contact`) improves both the screen-reader experience and functional navigation for all users.
**Action:** Verify that "Contact Us" or "Call to Action" elements are semantic links rather than non-functional buttons.

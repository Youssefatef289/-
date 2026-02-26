## 2025-05-14 - [Semantic HTML for Arabic Real Estate Landing Page]
**Learning:** In Arabic/RTL sites, document-level `lang="ar"` and `dir="rtl"` are essential for correct rendering and accessibility, but legacy templates often miss them. Also, nesting interactive elements (like `<button>` inside `<a>`) is a common mistake that breaks screen reader behavior and valid HTML.
**Action:** Always check the `<html>` tag for proper RTL support when content is in Arabic. When fixing non-functional buttons, prefer converting the `<button>` to an `<a>` tag with button styling rather than nesting them.

## 2025-05-14 - [Arabic RTL Accessibility & Focus Visibility]
**Learning:** Legacy Bootstrap projects often suppress default browser focus styles (`outline: none`) and neglect language metadata (`lang="en"` for Arabic content). This creates a "silent" experience for keyboard and screen reader users. In RTL (Right-to-Left) contexts like Arabic real estate pages, setting `dir="rtl"` is as critical as `lang="ar"` for correct layout flow.

**Action:**
- Always replace `outline: none` with `:focus-visible` using a high-contrast brand color (e.g., `#d40`) and `outline-offset` to provide feedback to keyboard users without affecting mouse users.
- Use Bootstrap's `.sr-only` class to provide semantic `<label>` elements for form inputs that only use `placeholder`, ensuring screen reader compatibility.
- Ensure the `<html>` tag correctly reflects the content's language and direction.

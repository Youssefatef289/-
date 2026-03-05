## 2026-03-05 - [Button to Anchor Conversion in Legacy CSS]
**Learning:** When converting a `<button>` to an `<a>` tag for internal navigation (e.g., smooth scroll) in legacy environments, the CSS often needs explicit `display: inline-flex`, `align-items: center`, `justify-content: center`, and `text-decoration: none` to maintain the original button's vertical alignment and styling.
**Action:** Always include these layout properties when repurposing button styles for anchor tags in non-modern-reset environments.

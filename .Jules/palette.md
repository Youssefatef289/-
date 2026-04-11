## 2025-05-22 - [Accessibility: Focus Indicators in Legacy CSS]
**Learning:** Legacy CSS often suppresses focus indicators with `outline: none` for visual cleanliness, which completely breaks keyboard navigation. Restoring these with `:focus-visible` ensures accessibility without impacting mouse users' aesthetics. Using a brand-consistent high-contrast color (like #d40) makes the indicator feel intentional rather than like a browser default.
**Action:** Always scan for `outline: none` in CSS and replace with `:focus-visible` + high-contrast outline.

## 2025-05-22 - [Accessibility: Screen Reader Support for Arabic Content]
**Learning:** Static landing pages with image-heavy designs often lack Arabic alt text and form labels. Using `.sr-only` (or equivalent) allows providing descriptive context to screen readers without altering the visual design of a pixel-perfect landing page.
**Action:** Use `.sr-only` to provide labels for icon-only buttons and form inputs in legacy Bootstrap/static environments.

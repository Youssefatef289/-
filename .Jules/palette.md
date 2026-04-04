## 2025-05-14 - [Legacy Bootstrap Accessibility]
**Learning:** In legacy Bootstrap (v4.1.3) environments, the `.sr-only` class is the standard for visually hiding elements while keeping them accessible to screen readers, whereas modern versions (v5+) use `.visually-hidden`.
**Action:** Always verify the Bootstrap version in the local `css/bootstrap.min.css` before choosing the utility class for hidden labels.

## 2025-05-14 - [Focus Visibility in Legacy Templates]
**Learning:** Many legacy templates suppress focus outlines globally with `outline: none`, which is a major accessibility blocker. Implementing `:focus-visible` provides a high-contrast alternative that only appears for keyboard users.
**Action:** Use `:focus-visible` with a brand-consistent, high-contrast outline (e.g., `3px solid #d40`) and remove the default outline for mouse users using `:focus:not(:focus-visible)`.

## 2025-05-14 - [Semantic CTAs]
**Learning:** Templates often use `<button>` for internal navigation (scrolling), which breaks standard browser behavior (middle-click to open in new tab, SEO crawling).
**Action:** Convert navigational buttons to `<a>` tags with appropriate `role="button"` or class-based styling to maintain visual consistency while improving semantics.

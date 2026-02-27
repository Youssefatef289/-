# Palette's UX Journal - Critical Learnings

## 2025-05-15 - [Accessibility Pattern: Visually Hidden Labels]
**Learning:** In legacy projects (e.g., Bootstrap 4) where the design relies on placeholders, labels are often omitted. While `visually-hidden` is standard in modern frameworks, older versions use `sr-only`. Crucially, if the framework is loaded via CDN or is an older version, these utility classes might be missing or inconsistent.
**Action:** When adding accessible labels, verify if the framework supports `visually-hidden` or `sr-only`. If not, manually define the `.sr-only` utility in the project's local CSS to ensure screen reader compatibility without breaking the visual layout.

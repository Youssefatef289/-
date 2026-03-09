## 2025-05-15 - [Initial Exploration]
**Learning:** Legacy static site (Arabic content) uses Bootstrap and custom styles. It lacks basic accessibility features like proper `lang` attribute, form labels, and focus indicators.
**Action:** Implement surgical accessibility improvements: set `lang="ar"`, add `.sr-only` labels for form inputs, provide `alt` text for the logo, and restore high-contrast focus indicators using `:focus-visible`.

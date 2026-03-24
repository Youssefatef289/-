## 2025-05-15 - [Arabic Real Estate Accessibility]
**Learning:** Legacy Bootstrap environments (v4.1.3) often lack proper `:focus-visible` support and may require manual injection of `.sr-only` utilities. For RTL sites with heavy imagery like 'Telal Soul', high-contrast focus indicators (#d40) are essential for navigation.
**Action:** Always verify `.sr-only` presence before use; manually inject a standard definition if missing. Use descriptive Arabic alt text instead of generic placeholders for real estate galleries to provide immediate context for screen reader users.

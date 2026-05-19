
## 2026-04-25 - Surgical Focus Restoration and Localization
**Learning:** In legacy projects with suppressed focus states (outline: none), using :focus-visible provides a high-impact, low-risk accessibility win without affecting the visual design for mouse users. Additionally, when the content language (Arabic) differs from the document lang attribute (English), ARIA labels must be localized to the content language to provide a coherent experience.
**Action:** Always check for 'outline: none' in global CSS and replace with surgical :focus-visible styles. Ensure ARIA labels match the displayed language regardless of the <html> lang attribute.

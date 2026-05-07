## 2026-04-25 - Restore Focus Visibility and Form Accessibility
**Learning:** Legacy projects often use 'outline: none' globally, which breaks keyboard navigation. Using ':focus-visible' is a safe way to restore accessibility without affecting mouse users' aesthetic. Also, changing input types (e.g., 'number' to 'tel') and adding ARIA labels significantly improves the mobile and screen reader experience.
**Action:** Always check for 'outline: none' in CSS and replace it with ':focus-visible' styles. Verify form field types and accessibility metadata in localized landing pages.

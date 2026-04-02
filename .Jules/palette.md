## 2025-05-14 - [Accessibility & Form Usability]
**Learning:** The landing page uses Arabic content but is tagged as `lang="en"` and lacks RTL directionality. Furthermore, the contact form relies on placeholders instead of labels, and interactive icons lack ARIA descriptions, making it inaccessible to screen reader users and keyboard navigators.
**Action:** Implement `lang="ar" dir="rtl"`, add semantic `<label>` elements (visually hidden) to the contact form, and provide `aria-label` for icon-only interactive elements. Additionally, restore focus visibility for keyboard users.

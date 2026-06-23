## 2026-06-19 - Improving Mobile Form UX and Accessibility in Arabic Static Sites

**Learning:** In minimalist landing pages where visual labels are omitted in favor of placeholders, screen readers lose context once the user starts typing. Providing `aria-label` attributes that match the placeholders ensures continuous accessibility. Additionally, `type="tel"` is superior to `type="number"` for phone inputs as it triggers a more appropriate mobile keyboard (often including symbols like '+') and avoids browser-specific spinner UI or invalid character restrictions associated with numeric types.

**Action:** Always audit form fields for semantic `autocomplete` attributes and `aria-label` parity with placeholders. Prioritize `type="tel"` for phone numbers to optimize the mobile data entry experience.

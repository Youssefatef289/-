## 2026-06-19 - Enhance Contact Form Accessibility and mobile UX
**Learning:** In minimalist landing pages where visual labels are omitted for aesthetics, ensuring that `aria-label` text matches the placeholder text exactly (including trailing spaces) is critical because placeholders disappear as soon as a user starts typing. Additionally, using `type="tel"` and `autocomplete` attributes significantly improves mobile UX.
**Action:** Always verify placeholder strings (including whitespace) when adding `aria-label` to unlabeled inputs, and prioritize mobile-friendly input types.

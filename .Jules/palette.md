## 2025-01-24 - Accessibility for Label-less Forms
**Learning:** In minimalist designs where visual labels are omitted in favor of placeholders, the interface becomes inaccessible to screen reader users and confusing once typing begins. Matching `aria-label` text to the localized placeholder ensures persistent context for assistive technologies.
**Action:** Always pair localized placeholders with corresponding `aria-label` attributes and appropriate `autocomplete` values in contact forms.

## 2025-01-24 - Mobile UX for Phone Inputs
**Learning:** Using `type="number"` for phone fields in some browsers triggers increment/decrement arrows and doesn't always provide the optimal keyboard. `type="tel"` is the semantic and functional standard for ensuring the correct numeric keypad on mobile devices.
**Action:** Default to `type="tel"` for all phone number inputs to improve mobile ergonomics.

## 2025-05-22 - [Keyboard Accessibility and Semantic Navigation]
**Learning:** Restoring focus indicators via ':focus-visible' while suppressing them for mouse users provides a high-impact accessibility win without affecting the visual design for the majority of users.
**Action:** Always implement ':focus-visible' with a distinct outline and offset when encountering legacy 'outline: none' resets.

## 2025-05-22 - [Mobile Input Optimization]
**Learning:** Using 'type="tel"' for phone inputs is a critical micro-UX improvement for mobile users, ensuring the numeric keypad is displayed automatically.
**Action:** Audit form inputs and replace generic 'text' or 'number' types with 'tel' for phone fields.

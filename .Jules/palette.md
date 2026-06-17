## 2025-05-15 - Improving Contact Form Accessibility and Mobile UX

**Learning:** In minimalist designs where visual labels are omitted for aesthetics, placeholders alone are insufficient for accessibility as they disappear upon user input. Furthermore, using generic input types for phone numbers fails to trigger optimized mobile keyboards.

**Action:** Always provide explicit `aria-label` attributes that match or enhance the placeholder text for screen readers. Use `type="tel"` and `autocomplete` attributes to streamline form filling and improve the mobile experience. Ensure global focus resets like `outline: none` are replaced with brand-aligned `:focus-visible` styles to maintain keyboard accessibility without affecting visual design for mouse users.

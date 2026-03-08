# Palette's Journal - Touch Furniture (تاتش فرنيتشر)

## 2025-05-14 - Initial UX/Accessibility Audit
**Learning:** Legacy static landing pages (Bootstrap 4-ish) often disable focus outlines for aesthetic reasons (`a:focus { outline: none; }`), which completely breaks keyboard navigation. Additionally, icon-only links and decorative icons often lack proper ARIA attributes, making them confusing or noisy for screen reader users.
**Action:** Always restore focus visibility using `:focus-visible` and apply surgical ARIA improvements (`aria-label` for interactive icons, `aria-hidden` for decorative ones). Change phone input types to `tel` to trigger correct mobile keyboards. Use semantic `<label>` elements hidden via `.sr-only` for better form accessibility.

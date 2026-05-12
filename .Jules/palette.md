## 2026-04-25 - Restoring Focus and Arabic Accessibility
**Learning:** Legacy projects often use `outline: none` globally to "clean up" the UI for mouse users, which completely breaks navigation for keyboard/assistive technology users. Furthermore, in localized sites (like this Arabic landing page), even if the document `lang` is set to English, ARIA labels and accessibility metadata must match the content language (Arabic) to provide a coherent screen reader experience.
**Action:** Always replace `outline: none` with `:focus-visible` to restore accessibility without affecting mouse users. Ensure ARIA labels are localized to match the primary content of the page, regardless of the root `lang` attribute.

**Learning:** Using `type="number"` for phone fields is a common but sub-optimal pattern. It allows invalid characters like `e` and doesn't trigger the optimized telephony keypad on mobile.
**Action:** Consistently use `type="tel"` for phone number inputs to improve the mobile UX and provide better semantic hints to the browser.

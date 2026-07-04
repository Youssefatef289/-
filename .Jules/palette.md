## 2026-06-19 - Restoring Keyboard Accessibility in Legacy Projects
**Learning:** Legacy projects often use global `outline: none` or `outline: 0` resets to remove "ugly" focus rings, which completely breaks keyboard navigation. Using the `:focus-visible` pseudo-class allows us to restore these critical accessibility indicators only for keyboard users, avoiding visual noise for mouse users. In projects using third-party libraries (like Magnific Popup or Slick), `!important` is often necessary to override their specific resets.
**Action:** Always check for `outline: none` in CSS and replace it with a high-visibility `:focus-visible` rule. Use `outline-offset` to ensure the ring doesn't overlap the element's border.

## 2026-06-19 - Semantic Input Types for Arabic Mobile UX
**Learning:** Using `type="number"` for phone fields in Arabic (or any) layouts is a "dark pattern" that triggers inappropriate browser UI like numeric spinners and can interfere with character input. `type="tel"` is the correct semantic choice as it triggers the telephony keyboard on mobile (supporting '+', '*', '#') without the intrusive numeric-only restrictions or spinners.
**Action:** Audit all "number" inputs that aren't for strictly mathematical quantities and convert them to `type="tel"` or `type="text"` with `inputmode` as appropriate.

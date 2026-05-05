## 2026-04-25 - Restoration of Focus Visibility in Legacy Bootstrap
**Learning:** Legacy landing pages often use `outline: none` on `:focus` to maintain a clean aesthetic, which completely breaks keyboard navigation. Using `:focus-visible` with a high-contrast outline allows for accessibility without affecting mouse users' visual experience.
**Action:** Always check for `outline: none` in `style.css` and replace with a targeted `:focus-visible` rule.

## 2026-04-25 - Semantic Input Types for Mobile UX
**Learning:** Using `type="tel"` for phone numbers instead of `type="number"` or `type="text"` provides the optimal mobile keyboard (large numeric pads) and avoids browser-specific spinner UI or validation issues common with `type="number"`.
**Action:** Audit contact forms for phone inputs and ensure `type="tel"` is used.

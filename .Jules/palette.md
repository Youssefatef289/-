## 2026-06-19 - Focus Visibility Restoration
**Learning:** Legacy projects often contain `outline: none` on focus, which is a significant accessibility barrier. Restoring focus visibility with `:focus-visible` and using `!important` ensures the improvement is resilient against existing CSS resets in a messy codebase.
**Action:** Always check for `outline: none` and use `:focus-visible` to restore keyboard accessibility while maintaining visual delight for mouse users.

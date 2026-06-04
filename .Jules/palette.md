# Palette's Journal - Telal Soul

## 2025-05-14 - Accessible Focus and Form Labels in Legacy CSS
**Learning:** Legacy static templates often suppress focus indicators (`outline: none`) and omit form labels for a "minimalist" look, which breaks accessibility. Using `:focus-visible` allows for high-contrast accessibility without affecting the visual design for mouse users.
**Action:** Always check for `outline: none` and missing `<label>` tags in static templates. Use theme-consistent colors (e.g., #d40 for this project) for focus rings and provide `aria-label` when visible labels are missing.

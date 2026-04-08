## 2025-05-14 - [Focus States in Legacy Bootstrap]
**Learning:** Legacy projects (Bootstrap 4.x) often globally suppress focus outlines via `outline: none` for aesthetic reasons, which is a major accessibility blocker for keyboard users.
**Action:** Use `:focus-visible` to restore high-contrast focus indicators specifically for keyboard users while keeping the "no-outline" look for mouse users. This provides an immediate accessibility win without compromising the original design aesthetic.

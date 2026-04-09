## 2025-05-14 - [Focus Indicator Restoration]
**Learning:** Legacy CSS often contains `outline: none` on interactive elements to satisfy aesthetic preferences, which completely breaks accessibility for keyboard users.
**Action:** Replace `outline: none` with high-contrast `:focus-visible` styles (e.g., `outline: 3px solid [accent-color]`) to restore accessibility without impacting the visual experience for mouse users.

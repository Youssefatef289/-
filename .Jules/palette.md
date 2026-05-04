## 2026-04-25 - Accessibility Restoration in Legacy Parallax Sites
**Learning:** Restoring focus indicators in legacy parallax designs requires high-contrast styles (e.g., `#d40`) to remain visible against shifting backgrounds. In older projects where `lang` and `dir` are inconsistent, surgical CSS fixes via `:focus-visible` provide a safe path for accessibility without risking layout regressions.
**Action:** Use `:focus-visible` with `outline-offset` and `!important` to override legacy focus-suppression resets (`outline: none`) safely while maintaining visual parity for mouse users.

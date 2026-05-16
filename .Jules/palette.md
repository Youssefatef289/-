## 2026-04-25 - Surgical Accessibility and Repository Hygiene
**Learning:** UX improvements in legacy projects often lack modern accessibility defaults like focus visibility. Restoring these using `:focus-visible` ensures high-contrast feedback for keyboard users without affecting the visual aesthetic for mouse users. However, inclusive design also extends to repository hygiene; including binary verification artifacts or unmanaged scripts in a PR can distract from the code quality and violate engineering standards.

**Action:** Always prioritize `:focus-visible` for surgical accessibility wins. Ensure all automated verification scripts and temporary media are purged from the workspace before staging changes to maintain a clean, code-only PR.

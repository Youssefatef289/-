## 2026-07-06 - Trailing Space in Form Placeholders
**Learning:** In the Telal Soul contact form, the phone input placeholder ('رقم الهاتف ') includes a trailing space. When adding aria-labels to match placeholders for accessibility, these must include the exact same string (including trailing spaces) to ensure consistency and pass automated verification that expects exact matches.
**Action:** Always inspect placeholder strings for invisible characters like trailing spaces before applying matching aria-labels or writing verification assertions.

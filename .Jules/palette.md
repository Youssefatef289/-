## 2026-06-19 - Contact Form Accessibility and Usability
**Learning:** In the Telal Soul contact form, the phone input placeholder ('رقم الهاتف ') includes a trailing space. Exact matches for ARIA labels and verification scripts are necessary. Also, using `type="tel"` instead of `type="number"` for phone fields improves the mobile keyboard experience by allowing '+' and avoiding spinners.
**Action:** Always check for trailing spaces in localized placeholders and use `type="tel"` for phone inputs.

## 2025-05-14 - [Arabic RTL Accessibility]
**Learning:** For static sites primarily in Arabic, setting the `lang="ar"` and `dir="rtl"` attributes is fundamental for screen reader accuracy and proper layout rendering. Additionally, disabling default focus outlines without providing a high-contrast alternative (`:focus-visible`) breaks keyboard navigation.
**Action:** Always ensure `lang` and `dir` are correctly set for the target language, and implement high-contrast focus indicators while removing the default outline for mouse users.

## 2024-05-23 - [Telal Soul Legacy Landing Page]
**Learning:** The project uses a mix of Bootstrap v4.1.3 and v5.3.3. Custom styles in `style.css` use hardcoded physical margins (e.g., `margin-left: -200px`) which interfere with RTL layout when `dir="rtl"` is applied.
**Action:** When enabling RTL, check for physical margin/padding overrides and consider swapping them or using logical properties if supported, though surgical physical swaps are safer for this legacy environment.

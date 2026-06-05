## 2024-05-24 - Restoring Keyboard Visibility and Semantic Navigation

**Learning:** Legacy templates often globally suppress focus indicators (`outline: none`) to achieve a "clean" look, which completely breaks keyboard accessibility. Additionally, the use of `<button>` elements for internal section navigation is common in older parallax designs, leading to poor SEO and broken browser navigation features (like right-click "Open in new tab").

**Action:** Use `:focus-visible` to restore high-contrast focus rings (e.g., `outline: 2px solid #d40 !important`) specifically for keyboard users while keeping the "clean" look for mouse users via `*:focus:not(:focus-visible) { outline: none !important; }`. When converting buttons to links, explicitly apply `display: inline-block` and preserve the original element's dimensions and positioning (e.g., width, height, and centering margins) to prevent layout regressions.

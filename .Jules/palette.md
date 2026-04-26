## 2026-04-25 - [Accessibility Restoration in Legacy Landing Pages]
**Learning:** Legacy projects often use 'outline: none' globally to satisfy aesthetic requirements for mouse users, which breaks keyboard accessibility. Using ':focus-visible' allows for high-contrast focus indicators that only appear for keyboard users, maintaining the clean aesthetic for others.
**Action:** Always replace 'outline: none' with a ':focus-visible' block in legacy CSS to restore accessibility without regressing visual design.

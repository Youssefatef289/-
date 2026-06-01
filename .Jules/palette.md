# Palette's Journal - Telal Soul

## 2025-05-14 - Accessibility Anti-patterns in Legacy CSS
**Learning:** Legacy projects often use 'outline: none' on ':focus' to maintain a certain aesthetic, which breaks keyboard navigation. Replacing this with ':focus-visible' allows for a better UX for both mouse and keyboard users.
**Action:** Use ':focus-visible' with a high-contrast outline to restore accessibility without affecting mouse-click aesthetics.

## 2025-05-14 - Mobile UX for Phone Inputs
**Learning:** Using 'type="number"' for phone fields can lead to unexpected UI (spinners) and may not trigger the optimal keypad on all mobile devices. 'type="tel"' is the semantic and functional standard.
**Action:** Always prefer 'type="tel"' for phone number inputs.

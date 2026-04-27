## 2026-04-25 - Legacy Bootstrap Accessibility
**Learning:** When working with legacy landing pages (Bootstrap v4.1.3), standard modern accessibility classes like `.visually-hidden` (BS5) are not available. Using `.sr-only` is required for providing screen-reader-only labels without disrupting the visual layout.
**Action:** Always verify the local Bootstrap version and utility class availability before implementing accessibility improvements to avoid "invisible" failures where labels might appear on-screen or remain missing.

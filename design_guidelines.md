# Design Guidelines: Minimal Portfolio Website

## Design Approach
**Selected Approach:** Reference-based (Apple HIG inspiration) - minimalist, content-focused aesthetic that celebrates negative space and typography precision.

**Core Principle:** Extreme restraint and typographic excellence. This is an intentionally minimal design statement where every detail matters.

---

## Typography System

**Primary Text (the "hi"):**
- Font: Inter or SF Pro Display from Google Fonts
- Size: 20px (1.25rem) as specified
- Weight: 400 (Regular) or 500 (Medium) for subtle presence
- Letter-spacing: -0.01em for optical balance
- Line-height: 1

**Technical Notes:**
- Use system font stack fallback for instant loading
- Anti-aliasing: -webkit-font-smoothing: antialiased

---

## Layout System

**Spacing Primitives:** Tailwind units of 4, 8, 16, 24
- This minimal design needs precise spacing control

**Viewport Strategy:**
- Full viewport height (h-screen) centering
- Perfect vertical and horizontal alignment using flexbox
- Container: flex items-center justify-center h-screen

**Responsive Behavior:**
- Text remains 20px across all breakpoints
- Centering maintained on all devices
- Touch-safe tap areas if "hi" becomes interactive

---

## Component Specification

**Main Text Element:**
- Semantic: `<h1>` tag for proper document structure
- Position: Absolute center of viewport
- Padding: Minimal breathing room (p-4 for mobile safety)
- No background, no borders, pure text

**Optional Subtle Enhancement:**
- Cursor: pointer if considering hover interaction
- Transition: opacity 300ms for refined feel
- Hover state: opacity-80 for gentle feedback

---

## Accessibility

- High contrast ratio between text and background
- Semantic HTML structure
- Keyboard navigable if interactive
- Screen reader friendly with proper heading hierarchy

---

## Technical Excellence

**Performance:**
- Minimal DOM (single centered element)
- No external assets beyond font
- Instant load time

**Polish Details:**
- Precise optical centering (account for descenders)
- Subpixel rendering consideration
- Text rendering optimization

---

## Images
**No images required.** This design celebrates pure typography and negative space.
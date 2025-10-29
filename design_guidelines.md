# Design Guidelines for Tony Derry Portfolio

## Design Approach

**Reference-Based Approach:** Drawing inspiration from Linear, Stripe, and Vercel's professional aesthetics — combining modern minimalism with technical sophistication to establish credibility in the AI/automation space.

**Core Principles:**
- Rigorous precision: Every element purposefully placed with mathematical spacing
- Technical elegance: Modern without being trendy, professional without being corporate
- Trust through restraint: Strategic use of whitespace and hierarchy
- Accessibility-first: Ensuring readability and usability across all devices

---

## Typography System

**Font Families:**
- Primary (Headings): Inter or DM Sans (Google Fonts) - precise, modern, technical
- Secondary (Body): Inter or System UI Stack - optimal readability

**Type Scale:**
- Hero Headline: 4xl (mobile) → 6xl/7xl (desktop), font-weight: 700, tracking: tight
- Section Titles: 2xl (mobile) → 4xl (desktop), font-weight: 600
- Project Titles: xl → 2xl, font-weight: 600
- Body Text: base → lg, font-weight: 400, line-height: relaxed
- Supporting Text: sm → base, font-weight: 400

---

## Layout System

**Spacing Primitives:** Use Tailwind units of 4, 8, 12, 16, 20, 24, 32 for consistent rhythm
- Section padding: py-16 (mobile) → py-24/py-32 (desktop)
- Component gaps: gap-8 to gap-16
- Container max-width: max-w-6xl with px-6 (mobile) → px-8 (desktop)

**Grid System:**
- Projects: Single column (mobile) → 3-column grid (lg:grid-cols-3)
- About: Single column, max-w-3xl for optimal reading
- Social Links: Horizontal flex layout with gap-6

---

## Component Library

**Hero Section:**
- Full-width container with compelling background image (abstract AI/technology visualization, geometric patterns, or neural network aesthetics)
- Content overlay with subtle gradient backdrop
- Centered layout: headline + subheadline + CTA button
- Height: min-h-[85vh] to min-h-screen
- Button with backdrop-blur-md, semi-transparent background

**About Section:**
- Clean single-column layout, centered
- Text block with generous line-height (1.7-1.8)
- Subtle visual separation with top border or decorative element

**Projects Grid:**
- Card-based layout with hover elevation effect
- Each card: Icon/visual element + title + description
- Consistent card heights with flex layout
- Hover state: subtle transform and shadow enhancement
- Cards have border with low opacity for definition

**Social Links:**
- Icon + text link combination in horizontal layout
- Consistent sizing and spacing
- Hover state: opacity change or subtle underline

**Footer:**
- Simple, centered layout
- Small text with adequate spacing from content above (mt-24)

---

## Visual Hierarchy

**Information Architecture:**
1. Hero (primary focus) - immediate impact
2. About (personal connection) - build trust
3. Projects (expertise demonstration) - showcase capability
4. Social Links (engagement) - enable connection
5. Footer (completion) - professional closure

**Contrast & Balance:**
- High contrast for headings (bold weights)
- Medium contrast for body text
- Low contrast for supporting elements
- Asymmetric balance in hero, symmetric in content sections

---

## Images

**Hero Background Image:**
- Large, high-quality abstract visualization representing AI/technology
- Suggested themes: Neural networks, data flows, geometric abstractions, computational patterns
- Image should be slightly desaturated or have subtle overlay for text readability
- Position: background-position: center, background-size: cover
- Overlay: Dark gradient (top to bottom) with 40-60% opacity for text contrast

**Project Card Icons:**
- Use Heroicons (outline style) for consistency
- Size: w-12 h-12 or w-10 h-10
- Position: Top of each card
- Icons: Cog (n8n), Photo (ComfyUI), ChatBubble (Custom GPTs)

---

## Interactions & Animations

**Minimal, Purpose-Driven:**
- Hero entrance: Subtle fade-in on load (0.8s ease)
- Scroll reveal: Fade-in for sections as they enter viewport (use Intersection Observer)
- Card hovers: Transform scale (1.02) + shadow elevation (200ms ease)
- Button hover: Opacity change (95%) + subtle scale
- Link hover: Underline animation from center

**NO carousel animations, parallax effects, or distracting movements**

---

## Responsive Behavior

**Breakpoints:**
- Mobile-first approach
- md: 768px (tablet)
- lg: 1024px (desktop)
- xl: 1280px (wide desktop)

**Key Adaptations:**
- Hero text sizing and spacing scales dramatically
- Projects: stack vertically on mobile, 2-col on tablet, 3-col on desktop
- Social links: stack on small mobile, horizontal on larger screens
- Padding/margins reduce proportionally on smaller screens

---

## Accessibility Standards

- WCAG AA contrast ratios for all text
- Focus indicators on all interactive elements (ring-2 ring-offset-2)
- Semantic HTML5 structure (header, main, section, footer)
- Alt text for hero background image
- Keyboard navigation support for all interactions
- Proper heading hierarchy (h1 → h2 → h3)

---

## Technical Implementation Notes

- Use CDN for Heroicons: `<script src="https://unpkg.com/@heroicons/vue@2.0.18/dist/outline.js"></script>` or similar
- Google Fonts: Single weight range (400, 600, 700) to optimize performance
- Implement smooth scroll behavior: `scroll-behavior: smooth`
- Use CSS Grid for projects, Flexbox for other layouts
- Ensure all external links open in new tab with rel="noopener noreferrer"
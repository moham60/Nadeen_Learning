---
name: Scientific Spark
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#434655'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#006c49'
  on-secondary: '#ffffff'
  secondary-container: '#6cf8bb'
  on-secondary-container: '#00714d'
  tertiary: '#005e6e'
  on-tertiary: '#ffffff'
  tertiary-container: '#00788c'
  on-tertiary-container: '#d7f6ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#acedff'
  tertiary-fixed-dim: '#4cd7f6'
  on-tertiary-fixed: '#001f26'
  on-tertiary-fixed-variant: '#004e5c'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
  surface-pure: '#FFFFFF'
  text-rich: '#0A2540'
  gradient-start: '#2563EB'
  gradient-end: '#06B6D4'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: '400'
    lineHeight: 32px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
  section-gap-lg: 160px
  section-gap-md: 80px
  stack-sm: 12px
  stack-md: 24px
---

## Brand & Style

This design system is built for a high-end educational platform that balances the rigor of science with the elegance of modern SaaS aesthetics. The brand personality is **Elegant, Minimal, and Trustworthy**, aiming to evoke a sense of professional clarity and intellectual inspiration. 

The visual direction follows a **Modern SaaS (High-End)** style, heavily influenced by the precision of Linear and the fluid elegance of Stripe. It utilizes extensive whitespace, sophisticated glassmorphism, and a disciplined approach to layout. The interface prioritizes readability and structural hierarchy to ensure that complex educational content feels approachable and premium.

## Colors

The palette is anchored by a deep "Scientific Blue" that signals authority and reliability. This is complemented by an energetic emerald green for secondary actions and a bright cyan for accents and highlights. 

- **Primary & Secondary:** Used for high-priority actions, progress indicators, and brand-defining elements.
- **Backgrounds:** The primary canvas is pure white (`#FFFFFF`), with `#F9FAFB` used for section differentiation to create subtle depth without introducing heavy borders.
- **Gradients:** Use soft Blue-to-Cyan linear gradients (135 degrees) for hero backgrounds, decorative floating elements, and primary call-to-action buttons to add a "spark" of energy.
- **Typography Tinting:** Use the `text-rich` (`#0A2540`) color for headlines to maintain a softer, more premium contrast than pure black.

## Typography

The typography system is designed to be highly legible and "RTL-ready." While **Hanken Grotesk** provides a sharp, modern feel for both headlines and body text, it should be paired with a high-quality Arabic font like **Cairo** in implementation to ensure a seamless bilingual experience.

- **Headlines:** Feature tight letter-spacing and substantial weights to command attention.
- **Body Text:** Employs generous line heights (1.6x) to facilitate long-form reading and educational comprehension.
- **Labels:** Monospaced fonts are used sparingly for technical data points, "eyebrow" tags, or metadata to lean into the "Scientific" aspect of the brand.

## Layout & Spacing

This design system utilizes a **12-column fluid grid** for desktop, shifting to a single-column layout for mobile. 

The layout philosophy is "Ample and Airy." We use significant vertical padding between sections (`section-gap-lg`) to prevent information overload. 
- **Content Alignment:** Center-aligned hero sections for landing pages, transitioning to right-aligned layouts for Arabic localized educational dashboards.
- **Safe Zones:** Always maintain a minimum 20px margin on mobile devices.
- **Rhythm:** Use a base 8px scale for all internal component spacing (padding/margins) to ensure mathematical consistency.

## Elevation & Depth

Hierarchy is achieved through a mix of **Tonal Layers** and **Stripe-inspired Multi-layered Shadows**. 

- **Shadows:** Avoid default CSS shadows. Use three layered box-shadows with varying blurs and very low opacities (2-4%) to create a natural, "floating" effect for cards and primary buttons.
- **Glassmorphism:** Use for navigation bars and secondary overlays. Apply a `backdrop-filter: blur(12px)` with a semi-transparent white background (`rgba(255, 255, 255, 0.7)`).
- **Dividers:** Use extremely subtle 1px lines in `#F1F5F9`. For a more modern look, use gradients that fade out at the edges for horizontal rules.
- **Interactive States:** On hover, elements should slightly lift (translateY -4px) and their shadow should become more diffused.

## Shapes

The shape language is friendly yet structured. A consistent radius of **20px** is applied to major containers (cards, modals, and featured sections). 

- **Buttons:** Follow the card roundedness for a cohesive look.
- **Inputs:** Use slightly smaller radius (12px) to maintain a functional, precise feel.
- **Floating Shapes:** Use large, organic, "blob" shapes with low-opacity gradients in the background to break the rigidity of the grid and add a sense of "discovery."

## Components

### Buttons
- **Primary:** Gradient background (Blue-to-Cyan), 20px roundedness, white text, and a soft shadow.
- **Secondary:** White background with a subtle border and the primary blue for text.
- **Tertiary/Ghost:** No background, primary blue text, subtle hover background of `#F9FAFB`.

### Cards
- Pure white background, 20px roundedness, multi-layered soft shadow. 
- Padding should be generous (typically 32px or 40px).
- Optional: Use a subtle 1px border in `#F1F5F9` to define edges on high-brightness screens.

### Input Fields
- Subtle gray background (`#F9FAFB`) that turns white on focus.
- 12px roundedness.
- High-contrast labels (Body-md weight: 600).

### Chips & Tags
- Used for categories (e.g., "Physics", "Mathematics").
- Pill-shaped (fully rounded) with low-saturation backgrounds derived from the brand colors (e.g., light emerald background with emerald text).

### Lists
- Use custom iconography (scientific symbols or clean icons) instead of standard bullets.
- Generous vertical spacing between list items to maintain the premium feel.

### Glass Modals
- High blur, light border (`1px solid rgba(255,255,255,0.4)`), and centered positioning.
---
name: Scientific Spark Dark
colors:
  surface: '#051424'
  surface-dim: '#051424'
  surface-bright: '#2c3a4c'
  surface-container-lowest: '#010f1f'
  surface-container-low: '#0d1c2d'
  surface-container: '#122131'
  surface-container-high: '#1c2b3c'
  surface-container-highest: '#273647'
  on-surface: '#d4e4fa'
  on-surface-variant: '#c3c6d7'
  inverse-surface: '#d4e4fa'
  inverse-on-surface: '#233143'
  outline: '#8d90a0'
  outline-variant: '#434655'
  surface-tint: '#b4c5ff'
  primary: '#b4c5ff'
  on-primary: '#002a78'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#0053db'
  secondary: '#a4c9ff'
  on-secondary: '#00315d'
  secondary-container: '#0267b8'
  on-secondary-container: '#d6e5ff'
  tertiary: '#bec6e0'
  on-tertiary: '#283044'
  tertiary-container: '#656d84'
  on-tertiary-container: '#eef0ff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#d4e3ff'
  secondary-fixed-dim: '#a4c9ff'
  on-secondary-fixed: '#001c39'
  on-secondary-fixed-variant: '#004883'
  tertiary-fixed: '#dae2fd'
  tertiary-fixed-dim: '#bec6e0'
  on-tertiary-fixed: '#131b2e'
  on-tertiary-fixed-variant: '#3f465c'
  background: '#051424'
  on-background: '#d4e4fa'
  surface-variant: '#273647'
typography:
  display-lg:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-desktop: 64px
  margin-tablet: 32px
  margin-mobile: 16px
  max-width: 1440px
---

## Brand & Style

This design system is a sophisticated, high-performance evolution of the brand, optimized for deep-focus environments and high-end technical interfaces. It targets researchers, data scientists, and engineers who require a premium workspace that minimizes eye strain while maintaining a sense of prestige.

The design style is **Corporate Modern with Glassmorphic accents**. It utilizes deep navy layers and slate tones to establish a logical hierarchy, punctuated by the brand's signature blue. The aesthetic is precise, clean, and authoritative, evoking the feeling of a cutting-edge laboratory or a high-altitude mission control center. Large amounts of negative space and rigorous typographic alignment ensure that complex data remains the focal point.

## Colors

The palette is anchored by a deep spectrum of blues and slates to ensure depth and readability in a dark environment.

- **Primary (#2563eb):** Reserved for primary actions, progress indicators, and brand highlights. In dark mode, this maintains high energy against dark backgrounds.
- **Secondary (#60a5fa):** A lighter, vibrant blue used for interactive states, text links, and subtle data visualizations.
- **Surface Palette:**
  - **Base:** #020617 (Deep Navy) for the background.
  - **Surface:** #0f172a (Slate Navy) for primary containers.
  - **Elevated:** #1e293b (Light Slate) for cards and modals.
- **Typography:** #f8fafc (Slate 50) for primary text to ensure maximum contrast and clarity; #94a3b8 (Slate 400) for secondary metadata.

## Typography

The typography system prioritizes technical precision and legibility. 

- **Headlines:** Use **Geist** for its clean, technical aesthetic and excellent spacing. It provides the "premium" feel required for high-end SaaS applications.
- **Body:** Use **Inter** for all functional text. It is highly readable in dark mode across various screen densities.
- **Monospace:** **JetBrains Mono** is utilized for labels, data points, and code snippets, reinforcing the scientific narrative of the system.

On mobile devices, display sizes scale down significantly to maintain composition balance, while body sizes remain constant to preserve accessibility.

## Layout & Spacing

The system follows a **Fixed Grid** philosophy on desktop to maintain an editorial, structured feel, transitioning to a fluid model for mobile.

- **Desktop (12 columns):** 1440px max-width, 24px gutters, and 64px outer margins.
- **Tablet (8 columns):** Fluid width, 24px gutters, and 32px margins.
- **Mobile (4 columns):** Fluid width, 16px gutters, and 16px margins.

The spacing rhythm is based on a 4px baseline grid. Use larger increments (32px, 48px, 64px) for section vertical spacing to maintain the "high-end" airy feel, even within a dark interface.

## Elevation & Depth

In this dark mode environment, depth is communicated through **Tonal Layers** and **Subtle Inner Glows** rather than heavy shadows.

- **Level 0 (Base):** #020617. The deepest layer.
- **Level 1 (Cards/Sidebar):** #0f172a with a 1px border of #1e293b.
- **Level 2 (Modals/Popovers):** #1e293b. These elements receive a soft, blue-tinted ambient shadow (0px 10px 30px rgba(0, 0, 0, 0.5)) to separate them from the background.
- **Overlays:** Use a 40% opacity blur (Backdrop Filter: blur(12px)) on #020617 to create a sophisticated glass effect for navigation bars and floating headers.

## Shapes

The shape language is **Soft** and professional. This prevents the interface from feeling too aggressive while maintaining a serious, technical tone.

- **Standard Elements (Buttons, Inputs):** 0.25rem (4px) corner radius.
- **Containers (Cards, Sections):** 0.5rem (8px) corner radius.
- **Large Components (Modals):** 0.75rem (12px) corner radius.

Avoid fully rounded pill shapes except for specific status tags or badges to maintain the geometric, structured aesthetic.

## Components

- **Buttons:**
  - **Primary:** #2563eb background, #ffffff text. High-contrast, sharp.
  - **Secondary:** Transparent background, #1e293b border, #f8fafc text.
- **Inputs:** Darker background than their parent container (#020617) with a 1px #1e293b border. Focus state uses a 2px #2563eb ring.
- **Cards:** Utilize the Level 1 elevation (Slate Navy). Headers within cards should be separated by a subtle 1px border (#1e293b).
- **Chips/Badges:** Small, uppercase JetBrains Mono text. For "Success" or "Active," use a subtle background tint of the color with high-saturation text (e.g., emerald text on a very dark emerald tint).
- **Data Tables:** High-contrast headers in #f8fafc. Row separators should be #1e293b at 0.5px thickness to keep the interface feeling lightweight.
- **Navigation:** Vertical sidebars use the Base color (#020617) to provide a strong structural frame for the Surface content.
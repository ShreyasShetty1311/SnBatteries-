# SN Batteries — MASTER Design System
> Global Source of Truth. All page-level files in `pages/` inherit from here and may override specific rules.

---

## Project Identity

| Field | Value |
|-------|-------|
| **Product** | SN Batteries Sales & Service — Corporate Website |
| **Category** | B2B Service / Local Enterprise |
| **Pattern** | Enterprise Gateway + Social Proof Hybrid |
| **Style** | Trust & Authority + Swiss Modernism 2.0 |
| **Developer Credit** | Designed & Developed by iMARK TECHSERV |

---

## Color Palette

```css
:root {
  /* Brand */
  --color-primary:        #0F172A; /* Deep Navy — authority, trust */
  --color-primary-700:    #1E293B; /* Slightly lighter navy for gradients */
  --color-primary-600:    #334155; /* Section backgrounds, secondary text */
  --color-on-primary:     #FFFFFF;

  /* Accent / CTA */
  --color-accent:         #0369A1; /* Electric Blue — action, energy */
  --color-accent-hover:   #0284C7;
  --color-accent-light:   #E0F2FE; /* Light tint for badges, chips */
  --color-on-accent:      #FFFFFF;

  /* Energy Orange — battery / power motif accent */
  --color-energy:         #EA580C; /* Used sparingly: badges, highlights */
  --color-energy-light:   #FFF7ED;

  /* Surface */
  --color-background:     #F8FAFC;
  --color-surface:        #FFFFFF;
  --color-surface-raised: #F1F5F9; /* Cards on white backgrounds */

  /* Text */
  --color-foreground:     #020617;
  --color-text-primary:   #0F172A;
  --color-text-secondary: #475569;
  --color-text-muted:     #94A3B8;

  /* UI */
  --color-border:         #E2E8F0;
  --color-border-strong:  #CBD5E1;
  --color-muted:          #E8ECF1;
  --color-ring:           #0369A1;
  --color-destructive:    #DC2626;

  /* Trust / Status */
  --color-success:        #059669;
  --color-warning:        #D97706;
  --color-gold:           #F59E0B; /* Star ratings */

  /* Glassmorphism */
  --glass-bg:             rgba(255, 255, 255, 0.12);
  --glass-border:         rgba(255, 255, 255, 0.18);
  --glass-blur:           blur(16px);
}
```

---

## Typography

```css
/* Google Fonts import */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap');

:root {
  --font-heading: 'Poppins', sans-serif;
  --font-body:    'Inter', sans-serif;
}
```

### Type Scale

| Token | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| `--text-hero` | 64px / 4rem | 700 | 1.1 | Hero headline (desktop) |
| `--text-hero-mobile` | 38px | 700 | 1.15 | Hero headline (mobile) |
| `--text-h1` | 48px / 3rem | 700 | 1.15 | Page headings |
| `--text-h2` | 36px / 2.25rem | 600 | 1.2 | Section headings |
| `--text-h3` | 24px / 1.5rem | 600 | 1.3 | Card headings |
| `--text-h4` | 18px / 1.125rem | 600 | 1.4 | Sub-headings |
| `--text-body-lg` | 18px | 400 | 1.7 | Lead paragraphs |
| `--text-body` | 16px | 400 | 1.65 | Body copy |
| `--text-body-sm` | 14px | 400 | 1.6 | Secondary info |
| `--text-caption` | 12px | 500 | 1.5 | Labels, badges |

**Letter Spacing Rules:**
- Hero & H1: `letter-spacing: -0.03em`
- H2–H3: `letter-spacing: -0.02em`
- Body: `letter-spacing: 0`
- Badges/Labels: `letter-spacing: 0.05em; text-transform: uppercase`

---

## Spacing System (8px base unit)

```css
:root {
  --space-1:  4px;
  --space-2:  8px;
  --space-3:  12px;
  --space-4:  16px;
  --space-5:  20px;
  --space-6:  24px;
  --space-8:  32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;
  --space-32: 128px;

  /* Section vertical padding */
  --section-py-sm: 64px;
  --section-py:    96px;
  --section-py-lg: 128px;
}
```

---

## Grid System

```css
:root {
  --grid-columns:    12;
  --grid-gap:        24px;
  --container-sm:    640px;
  --container-md:    768px;
  --container-lg:    1024px;
  --container-xl:    1280px;
  --container-2xl:   1440px;
  --container-gutter-mobile: 16px;
  --container-gutter-tablet: 32px;
  --container-gutter-desktop: 40px;
}

.container {
  width: 100%;
  max-width: var(--container-xl);
  margin-inline: auto;
  padding-inline: var(--container-gutter-desktop);
}
@media (max-width: 768px) {
  .container { padding-inline: var(--container-gutter-mobile); }
}
```

---

## Border Radius

```css
:root {
  --radius-sm:   4px;
  --radius-md:   8px;
  --radius-lg:   12px;
  --radius-xl:   16px;
  --radius-2xl:  24px;
  --radius-3xl:  32px;
  --radius-full: 9999px;

  /* Component-specific */
  --radius-card:    var(--radius-xl);
  --radius-button:  var(--radius-lg);
  --radius-input:   var(--radius-md);
  --radius-badge:   var(--radius-full);
}
```

---

## Elevation / Shadow System

```css
:root {
  --shadow-xs:  0 1px 2px rgba(15, 23, 42, 0.06);
  --shadow-sm:  0 2px 8px rgba(15, 23, 42, 0.08);
  --shadow-md:  0 4px 16px rgba(15, 23, 42, 0.10);
  --shadow-lg:  0 8px 32px rgba(15, 23, 42, 0.12);
  --shadow-xl:  0 16px 48px rgba(15, 23, 42, 0.14);
  --shadow-2xl: 0 24px 64px rgba(15, 23, 42, 0.18);

  /* Colored accent shadow for CTA buttons */
  --shadow-accent: 0 8px 24px rgba(3, 105, 161, 0.30);
  --shadow-energy: 0 8px 24px rgba(234, 88, 12, 0.25);
}
```

---

## Animation & Motion

```css
:root {
  /* Durations */
  --duration-instant: 80ms;
  --duration-fast:    150ms;
  --duration-normal:  250ms;
  --duration-slow:    400ms;
  --duration-slower:  600ms;
  --duration-page:    500ms;

  /* Easings */
  --ease-out:    cubic-bezier(0.0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);

  /* Standard transitions */
  --transition-colors:    color var(--duration-fast) var(--ease-out),
                          background-color var(--duration-fast) var(--ease-out),
                          border-color var(--duration-fast) var(--ease-out);
  --transition-shadow:    box-shadow var(--duration-normal) var(--ease-out);
  --transition-transform: transform var(--duration-normal) var(--ease-out);
  --transition-all:       all var(--duration-normal) var(--ease-in-out);
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Button System

### Variants

| Variant | Background | Text | Border | Use Case |
|---------|-----------|------|--------|---------|
| `btn-primary` | `--color-accent` | white | none | Primary CTA |
| `btn-primary-dark` | `--color-primary` | white | none | Hero dark CTAs |
| `btn-secondary` | transparent | `--color-accent` | 2px accent | Secondary actions |
| `btn-ghost` | transparent | `--color-text-primary` | 1.5px border | Tertiary actions |
| `btn-energy` | `--color-energy` | white | none | WhatsApp-adjacent CTAs |
| `btn-whatsapp` | `#25D366` | white | none | WhatsApp buttons |
| `btn-icon` | circular | icon | none | Social/floating |

### Specifications

```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 15px;
  line-height: 1;
  letter-spacing: 0.01em;
  border-radius: var(--radius-button);
  cursor: pointer;
  transition: var(--transition-all);
  text-decoration: none;
  white-space: nowrap;
  user-select: none;
}

/* Sizes */
.btn-sm  { padding: 10px 20px; font-size: 13px; }
.btn-md  { padding: 14px 28px; font-size: 15px; }
.btn-lg  { padding: 16px 36px; font-size: 16px; }
.btn-xl  { padding: 18px 44px; font-size: 17px; }

/* States */
.btn-primary:hover {
  background: var(--color-accent-hover);
  box-shadow: var(--shadow-accent);
  transform: translateY(-1px);
}
.btn-primary:active { transform: translateY(0); }
```

---

## Card System

```css
/* Base card */
.card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-card);
  box-shadow: var(--shadow-sm);
  transition: box-shadow var(--duration-normal) var(--ease-out),
              transform var(--duration-normal) var(--ease-out),
              border-color var(--duration-fast) var(--ease-out);
}

.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
  border-color: var(--color-accent);
}

/* Glass card (for hero overlays) */
.card-glass {
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-card);
}
```

---

## Form Components

```css
.input {
  width: 100%;
  padding: 12px 16px;
  font-family: var(--font-body);
  font-size: 15px;
  color: var(--color-text-primary);
  background: var(--color-surface);
  border: 1.5px solid var(--color-border);
  border-radius: var(--radius-input);
  transition: border-color var(--duration-fast) var(--ease-out),
              box-shadow var(--duration-fast) var(--ease-out);
  outline: none;
}

.input:focus {
  border-color: var(--color-accent);
  box-shadow: 0 0 0 3px rgba(3, 105, 161, 0.12);
}

.input::placeholder { color: var(--color-text-muted); }

.input-error {
  border-color: var(--color-destructive);
  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.10);
}
```

---

## Badge / Chip Components

```css
.badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  border-radius: var(--radius-badge);
}

.badge-primary { background: var(--color-accent-light); color: var(--color-accent); }
.badge-energy  { background: var(--color-energy-light); color: var(--color-energy); }
.badge-success { background: #DCFCE7; color: var(--color-success); }
```

---

## Header Specification

```
Position:         fixed top-0, full width, z-index: 1000
Initial state:    background: transparent; backdrop-filter: none
Scrolled state:   background: rgba(255,255,255,0.90); backdrop-filter: blur(20px);
                  border-bottom: 1px solid var(--color-border); box-shadow: var(--shadow-sm)
Height:           72px desktop, 64px mobile
Transition:       all 300ms ease-out
Logo:             Left-aligned — company name in Poppins 700, accent color OR actual logo image
Nav Links:        Inter 500, 15px, color: var(--color-text-primary)
Nav Hover:        color: var(--color-accent); position relative
                  ::after { width: 100%; height: 2px; background: accent; bottom: -2px }
Active:           color: var(--color-accent); weight: 600
CTA Button:       btn-primary btn-sm — "Call Now"
Mobile Drawer:    Slides in from right; overlay: rgba(0,0,0,0.5); width: 80vw max 320px
```

---

## Footer Specification

```
Background:   var(--color-primary) #0F172A
Text:         white / --color-text-muted (slate-400)
Grid:         4 columns desktop | 2 columns tablet | 1 column mobile
Sections:     Company Info | Quick Links | Services | Contact
Border top:   1px solid rgba(255,255,255,0.10)
Copyright:    centered, text-muted, font-size: 14px
Developer:    "Designed & Developed by iMARK TECHSERV" — link opens imarktechserv.com new tab
Social icons: 40×40px rounded buttons, hover lift + glow
```

---

## Floating Action Buttons

```
Position:     fixed bottom-6 right-6, z-index: 999
Stack order:  Instagram | Facebook | WhatsApp | Call (bottom)
Size:         52×52px
Border-radius: 50%
Shadow:       var(--shadow-lg)
Entry animation: staggered slide-in from right (150ms delay each)
Hover: scale(1.12) + shadow pulse
Colors:
  Instagram → gradient(#E1306C, #833AB4)
  Facebook  → #1877F2
  WhatsApp  → #25D366
  Call      → var(--color-accent)
```

---

## Breakpoints

```css
:root {
  --bp-mobile:  375px;
  --bp-sm:      640px;
  --bp-md:      768px;
  --bp-lg:      1024px;
  --bp-xl:      1280px;
  --bp-2xl:     1440px;
  --bp-ultra:   1920px;
}

/* Usage: mobile-first */
@media (min-width: 640px)  { /* sm  */ }
@media (min-width: 768px)  { /* md  */ }
@media (min-width: 1024px) { /* lg  */ }
@media (min-width: 1280px) { /* xl  */ }
@media (min-width: 1440px) { /* 2xl */ }
```

---

## Icon System

- **Library:** Lucide Icons (SVG, consistent 2px stroke, 24×24 default)
- **Alternative:** Heroicons outline for structural nav
- **Size tokens:** 16px (sm), 20px (default), 24px (md), 32px (lg), 48px (xl — service cards)
- **Never use:** Emoji as icons. Raster PNG icons.
- **Color rule:** Icons inherit text color. Accent icons use `--color-accent`.
- **Service cards:** 48px icon, rounded 12px bg in `--color-accent-light`

---

## Section Pattern Language

Each page section follows this structure:
```
┌──────────────────────────────────────────────────┐
│  [EYEBROW BADGE] — e.g. "Our Services"           │
│  [HEADLINE H2]                                   │
│  [Sub-description, max 2 lines, text-secondary]  │
│  [Content Grid / Cards / etc.]                   │
└──────────────────────────────────────────────────┘
```
- Eyebrow badge: `badge-primary` pill with small category label
- Headlines: Poppins 700, `--text-h2`, `--color-text-primary`
- Odd sections: `background: --color-background`
- Even sections: `background: --color-surface`

---

## Anti-Patterns (NEVER DO)

- ❌ Bootstrap default blue (`#007BFF`)
- ❌ Material Design card shadows (too pronounced)
- ❌ Random gradient blobs / mesh gradients everywhere
- ❌ AI pink/purple aesthetic
- ❌ Comic Sans, Lobster, or display fonts for body
- ❌ Horizontal scroll on mobile
- ❌ Content hidden behind sticky header
- ❌ Emojis as structural icons
- ❌ 100vw images causing layout shift
- ❌ Animations that run longer than 600ms

---

## WCAG AA Compliance

| Pair | Contrast Ratio | Pass |
|------|---------------|------|
| `#0F172A` on `#F8FAFC` | 19.5:1 | ✅ AAA |
| `#FFFFFF` on `#0369A1` | 5.2:1 | ✅ AA |
| `#475569` on `#FFFFFF` | 5.7:1 | ✅ AA |
| `#FFFFFF` on `#0F172A` | 19.5:1 | ✅ AAA |
| `#0369A1` on `#F8FAFC` | 5.0:1 | ✅ AA |
| `#94A3B8` on `#FFFFFF` | 2.9:1 | ⚠️ use only for decorative text |

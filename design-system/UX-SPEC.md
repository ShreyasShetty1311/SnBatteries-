# SN Batteries — UX Page Specifications

## HOME PAGE

### Hero Section
- **Purpose:** Create powerful first impression, establish trust, drive branch/contact action
- **Primary Action:** "Find Nearest Branch" → `/branches`
- **Secondary Action:** "Contact Us" → `/contact`
- **Layout:** Full-viewport height, dark navy gradient background, bold headline left-aligned (desktop), centered (mobile)
- **Content:**
  - Trust badge: pill chip — "Bengaluru's Trusted Battery Network"
  - H1: ~60px Poppins 800, white, 2–3 lines max
  - Sub-copy: 18px Inter 400, slate-300, max 2 lines
  - Two CTA buttons side-by-side (stack on mobile)
- **Visual:** Abstract battery/energy SVG illustration or dark photograph overlay at 50% opacity on the right (desktop) — no stock photo clichés
- **Animation:** Headline words fade-up stagger (80ms delay each word), stat cards slide-up on load, hero illustration subtle float loop (4s, translateY ±8px)

### Statistics Strip
- **Layout:** 4-column horizontal strip, dark surface (#1E293B), full-width
- **Items:** 5+ Branches | 10,000+ Happy Customers | 10+ Battery Brands | 10+ Years Experience
- **Animation:** count-up animation triggered by IntersectionObserver (threshold 0.4)
- **Numbers:** Poppins 700 48px accent color | Labels: Inter 400 14px slate-400

### Services Overview
- **Layout:** 2×4 grid desktop, 2×4 tablet, 1-column mobile
- **Cards:** Icon (48px in accent-light rounded bg) + Title (H3) + 2-line description
- **Hover:** Card lifts 4px, border turns accent, icon bg deepens
- **Services:** Car Batteries, Bike Batteries, Inverter Batteries, UPS Solutions, Solar Batteries, Lithium Batteries, Doorstep Replacement, Installation & Support

### Battery Brands Strip
- **Layout:** Horizontal logo row — centered, equal spacing
- **Brands:** Amaron, Exide, Luminous, Microtek logos (grayscale, hover → full color)
- **Sub-note:** "Lithium Batteries & Other Leading Battery Brands Available"

### CTA Section
- **Background:** Accent blue gradient (`--color-accent` to `#0EA5E9`)
- **Heading:** "Looking for the Right Battery Solution?"
- **Buttons:** Call Now (white outline) | WhatsApp (green) | Find Nearest Branch (white filled)

---

## ABOUT PAGE

### Page Banner
- **Background:** Dark navy with subtle grid pattern overlay
- **Content:** H1 "SN Batteries Sales & Service" + breadcrumb + short description
- **Height:** 320px desktop, 240px mobile

### Who We Are
- **Layout:** 2-column — left: text content, right: highlight stat cards or image
- **Tone:** Avoid word "Company" — use "SN Batteries", "Our Team", "Our Network"
- **Content pillars:** Genuine Products | Professional Service | Customer Satisfaction | Reliable Support | Growing Branch Network

### Mission & Vision Cards
- **Layout:** 2 equal premium cards side-by-side (stack on mobile)
- **Card style:** Navy background with accent left border (4px), white text
- **Each:** Icon + Title (Mission/Vision) + 3–4 lines of content

### Why Choose Us
- **Layout:** 3-column grid desktop (2 tablet, 1 mobile), 6 cards
- **Card:** Accent icon (top-left) + Title + short text
- **Features:** Genuine Products | 10+ Trusted Brands | Professional Installation | Doorstep Replacement | Warranty Support | 10+ Years Experience

---

## SERVICES PAGE

### Car Brand Slider
- **Type:** Infinite auto-scroll (CSS animation, `animation: scroll 30s linear infinite`)
- **Content:** Major Indian car brand logos — Maruti, Hyundai, Tata, Honda, Toyota, Kia, MG, Mahindra etc.
- **Style:** Grayscale logos on light surface strip, hover pauses animation

### Automotive Battery Cards
- **Layout:** 3-column desktop, 2 tablet, 1 mobile; 10 cards
- **Card anatomy:** Image (top, 200px, object-cover) + Service Name + Short Description + 2 buttons (Call, WhatsApp)
- **WhatsApp:** Pre-filled message `https://wa.me/91XXXXXXXXXX?text=Hi, I need help with [Service Name]`
- **Services:** Car Batteries, Bike Batteries, Home UPS, Office UPS, Battery Replacement, Battery Charging, Emergency Jump Start, Distilled Water Refilling, Battery Maintenance, Doorstep Replacement

### Home & Power Backup Solutions
- **Layout:** Feature list left + icon grid right (desktop) | stacked (mobile)
- **Solutions:** Inverter Systems, Inverter Batteries, UPS Solutions, Solar Batteries, Lithium Batteries, Installation & Maintenance

### Professional Installation Gallery
- **Type:** Continuous auto-scroll photo strip (CSS marquee clone pattern — 2 identical sets)
- **Images:** Real installation work photos (placeholder → to be replaced with actual photos)
- **Height:** 260px, object-cover, border-radius: 12px, gap: 16px

### Service Process
- **Layout:** 4 steps in horizontal timeline (desktop) | vertical (mobile)
- **Step:** Number circle (accent) + Title + Short text
- **Steps:** Contact → Choose Solution → Professional Installation & Testing → Warranty & Support
- **Connector line:** dashed line between steps (desktop only)

---

## BRANCHES PAGE

### Branch Cards
- **Layout:** 3-column desktop, 2 tablet, 1 mobile
- **Card anatomy:**
  - Branch photo (top, 220px)
  - Branch name (H3 Poppins 600)
  - Area / Location (slate-500, 14px, with map pin icon)
  - Google Rating: ⭐ star + rating number + "(X reviews)" — gold color
  - 3 buttons: Call | WhatsApp | View Location (opens Google Maps link)
- **Hover:** Card lifts, image scales 1.04 (overflow hidden)

### Interactive Google Map
- **Implementation:** Google Maps embed iframe
- **Height:** 480px desktop, 360px mobile
- **Style:** Dark map style (apply custom JSON) or standard map
- **Markers:** One per branch location

### Why Visit Section
- **Layout:** 3×2 grid, icon feature cards (same style as Why Choose Us)
- **Features:** Genuine Products | Professional Installation | Expert Assistance | Warranty Support | Quick Service | Friendly Customer Support

---

## BRANDS PAGE

### Featured Brand Cards
- **Layout:** 3-column desktop, 2 tablet, 1 mobile; 9 cards (8 brands + "Other")
- **Card anatomy:**
  - Brand logo (centered, 120px height, contain)
  - Product image below (160px, sample battery visual)
  - Brand name (H3)
  - Short description (2–3 lines)
  - Call + WhatsApp buttons
- **Brands:** Amaron, Exide, Luminous, Microtek, SF Sonic, Livguard, Okaya, Tata Green, Other Leading Battery Brands

### Battery Categories
- **Layout:** Horizontal pill/chip row — filterable tabs (visual only, or scroll to section)
- **Categories:** Car | Bike | Inverter | UPS | Solar | Lithium
- **Active state:** Accent background, white text; inactive: border accent

### Why We Deal With Trusted Brands
- **Layout:** 5 icon feature cards in a row (scroll on mobile)
- **Features:** Genuine Products | Manufacturer Warranty | Reliable Performance | Long Battery Life | Professional Guidance

---

## CONTACT PAGE

### Contact Info Cards
- **Layout:** 3–4 cards in a row — Phone | WhatsApp | Email | Business Hours
- **Card:** Icon (large, accent) + Label + Value (clickable for phone/WhatsApp/email)
- **Business Hours:** Listed as Mon–Sat 9AM–7PM (or actual hours)
- **Service Area:** "Serving all areas across Bengaluru"

### Contact Form
- **Fields:** Full Name | Mobile Number | Email (Optional) | Service Required (dropdown) | Message (textarea)
- **Submit:** "Send Enquiry" btn-primary btn-lg full-width
- **Validation:**
  - Name: required, min 2 chars
  - Mobile: required, 10-digit Indian format
  - Email: optional, valid format if entered
  - Service: required (select)
  - Message: optional, max 500 chars
- **States:** Empty | Focused (accent ring) | Error (red border + message below) | Success (green checkmark + "Thank you" toast)
- **Service dropdown options:** Car Battery | Bike Battery | Inverter Battery | UPS Solution | Solar Battery | Doorstep Replacement | Other

### Google Map
- **Same embed pattern as Branches page**
- **Single marker:** Primary SN Batteries location

---

## COMMON UX RULES (All Pages)

### Loading States
- Page transition: content fades in with `opacity: 0 → 1` over 300ms
- Cards: skeleton loader (animated shimmer) before images load
- Buttons: disabled + spinner icon during form submit

### Empty States
- Not applicable for this static/brochure site

### Error States
- Form fields: inline error message below field, red left border
- Map embed: graceful fallback — "View on Google Maps" link button

### Micro-copy
- CTA buttons: action-oriented ("Call Now", "Chat on WhatsApp", "Find Branch")
- WhatsApp pre-fill template: "Hi! I found you on your website. I need help with [service]."
- Form success: "Thanks! We'll reach out to you within a few hours."

### Scroll Animations (IntersectionObserver)
- Trigger threshold: 0.15 (15% visible)
- Effect: `translateY(24px) opacity:0` → `translateY(0) opacity:1`
- Duration: 400ms ease-out
- Stagger: 80ms between card children
- Never apply to elements already in viewport on load

### Accessibility
- All images: meaningful `alt` text
- Buttons: descriptive `aria-label` (especially icon-only buttons)
- Form: `<label>` for every input, `aria-describedby` for errors
- Focus ring: `outline: 3px solid var(--color-ring); outline-offset: 2px`
- Color: never sole indicator — always pair with icon or text
- Keyboard: Tab order matches visual order; Escape closes mobile drawer

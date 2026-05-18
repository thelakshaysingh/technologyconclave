# Handoff: INAE Technology Conclave 2026 Website

## Overview
A complete multi-page conference website for the **2nd INAE Technology Conclave 2026**, organised by the Indian National Academy of Engineering (INAE) and hosted at SOA University, Bhubaneswar (11–12 July 2026). The site covers the full delegate journey: landing, about, speakers, programme, submissions, committee, venue/information, sponsorships, and contact.

---

## About the Design Files
The files in this bundle are **high-fidelity HTML/CSS/JS design references** — prototypes showing the intended look, content, and behaviour. They are **not production code to ship directly**.

The task for Claude Code is to **recreate these designs in your target codebase** using its established framework, component library, and patterns (React / Next.js, Vue, etc.). If no framework exists yet, Next.js 14 with Tailwind CSS is recommended given the multi-page, content-heavy nature of the site.

---

## Fidelity
**High-fidelity.** The prototypes contain:
- Final color palette (exact hex tokens)
- Final typography (Google Fonts: Inter + Playfair Display)
- Final copy (all text drawn from official INAE documents)
- Final layout, spacing, and responsive breakpoints
- Working JS interactions (countdown, tabs, form, neural canvas animation)

Recreate the UI pixel-precisely in the target stack using its design system for base primitives (buttons, inputs, cards), supplemented with the tokens documented below.

---

## Pages / Screens

### 1. Home (`index.html`)
**Purpose:** Landing page; first impression + key info.

**Layout:**
- Utility bar (top, full-width, dark purple `#2D1147`, 36px height)
- Sticky navbar (white bg, 72px height, drop-shadow on scroll)
- Hero section (full-viewport-height, dark purple gradient + neural-network BG image + animated canvas overlay)
- Host-strip (partner logos row, white bg, 68px)
- About section (2-col grid: text left, 3×2 stats right)
- Important Dates timeline (vertical, saffron date badges)
- Teaser card grid (4-col → 2-col → 1-col)
- Past Conclave banner (2-col image+text card)
- Footer (4-col grid)

**Hero specifics:**
- BG: `assets/bg/neural-bg.jpeg` + CSS gradient overlay + animated Canvas (neural nodes)
- Title: "INAE Technology Conclave 2026" — Playfair Display 600, clamp(32px, 6vw, 80px)
- Tagline: Inter 400, clamp(14px, 1.8vw, 20px), color `#D5C8E0`
- Meta row: calendar + location icons only (no CTA buttons in hero)
- Countdown timer: 4 boxes (Days/Hours/Minutes/Seconds), target `2026-07-11T09:00:00+05:30`
- No "Register Now" or "Download Brochure" buttons

### 2. Speakers (`speakers.html`)
**Purpose:** Display confirmed plenary speakers and panel moderators.

**Layout:**
- Page hero (slim, ~180px, same neural bg)
- `auto-fill` grid of speaker cards, `minmax(260px, 1fr)`
- Each card: circular avatar (initials, navy→purple gradient), name (Playfair 600 18px), role (pink, 13.5px bold), institution (muted, 13px)
- "More speakers to be announced" italic footer note

**Speakers list (12 confirmed):**
1. Mr. J. D. Patil — President, INAE (Inaugural Keynote)
2. Dr. Binoy Kumar Das — DG DRDO (Chief Guest)
3. Prof. Indranil Manna — Past President INAE
4. Mr. Bhuban Chandra Pathak — CMD, NPCIL (Nuclear Energy)
5. Dr. Ranjit Rath — CMD, Oil India (Oil & Gas)
6. Prof. G. D. Yadav — FNAE, ICT Mumbai (Coal Gasification)
7. Prof. U. B. Desai — FNAE, Chancellor Anurag University (Next-Gen Comms)
8. Prof. Manoj Kumar Tiwari — Director IIM Mumbai (Transport & Logistics Panel)
9. Prof. Shanthi Pavan — IIT Madras (Semiconductors)
10. Prof. Suman Chakraborty — Director IIT Kharagpur (Healthcare Panel)
11. Dr. Rabi Narayan Patra — Former CMD, IREL (Critical Minerals)
12. Mr. Sashi Sekhar Mohanty — Former Director SAIL (Energy Industries Panel)

### 3. Program (`program.html`)
**Purpose:** Two-day schedule with tab switcher.

**Layout:**
- Page hero
- Day 1 / Day 2 tab buttons (border-bottom: 2px saffron on active)
- Schedule table: 3-col grid (time | session body | tag badge), alternating white/cream rows
- Tag badges: Plenary (orange tint), Session (purple tint), Break (grey), Special (navy tint)

**Day 1 schedule (11 Jul, Saturday):**
| Time | Event | Tag |
|------|-------|-----|
| 09:00–10:00 | Registration & Tea | Arrival |
| 10:00–10:45 | Inaugural Session | Inaugural |
| 10:45–13:30 | Session I — Energy | Plenary |
| 13:30–14:30 | Lunch | Break |
| 14:30–16:30 | Session II — Communications & Logistics | Plenary & Panel |
| 16:45–17:45 | Parallel Sessions | Parallel |
| 18:00–19:00 | Cultural Program | Cultural |
| 19:00–20:30 | Conclave Dinner | Hosted |

**Day 2 schedule (12 Jul, Sunday):**
| Time | Event | Tag |
|------|-------|-----|
| 09:30–11:30 | Session III — Semiconductors & Healthcare | Plenary & Panel |
| 11:45–12:45 | Parallel Sessions | Parallel |
| 12:45–13:15 | Felicitation of Newly Inducted Members | Felicitation |
| 13:15–14:30 | Lunch | Break |
| 14:30–15:30 | Parallel Sessions | Parallel |
| 15:45–17:30 | Session IV — Critical Minerals & Energy Industries | Plenary & Panel |
| 17:30–18:00 | Valedictory Session | Valedictory |
| 18:00–18:15 | High Tea | Closing |

### 4. Submission (`submission.html`)
**Purpose:** Delegate submits extended abstract / poster / start-up display proposal.

**Layout:**
- Page hero
- Centred form card (max-width 760px, white, border-radius 8px, subtle shadow)
- Fields: Full Name*, Email ID*, Contact Number*, Affiliation*, Category (select)*, Submission Title*, PDF Upload (drag-drop)
- PDF-only validation (client-side: accept="application/pdf,.pdf")
- Submit button: primary orange
- Guidelines list below form

**Google Drive integration note:**
The form `action` is currently `#`. To wire to Google Drive:
1. Create a Google Apps Script Web App with a `doPost(e)` function that writes the uploaded file to a Drive folder
2. Deploy and set the Web App URL as the form's `action` attribute
3. The handler can also send confirmation emails via `MailApp.sendEmail()`

### 5. Committee (`committee.html`)
**Purpose:** Show full leadership and sub-committee structure.

**Layout:**
- Page hero
- Section headers with full-width rule (Playfair 600, 20px)
- `auto-fill` grid of committee cards, `minmax(280px, 1fr)`
- Each card has a left 3px accent bar (saffron), role label (uppercase 11.5px pink), member list
- Each member: circular photo placeholder (54px, initials, gradient bg cycling purple/pink/orange) + name + title
- Photo slot comment: `<!-- replace with: <img src="assets/committee/<slug>.jpg" /> -->`
- **NO sponsors section** on this page

**Committee structure:**
- Chief Patrons: Prof. (Dr.) Manojranjan Nayak (SOA), Mr. J.D. Patil (INAE President)
- Patrons: Prof. Damodar Acharya, Prof. Santanu Choudhury
- General Chairs: Prof. Pradipta Kumar Nanda, Prof. Subhransu Ranjan Samantaray, Prof. Tapan Kumar Gandhi
- Organizing Committee: 13 members (see HTML)
- Program, Finance, Exhibition, Venue, Food, Accommodation, Registration, Publication, Media, Web, Cultural sub-committees (see HTML for full names)

### 6. Information (`information.html`)
**Purpose:** Venue, accommodation, and Bhubaneswar city guide via tabs.

**Tabs:**
- **Venue** — OpenStreetMap iframe (SOA Auditorium, lat 20.28475, lng 85.77395) + address + travel info
- **Accommodation** — 2 nearby hotels (Hotel Jayadeep, The Greenstar Inn Premium) as theme-cards
- **Adda** — 3 city-guide cards (Heritage, Cuisine, Side Trips) + definition of "adda"

### 7. Sponsorships (`sponsorships.html`)
**Purpose:** Placeholder — sponsorship tiers TBA.

**Layout:** Centred "TBA" block with animated pulse dot, "Express Interest" mailto CTA.

### 8. Contact (`contact.html`)
**Purpose:** Functional contact form + office details.

**Layout:** 2-col grid (info cards left, form right)

**Form fields:** Name*, Email ID*, Contact Number, Subject*, Message*

**Form action:** `https://formsubmit.co/technologyconclave@inae.in`
- Uses FormSubmit.co (free, no backend needed, first submission triggers email verification)
- Hidden fields: `_subject`, `_captcha=false`, `_next=contact.html?sent=1`, `_template=table`
- Success banner shown via JS when `?sent=1` in URL

**Contact details:**
- Email: technologyconclave@inae.in
- Phone: +91-11-2685-8025
- INAE HQ: Technology Bhavan, New Mehrauli Road, New Delhi 110016
- SOA: SUM Hospital Road, Kalinganagar, Bhubaneswar 751029

---

## Navigation Structure
All pages share the same sticky navbar and footer.

**Nav links (in order):** Home | Speakers | Program | Call ▾ | Submission | Committee | Information ▾ | Sponsorships | Contact

**Call dropdown (PDF links, placeholders):**
- Extended Abstracts → `assets/calls/extended-abstracts.pdf`
- Posters → `assets/calls/posters.pdf`
- Startup Display → `assets/calls/startup-display.pdf`

**Information dropdown:**
- Venue → `information.html#venue`
- Accommodation → `information.html#accommodation`
- Adda → `information.html#adda`

**No Register button in nav.**

---

## Interactions & Behaviour

### Countdown Timer
- Target: `2026-07-11T09:00:00+05:30`
- Updates every 1 second via `setInterval`
- Stops at zero; boxes get class `cd-zero` (accent color change)
- 4 boxes: Days / Hours / Minutes / Seconds

### Neural Network Animation
- HTML5 Canvas element absolutely positioned over each hero/page-hero
- ~35 nodes (fewer on narrow screens: `Math.floor(width / 36)`)
- Nodes drift with sinusoidal oscillation (`t += 0.006` per frame)
- Lines drawn between nodes within 170px, opacity fades with distance
- Node colors: `#B8327F`, `#D2691E`, `#8B5CF6`, `#E89B45`, `#A855F7`, `#EC4899`
- Line color: `rgba(210,180,255, alpha)`
- Paused via IntersectionObserver when off-screen
- Canvas resizes with ResizeObserver

### Nav Scroll Shadow
- Class `scrolled` added to `<header>` when `window.scrollY > 8`

### Mobile Menu
- Hamburger toggles `display:none/block` on `.mobile-menu`
- Dropdown groups rendered as flat labelled sub-lists (`.mm-group`, `.mm-group-label`, `.mm-sub`)
- All mobile links close the menu on click

### Day Tab (Program page)
- Click Day 1 / Day 2 button → show/hide respective `.schedule` div
- Active tab: `color: navy`, `border-bottom: 2px solid saffron`

### Information Tabs
- 3 tabs → 3 panels via class toggle `.active`
- URL hash updated on tab click (`history.replaceState`)
- Hash on page load activates matching tab

### Submission Form
- File input: PDF only (`accept="application/pdf,.pdf"`)
- Drag-and-drop on file zone (dragenter/dragleave/drop events)
- Shows filename + size on selection
- Submit → shows success message div + disables button
- Google Drive upload stubbed (see note in Submission section)

### Reveal Animations
- `.reveal` elements observed via IntersectionObserver
- Add class `.in` (opacity 0→1, translateY 16px→0) when 5%+ visible
- Transition: `opacity .7s ease, transform .7s ease`

### Active Nav Highlight
- Current page link has class `active` set server-side (in the HTML)
- `::after` pseudo-element draws saffron underline on active link

---

## Design Tokens

### Colors
```css
--navy:     #3D1A5E   /* dark purple — primary bg, headings */
--navy-2:   #4E2376   /* medium purple */
--navy-3:   #6A38A0   /* light purple */
--saffron:  #D2691E   /* dark orange — CTAs, accents, timeline badges */
--saffron-2:#A8531A   /* dark orange hover */
--pink:     #B8327F   /* dark pink — secondary accent, icons, form highlights */
--pink-2:   #952365   /* dark pink hover */
--ink:      #1C1F26   /* body text */
--ink-2:    #3A414C   /* secondary text */
--muted:    #6A7280   /* placeholder / meta text */
--rule:     #E8E4ED   /* borders / dividers */
--cream:    #FBF6F1   /* alt section background */
--grey:     #F5F2F7   /* input backgrounds */

/* Dark surface (utility bar, footer) */
background: #2D1147

/* Hero gradient */
linear-gradient(135deg, #3D1A5E 0%, #4E2376 50%, #6A38A0 100%)
```

### Typography
```css
--serif: 'Playfair Display', Georgia, serif   /* headings, stats, times */
--sans:  'Inter', system-ui, -apple-system, sans-serif   /* body, nav, labels */
```

| Use | Size | Weight |
|-----|------|--------|
| Hero H1 | clamp(32px, 6vw, 80px) | 600 |
| Section H2 | clamp(24px, 4vw, 46px) | 600 |
| Section H3 | clamp(17px, 2.5vw, 24px) | 600 |
| Body | 16px | 400 |
| Nav links | clamp(12px, 1.3vw, 14px) | 500 |
| Eyebrow label | clamp(10px, 1.2vw, 12.5px) | 600, uppercase, letter-spacing .18em |
| Section lead | clamp(15px, 1.7vw, 18px) | 400 |

### Spacing
- Container max-width: `1240px`
- Horizontal padding: `clamp(16px, 4vw, 40px)`
- Section vertical padding: `clamp(52px, 7vw, 96px)`
- Card padding: `clamp(18px, 2.5vw, 28px)`
- Grid gap: `clamp(14px, 2.5vw, 28px)`

### Border Radius
- Cards, buttons: `6px`
- Inputs: `5px`
- Countdown boxes: `8px`
- Avatar circles: `50%`

### Shadows
- Nav scrolled: `0 8px 24px -16px rgba(61,26,94,.25)`
- Speaker cards hover: `0 18px 36px -22px rgba(61,26,94,.22)`
- Form card: `0 10px 30px -22px rgba(61,26,94,.2)`
- Dropdown: `0 18px 36px -16px rgba(61,26,94,.25)`

### Breakpoints
| Name | px |
|------|----|
| Mobile S | 480px |
| Mobile L | 580px |
| Tablet | 700px |
| Tablet L | 820px |
| Desktop S | 900px |
| Desktop | 1080px |
| Desktop L | 1180px |

---

## Assets

| File | Description |
|------|-------------|
| `assets/bg/neural-bg.jpeg` | Neural network illustration — hero background image |
| `assets/logos/inae.jpg` | INAE logo (use in navbar + footer) |
| `assets/logos/soa.webp` | SOA University logo (use in navbar + footer) |
| `assets/logos/iit-bhubaneswar.png` | IIT Bhubaneswar logo (host strip) |
| `assets/logos/csir-immt.png` | CSIR-IMMT logo (host strip) |
| `assets/logos/niser.png` | NISER Bhubaneswar logo (host strip) |
| `assets/logos/ict-ioc.png` | ICT-IOC Bhubaneswar logo (host strip) |
| `assets/logos/ieee.jpg` | IEEE Bhubaneswar Section logo (host strip) |
| `assets/logos/aic-soa.png` | AIC-SOA Foundation logo (host strip) |
| `assets/photos/soa1.webp` | SOA University campus photo (venue section) |
| `assets/photos/tc2025-1.jpg` | Technology Conclave 2025 at IIT Bombay (about callout) |
| `assets/photos/tc2025-2.jpg` | Technology Conclave 2025 photo 2 (past banner) |
| `assets/photos/tc2025-3.jpeg` | Technology Conclave 2025 photo 3 |
| `assets/committee/<slug>.jpg` | Committee member photos — **placeholder slots** in HTML; drop images here |
| `assets/calls/extended-abstracts.pdf` | Call for Extended Abstracts PDF — **placeholder link** |
| `assets/calls/posters.pdf` | Call for Posters PDF — **placeholder link** |
| `assets/calls/startup-display.pdf` | Call for Startup Display PDF — **placeholder link** |

---

## Source Files

| File | Description |
|------|-------------|
| `index.html` | Home page |
| `speakers.html` | Speakers grid |
| `program.html` | Day 1 / Day 2 tabbed programme |
| `submission.html` | Submission form (PDF upload) |
| `committee.html` | Leadership & committee with photo placeholders |
| `information.html` | Venue / Accommodation / Adda tabs |
| `sponsorships.html` | Sponsorships TBA holding page |
| `contact.html` | Functional contact form (FormSubmit.co) |
| `register.html` | Registration page |
| `styles.css` | All styles (tokens + layout + responsive + animations) |
| `script.js` | Countdown, neural canvas, tabs, form handlers, reveal animations |

---

## Implementation Notes for Claude Code

1. **Framework recommendation:** Next.js 14 (App Router) + Tailwind CSS. Each HTML file maps to a `page.tsx`. Shared nav and footer become layout components.

2. **Neural canvas:** Implement as a React client component (`'use client'`) using `useEffect` + `useRef`. The animation loop uses `requestAnimationFrame`. Wrap in a `ResizeObserver` to handle viewport changes.

3. **Countdown:** React `useState` + `useEffect` with `setInterval(tick, 1000)`. Clear on unmount.

4. **Contact form:** Use FormSubmit.co as-is (plain HTML form action) or replace with a Next.js API route that calls `nodemailer` or Resend for email delivery.

5. **Submission form / Google Drive:** Implement a Next.js API route (`/api/submit`) that accepts `multipart/form-data`, writes the PDF to Google Drive via the Drive API v3 (`drive.files.create`), and returns a confirmation JSON.

6. **Reveal animations:** Use `IntersectionObserver` in a `useEffect` or Framer Motion's `whileInView` prop.

7. **Tabs (Program, Information):** Local `useState` for active tab index. No external library needed.

8. **Fonts:** Add to `next/font/google`: `Inter` (weights 400, 500, 600, 700) + `Playfair_Display` (weights 500, 600, 700). Apply via CSS variables on `:root`.

# Kolabix Design System

This is the canonical design specification for **kolabix.com** — the public-facing
website of Kolabix Innovations LLP. Every page, component, and visual decision
on this site must conform to this document. When in doubt, choose restraint
over ornamentation.

This document does **not** apply to bottomline360.com or any other Kolabix-owned
property. Those have separate, lighter-weight design systems.

---

## 1. Project Context

**Who we are**: Kolabix Innovations LLP is a Mumbai-based AI enablement and
cybersecurity consulting firm with senior engineering credentials. We build
production AI integrations, run CERT-In-aligned cybersecurity audits via
empanelled partners, and deliver custom software for mid-market and enterprise
clients.

**Who the site is for**: CTOs, CIOs, CISOs, CFOs, COOs, Heads of Engineering,
and Founders at mid-market and enterprise companies in the United States and
European Union, with budgets ranging from $5,000 USD to $50,000 USD per
engagement. They are technically literate (or technically advised), time
constrained, and skeptical of marketing language. They will spend 30 to 90
seconds deciding whether Kolabix is credible enough to warrant a discovery
call.

The buyer mix matters for this design system. Cybersecurity audits and AI
enablement engagements are often signed off by **non-technical executives**
(CFOs, COOs) on the recommendation of technical staff. The site needs to read
as credible to both audiences simultaneously.

**What the site must do**:
1. Communicate, within 5 seconds, that Kolabix is a serious technology firm —
   not a generic AI startup, not an offshore body shop.
2. Establish technical and engineering credibility through specific outcomes,
   real client work, and quantified results.
3. Convert qualified prospects into discovery calls. Everything else is
   secondary.

**What the site must not do**:
- Look like an Indian SME outsourcing site
- Look like a generic AI startup template (purple gradients, neural network
  graphics, "transform your business" copy)
- Look like a developer-tool product site (we sell services, not a product
  with a free tier)
- Hide our Indian origin (we lead with engineering credibility; location is
  shown clearly but never apologised for)

---

## 2. Design Philosophy

**Restraint is the brand.** Every design decision should pass the test: "Does
this make Kolabix feel more or less like a serious technology firm?" Removing
elements is almost always the right answer.

**Clarity beats aesthetics.** A sophisticated design that confuses the visitor
fails. A plain design that conveys the offer in 5 seconds wins. Premium feel
comes from typography, spacing, and restraint — not from effects.

**Proof beats persuasion.** Specific numbers ("40% cost reduction across 12
deployments") outperform adjectives ("transformative AI solutions"). Real
client logos beat fake testimonials. Engineering specifics beat
"cutting-edge."

**Asymmetry over symmetry.** Centered everything signals brochure-ware.
Asymmetric layouts (60/40 splits, off-grid elements, deliberate imbalance)
signal intentional design.

**Speed is design.** A site that loads in 1.2 seconds feels more premium
than one that loads in 3.5 seconds with parallax. Performance is part of
the visual brand.

---

## 3. Surface Strategy

The site is **light-mode primary with deliberate dark sections as accents**.
This is the Stripe / Wiz / Anthropic pattern — a clean, professional services
firm aesthetic that reads trustworthy to executive buyers, with dark
punctuation moments where impact matters most.

### Default surface flow

A typical page composes like this, top to bottom:

| Section | Surface | Reason |
|---|---|---|
| Header | Transparent over hero, paper on scroll | Stays out of the way |
| Hero | **Light** | Approachable opening, professional services feel |
| Logo strip / trust band | **Light** | Quiet credibility |
| Services overview | **Light** | Easy scanning |
| Outcomes / metric showcase | **Dark** | Numbers hit hardest on dark — deliberate punctuation |
| Side-by-side features | **Light** (alternating layouts) | Reading-friendly |
| Case study highlight | **Light** | Detail and trust |
| How we work / process | **Light** | Clear, instructional |
| FAQ | **Light** | Reading-heavy |
| Final CTA | **Dark** | High-impact closing moment |
| Footer | **Dark** | Information density is easier on dark; ends the page with weight |

**Rule of thumb: a single page should have 2–3 dark sections maximum.** Two
of those are typically the metric showcase and the CTA + footer block. More
than three and the alternation loses its punctuation effect.

### Why not all-dark or all-light?

All-dark sites read as "developer tool" or "we sell to engineers" — not what
we are. All-light sites read as "consulting firm circa 2018" — not modern
enough. The deliberate alternation is the premium signal: it shows the design
was composed, not templated.

---

## 4. Visual Reference Points

These sites should be studied directly. Open them, study their patterns,
borrow structural ideas — never copy visuals.

**Primary references (closest fit to Kolabix):**
- **stripe.com** — light-dominant with dark accent sections, restraint,
  typography, footer treatment
- **wiz.io** — cybersecurity, light primary, blue accent, friendly-but-serious
  tone
- **snyk.io** — developer-led security, light primary, technical credibility
- **anthropic.com** — warm cream/off-white, premium typography, narrative
  voice — closest tonal match for AI enablement positioning

**Useful for specific patterns:**
- **cloudflare.com** — light primary, technical product range without feeling
  cold
- **paloaltonetworks.com** — enterprise navigation patterns, mixed surfaces
- **crowdstrike.com** — gravitas (dark-dominant — useful for tone study, not
  surface strategy)

**Services-firm references (closest to our business model):**
- **palantir.com** — high-end consultative tech firm
- **8thlight.com** — boutique software consultancy
- **thoughtworks.com** — services firm at scale

**Avoid using as a template:**
- Linear, Vercel, Supabase, GitHub — these are dark-primary developer tool
  sites. Beautiful, but the wrong template for a services firm with
  non-technical buyers in the mix.

---

## 5. Brand Voice

**Tone**: Confident, specific, restrained. We sound like senior engineers
who respect the reader's time.

**Always**:
- Lead with the outcome, not the process
- Use specific numbers and named clients (or anonymized: "a US-based fintech
  with 200 engineers")
- Use plain English. If a sentence has a corporate cliché, rewrite it.
- Write in active voice
- Keep sentences short. Reading on a phone in a meeting is the default
  context.

**Never**:
- "Leverage", "synergize", "unlock", "harness the power of", "transform your
  business", "unleash", "empower", "next-generation", "cutting-edge",
  "best-in-class", "world-class", "innovative solutions"
- "We are passionate about..."
- "Our journey began..."
- Stock thought-leadership phrases like "In today's digital landscape..."

**Voice example — bad**:
> "We leverage cutting-edge AI to transform your enterprise and unlock
> unprecedented value across your digital ecosystem."

**Voice example — good**:
> "We integrate AI into your existing workflows. Most clients see 30-40% cost
> reduction within 90 days, without rebuilding their stack."

---

## 6. Color System

The palette is intentionally narrow. Eight to ten hex values handle the
entire site. If a designer wants a tenth color, they need to defend it.

### Tokens

```css
:root {
  /* ---------- Light surfaces (primary) ---------- */
  --color-paper:        #FAFAF7;  /* Default page background. Off-white, warm. */
  --color-paper-muted:  #F1F1EC;  /* Subtle alternate sections within light flow. */
  --color-white:        #FFFFFF;  /* Cards and elevated surfaces on paper. */

  /* ---------- Dark surfaces (accent sections) ---------- */
  --color-ink:          #0B0F17;  /* Dark accent section background. Near-black with cool undertone. */
  --color-ink-elevated: #141923;  /* Cards on dark accent sections. */
  --color-slate:        #1A1F2B;  /* Hover/subtle elevation on dark surfaces. */

  /* ---------- Text on light surfaces (default) ---------- */
  --color-text-primary:    #0B0F17;  /* Headings, primary body */
  --color-text-secondary:  #52525B;  /* De-emphasized body, captions */
  --color-text-tertiary:   #71717A;  /* Footer fine print, metadata */

  /* ---------- Text on dark surfaces (accent sections only) ---------- */
  --color-text-dark-primary:    #F5F5F2;
  --color-text-dark-secondary:  #9CA3AF;
  --color-text-dark-tertiary:   #6B7280;

  /* ---------- Accent — the only saturated brand color ---------- */
  --color-accent:        #2E5BFF;  /* Electric blue. CTAs, links, focus rings. */
  --color-accent-hover:  #1E47E0;  /* Darker for hover states. */
  --color-accent-muted:  rgba(46, 91, 255, 0.10);  /* Backgrounds for accent emphasis. */

  /* ---------- Brand legacy — logo only ---------- */
  --color-amber:         #F59E0B;  /* Evolved from original Kolabix orange. Used only inside the logo. */

  /* ---------- System feedback — only where functionally meaningful ---------- */
  --color-success:       #10B981;
  --color-warning:       #F59E0B;
  --color-error:         #EF4444;

  /* ---------- Borders ---------- */
  --color-border:             #E4E4E7;  /* Default borders on light surfaces */
  --color-border-strong:      #D4D4D8;  /* Stronger borders, hover states on light */
  --color-border-dark:        rgba(255, 255, 255, 0.06);  /* Default borders on dark surfaces */
  --color-border-dark-strong: rgba(255, 255, 255, 0.10);  /* Hover states on dark */
}
```

### Tailwind config equivalent

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#FAFAF7',
          muted:   '#F1F1EC',
        },
        ink: {
          DEFAULT: '#0B0F17',
          elevated: '#141923',
          slate:    '#1A1F2B',
        },
        text: {
          primary:   '#0B0F17',
          secondary: '#52525B',
          tertiary:  '#71717A',
          'dark-primary':   '#F5F5F2',
          'dark-secondary': '#9CA3AF',
          'dark-tertiary':  '#6B7280',
        },
        accent: {
          DEFAULT: '#2E5BFF',
          hover:   '#1E47E0',
          muted:   'rgba(46, 91, 255, 0.10)',
        },
        amber: '#F59E0B',
        border: {
          DEFAULT:       '#E4E4E7',
          strong:        '#D4D4D8',
          dark:          'rgba(255, 255, 255, 0.06)',
          'dark-strong': 'rgba(255, 255, 255, 0.10)',
        },
      },
    },
  },
}
```

### Usage rules

**Light surfaces are the default.** Hero, services, side-by-side features,
case studies, process explanations, FAQ — all sit on `--color-paper`. Cards
within these sections lift to `--color-white` for a subtle elevation effect.

**Dark sections are deliberate punctuation.** Use `--color-ink` only for the
metric showcase, the final CTA, and the footer (the three most common dark
moments). Do not scatter dark sections throughout the page just for visual
variety — this dilutes the punctuation.

**Never use pure black `#000000`.** Always use `--color-ink`. Pure black is
harsher on screens and reads cheap.

**Pure white `#FFFFFF` is allowed only for elevated cards.** The page
background itself is `--color-paper` (off-white), not pure white. Using pure
white as the page background loses the warmth that makes the site feel
considered rather than templated.

**One accent color per page.** Electric blue `#2E5BFF` is the only saturated
color on the site outside the logo. It appears on:
- Primary CTA buttons
- Links inside body copy
- Focus rings (keyboard accessibility)
- Single-color icons in eyebrow rows
- Active states in nav
- Highlighted callouts (sparingly, with `--color-accent-muted`)

It does **not** appear on:
- Backgrounds (except the muted callout treatment)
- Decorative gradients
- Headlines (except the rare deliberate emphasis word)
- Borders (except focus states and accent callouts)

**No gradients, ever.** Especially not blue-to-purple or any rainbow blend.
Gradients are the strongest "AI startup template" tell.

**Amber is for the logo only.** Do not introduce amber as a secondary brand
color in layouts. It exists only to maintain visual continuity with the
existing Kolabix logomark.

### Mode handling

There is **no user-facing dark/light toggle**. The page composes light and
dark sections by editorial decision (see Section 3). Every section author
knows in advance which surface they're writing for.

When a light section transitions into a dark section, do **not** animate the
transition. A clean, abrupt edge feels deliberate. A gradient bleed feels
amateur.

---

## 7. Typography

### Font families

| Role | Family | Weights used | Source |
|------|--------|--------------|--------|
| Display / Headlines | **Geist** | 400, 500, 600, 700 | Google Fonts: `Geist` |
| Body | **Inter** | 400, 500, 600 | Google Fonts: `Inter` |
| Mono / Eyebrows / Code | **Geist Mono** | 400, 500 | Google Fonts: `Geist Mono` |

### Loading

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

### CSS variables

```css
:root {
  --font-display: 'Geist', system-ui, -apple-system, sans-serif;
  --font-body:    'Inter', system-ui, -apple-system, sans-serif;
  --font-mono:    'Geist Mono', ui-monospace, 'SF Mono', monospace;
}
```

### Type scale

The scale is strict. No arbitrary font sizes outside this scale.

| Token | Desktop | Mobile | Weight | Line height | Letter spacing | Use |
|-------|---------|--------|--------|-------------|----------------|-----|
| `--text-display`  | 80px | 44px | 700 | 1.05 | -0.03em | Hero headlines (rare, max 1 per page) |
| `--text-h1`       | 64px | 40px | 700 | 1.08 | -0.025em | Section heroes |
| `--text-h2`       | 44px | 30px | 600 | 1.15 | -0.02em | Major section headings |
| `--text-h3`       | 28px | 24px | 600 | 1.25 | -0.015em | Sub-section headings |
| `--text-h4`       | 22px | 20px | 500 | 1.35 | -0.01em | Card titles |
| `--text-lead`     | 22px | 19px | 400 | 1.5  | 0       | Hero subheads, lead paragraphs |
| `--text-body`     | 17px | 16px | 400 | 1.6  | 0       | Default body copy |
| `--text-body-sm`  | 15px | 14px | 400 | 1.55 | 0       | Secondary body, card descriptions |
| `--text-caption`  | 13px | 12px | 400 | 1.5  | 0       | Captions, metadata |
| `--text-eyebrow`  | 13px | 12px | 500 | 1.4  | 0.08em (UPPERCASE) | Section labels, in mono |

### Tailwind type scale

Add to `tailwind.config.js` under `extend.fontSize`:

```js
fontSize: {
  'display':  ['80px', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: 700 }],
  'h1':       ['64px', { lineHeight: '1.08', letterSpacing: '-0.025em', fontWeight: 700 }],
  'h2':       ['44px', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: 600 }],
  'h3':       ['28px', { lineHeight: '1.25', letterSpacing: '-0.015em', fontWeight: 600 }],
  'h4':       ['22px', { lineHeight: '1.35', letterSpacing: '-0.01em', fontWeight: 500 }],
  'lead':     ['22px', { lineHeight: '1.5', fontWeight: 400 }],
  'body':     ['17px', { lineHeight: '1.6', fontWeight: 400 }],
  'body-sm':  ['15px', { lineHeight: '1.55', fontWeight: 400 }],
  'caption':  ['13px', { lineHeight: '1.5', fontWeight: 400 }],
  'eyebrow':  ['13px', { lineHeight: '1.4', letterSpacing: '0.08em', fontWeight: 500 }],
}
```

### Typography rules

**Headlines (Geist):** All headlines use `font-display` with negative letter
spacing. The negative tracking is critical — it's what makes the type feel
modern and intentional. Default headlines use weight 600; use 700 only for
the single most important headline on a page (typically the hero).

**Body (Inter):** All body copy uses Inter at weight 400, line-height 1.6,
with zero letter-spacing. Bold emphasis uses weight 600 (not 700 — 700 in
Inter feels chunky next to Geist).

**Eyebrows (Geist Mono):** Section labels above headlines use Geist Mono in
uppercase, weight 500, with positive letter-spacing of 0.08em. This is one
of the strongest premium-feel signals — it's how Stripe, Vercel, Wiz, and
Linear all introduce sections.

Example structure on a light section:

```html
<div class="text-eyebrow text-accent uppercase">AI ENABLEMENT</div>
<h2 class="text-h2 text-text-primary">Cut model costs by 40%, not your engineering team.</h2>
<p class="text-lead text-text-secondary">We integrate AI into your existing workflows...</p>
```

Same structure on a dark accent section:

```html
<div class="text-eyebrow text-accent uppercase">RESULTS</div>
<h2 class="text-h2 text-text-dark-primary">Numbers from the last 12 deployments.</h2>
<p class="text-lead text-text-dark-secondary">Anonymized client outcomes, full data...</p>
```

**Line length:** Body copy max 65–75 characters per line. Long lines kill
reading on desktop. Use container max-widths to enforce this.

**Numerals:** Inter and Geist both have tabular numerals. Enable them on any
display of metrics: `font-feature-settings: 'tnum'`. This makes numbers
align in stat blocks.

**Hyphenation:** Disable on headlines (`hyphens: none`). Enable on body copy
for narrow columns (`hyphens: auto`).

---

## 8. Spacing System

Base unit: **4px**. All spacing values are multiples of 4. No arbitrary
values.

### Scale

| Token | Value | Use |
|-------|-------|-----|
| `--space-0`  | 0      | Reset |
| `--space-1`  | 4px    | Tight inline gaps |
| `--space-2`  | 8px    | Icon-to-text gaps |
| `--space-3`  | 12px   | Tight stack |
| `--space-4`  | 16px   | Default body gap |
| `--space-5`  | 20px   | Standard stack |
| `--space-6`  | 24px   | Generous stack |
| `--space-8`  | 32px   | Card padding, group separation |
| `--space-10` | 40px   | Sub-section internal gap |
| `--space-12` | 48px   | Sub-section separation |
| `--space-16` | 64px   | Section internal generous |
| `--space-20` | 80px   | Section padding mobile |
| `--space-24` | 96px   | Section padding tablet |
| `--space-32` | 128px  | Section padding desktop |
| `--space-40` | 160px  | Hero / major section padding desktop |

### Section padding standard

```css
.section {
  padding-top: var(--space-32);     /* 128px desktop */
  padding-bottom: var(--space-32);
}

@media (max-width: 1024px) {
  .section { padding-top: var(--space-24); padding-bottom: var(--space-24); }
}

@media (max-width: 640px) {
  .section { padding-top: var(--space-20); padding-bottom: var(--space-20); }
}

.section--hero {
  padding-top: var(--space-40);
  padding-bottom: var(--space-40);
}
```

When in doubt, **add more vertical space**. Premium sites always feel
slightly "too empty" on first look.

---

## 9. Layout System

### Breakpoints

| Name | Min width | Use |
|------|-----------|-----|
| `sm` | 640px  | Small tablets, large phones landscape |
| `md` | 768px  | Tablets |
| `lg` | 1024px | Small laptops |
| `xl` | 1280px | Standard desktop |
| `2xl`| 1536px | Large desktop |

### Container widths

```css
.container-prose  { max-width: 720px; }   /* Long-form text content */
.container-narrow { max-width: 960px; }   /* Content-heavy sections */
.container-default{ max-width: 1280px; }  /* Standard sections */
.container-wide   { max-width: 1440px; }  /* Hero, full-bleed visuals */
.container-full   { max-width: 100%; padding: 0 var(--space-6); }
```

All containers are horizontally centered with `margin: 0 auto` and have side
padding of 24px on mobile, 40px on tablet, 64px on desktop.

### Grid

12-column grid with 24px gutters on mobile, 32px on desktop.

```css
.grid-12 {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;
}

@media (min-width: 1024px) {
  .grid-12 { gap: 32px; }
}
```

### Layout patterns

**Asymmetric splits are preferred.** When using two-column layouts, prefer
7/5 or 5/7 over 6/6. This creates visual interest without being chaotic.

**Hero pattern:** Text content occupies columns 1–7. Visual content (product
screenshot, metric block, illustration) occupies columns 8–12.

**Feature grid:** 3 columns on desktop (`col-span-4` each), 2 columns on
tablet (`col-span-6` each), 1 column on mobile (`col-span-12`).

**Content + sidebar:** Content occupies columns 1–8, sidebar columns 9–12.

### Responsive principles

**Mobile-first.** Every component is designed for 375px width first, then
scaled up. Desktop is a progressive enhancement, not the default.

**No horizontal scroll, ever.** If a layout breaks horizontally on any
viewport between 320px and 1920px, it's broken.

**Tap targets minimum 44x44px on mobile.** Buttons, nav links, anything
clickable.

**Mobile nav uses a slide-in drawer**, not a dropdown. Hamburger top-right,
drawer slides from right. Drawer surface defaults to paper (light), matching
the rest of the site.

---

## 10. Border Radius

Restrained scale. We are a serious tech firm, not a cuddly consumer app.

| Token | Value | Use |
|-------|-------|-----|
| `--radius-none`  | 0    | Default for most elements |
| `--radius-sm`    | 4px  | Buttons, input fields, badges |
| `--radius-md`    | 8px  | Cards, modals, callout boxes |
| `--radius-lg`    | 12px | Large feature cards (sparingly) |
| `--radius-full`  | 9999px | Avatar circles, pill badges |

Default: most elements have **no border radius**. Sharp 90-degree corners
read as serious and intentional. Round corners only where they functionally
help (buttons, cards, avatars).

**Never use radius greater than 12px on rectangular elements.** Avoid the
"fluffy AI startup card" look.

---

## 11. Shadows / Elevation

On light surfaces, shadows are **the primary elevation tool**. They're
subtle but functional. Pair with a 1px border for the cleanest look.

```css
:root {
  /* Light surface shadows — primary use */
  --shadow-sm:  0 1px 2px 0 rgba(11, 15, 23, 0.04);
  --shadow-md:  0 4px 12px -2px rgba(11, 15, 23, 0.06);
  --shadow-lg:  0 12px 32px -4px rgba(11, 15, 23, 0.08);
  --shadow-xl:  0 24px 48px -8px rgba(11, 15, 23, 0.12);

  /* Dark surface elevation — borders only, never shadows */
  --border-elev-1: 1px solid var(--color-border-dark);
  --border-elev-2: 1px solid var(--color-border-dark-strong);
}
```

**On light surfaces (default):**
- Default cards: `--shadow-sm` plus a 1px border in `--color-border`
- Hover state: lift to `--shadow-md`, border stays the same or shifts to
  `--color-border-strong`
- Modals: `--shadow-xl` with `--color-white` background
- Dropdowns: `--shadow-lg`

**On dark accent surfaces:**
- Default cards: no shadow, 1px border in `--color-border-dark`
- Hover state: border becomes `--color-border-dark-strong`
- Modals on dark: still use the light-surface modal pattern (modal has its
  own `--color-white` background)

**Never use drop shadows on text.** Ever.

---

## 12. Motion System

### Principles

Motion explains, never decorates. Every animation must answer "what is this
helping the user understand?" If the answer is "nothing, it just looks
cool," it gets cut.

### Tokens

```css
:root {
  /* Durations */
  --duration-instant: 100ms;
  --duration-fast:    200ms;
  --duration-base:    300ms;
  --duration-slow:    500ms;

  /* Easings */
  --ease-out:    cubic-bezier(0.22, 1, 0.36, 1);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
  --ease-spring: cubic-bezier(0.5, 1.4, 0.5, 1);
}
```

### Allowed animations

- Button hover: 200ms ease-out (color/scale shifts, max scale 1.02)
- Link underline: 200ms ease-out (slide in from left)
- Card hover: 200ms ease-out (subtle shadow lift on light, border brighten on dark)
- Scroll-triggered fade-in for sections: 300ms ease-out, opacity 0→1, translateY 20px→0
- Hero entry on page load: 500ms ease-out, staggered children with 80ms delay
- Modal/drawer open: 300ms ease-out
- Accordion expand: 300ms ease-in-out

### Forbidden animations

- Parallax backgrounds
- Particle effects
- Animated gradients
- Continuous looping animations (unless functional, like a loading state)
- Scroll-jacking
- Animated counter-up on metrics
- Typing text effects in headlines
- Mouse-follower effects
- Page transitions longer than 600ms

### Reduced motion

Always respect `prefers-reduced-motion`.

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 13. Iconography

### Library

**Lucide icons exclusively.** No other icon library. https://lucide.dev

```bash
npm install lucide-react
```

### Specifications

- **Stroke width**: 1.5px always.
- **Sizes**: 16px (inline with body), 20px (in buttons), 24px (default
  standalone), 32px (feature icons), 48px (hero feature blocks).
- **Color**: Inherit from text color via `currentColor`. Accent color only
  when the icon is communicating a primary action.

```jsx
<Lock size={20} strokeWidth={1.5} />
```

### Icon usage rules

- **Never use a padlock or shield as a primary visual** for cybersecurity.
  Use abstract structural icons (Layers, Network, Activity) instead.
- **Never use a brain or neural network icon** for AI. Use Sparkles,
  Workflow, Cpu, or pure typography instead.
- **One icon per concept on a page.** Don't decorate every paragraph with an
  icon — it dilutes their power.

---

## 14. Imagery

### Photography

**No stock photos of people in suits, ever.** This is the single fastest way
to destroy credibility with US/EU buyers.

**No stock photos of "diverse teams smiling at laptops."** Same problem.

**Acceptable imagery types:**
1. Real product UI screenshots — actual dashboards, real audit reports, real
   chatbot interfaces from work we've shipped (with client data anonymized)
2. Architectural/structural photography — abstract cityscapes,
   infrastructure, data center interiors (only if licensed and high quality)
3. Original photography of the founders/team — only if shot professionally
4. No photography at all — typography-led layouts work fine

**Image treatment:** All photography uses a consistent post-processing pass:
slight desaturation (~80% saturation), subtle contrast lift, neutral color
grade. This unifies images from different sources and reads cleaner against
the warm off-white background.

**Light surface backgrounds for product UI:** When showing product
screenshots on a light section, give them a subtle 1px border in
`--color-border` and a `--shadow-md`. This provides a frame that prevents
the screenshot from looking pasted in.

### Illustrations

**No illustrations of any kind, by default.** This includes:
- Generic AI/tech illustrations (3D orbs, neural networks, brain shapes)
- Isometric "characters at desks" illustrations
- Hand-drawn whimsical illustrations
- Generic geometric "tech" patterns

**Acceptable substitute:** Custom data visualizations, architecture
diagrams, or workflow diagrams that communicate something specific. These
are information, not decoration.

### Backgrounds

Solid `--color-paper` (light sections) and `--color-ink` (dark sections) is
the default and the best choice 95% of the time.

Acceptable subtle backgrounds:
- Barely-visible noise texture (less than 3% opacity)
- Single hairline horizontal divider lines suggesting infrastructure
- Subtle dot grid (very low opacity, behind content) for technical sections

Never:
- Geometric polygon "tech" backgrounds
- Animated gradients
- Glowing orbs or blobs
- Code/binary text backgrounds
- World maps with glowing connection points

---

## 15. Logo Usage

### Files

The Kolabix logomark is the K-shape with the "KOLABIX INNOVATIONS"
wordmark. Required variants:
- Full color (logo on light surfaces — default usage on this site)
- White / light-on-dark (logo on dark accent sections, footer)
- Single-color black (single-color print contexts)
- Single-color white (single-color print contexts on dark)

### Clearspace

Minimum clearspace around the logo equals the height of the K-shape on all
sides. Never crowd the logo with adjacent elements.

### Sizes

- Navigation header: 32px height (mobile), 36px height (desktop)
- Footer: 28px height
- Hero or feature placement: 48–64px height
- Minimum size: 24px height. Below this, the wordmark becomes illegible.

### Surface assignment

- On `--color-paper` or `--color-white`: full-color logo (default usage on
  this site)
- On `--color-ink`: white/light-on-dark variant (footer, dark CTA section)
- Never on busy photography or gradients

### Don't

- Stretch or distort the logo
- Change the logo colors outside of the approved variants
- Add effects (drop shadows, glows, outlines) to the logo
- Place the logo at an angle
- Crop the logo

---

## 16. Accessibility

### Contrast (WCAG AA minimum, AAA preferred)

All text on `--color-paper` (`#FAFAF7`) must meet AA contrast (4.5:1 for
body, 3:1 for large text). The defined text colors all pass:
- `--color-text-primary` (`#0B0F17`) on Paper: ratio 17.1:1 (AAA)
- `--color-text-secondary` (`#52525B`) on Paper: ratio 7.6:1 (AAA)
- `--color-text-tertiary` (`#71717A`) on Paper: ratio 5.0:1 (AA)

All text on `--color-ink` (`#0B0F17`) for dark accent sections:
- `--color-text-dark-primary` (`#F5F5F2`) on Ink: ratio 16.8:1 (AAA)
- `--color-text-dark-secondary` (`#9CA3AF`) on Ink: ratio 7.2:1 (AAA)

`--color-accent` (`#2E5BFF`) on Paper: ratio 5.4:1 — passes AA. Use accent
color sparingly for short text (button labels, link text, eyebrows).

### Focus states

Every interactive element must have a visible focus state. Default:

```css
*:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
  border-radius: var(--radius-sm);
}
```

Never remove focus outlines without providing a custom one.

### Keyboard navigation

All interactive elements must be reachable and operable via keyboard. Tab
order must follow visual order. Skip-to-content link must be the first
focusable element.

### Semantic HTML

- Use real `<button>`, not `<div onClick>`
- Use real `<a href>` for navigation, not `<div onClick>`
- Use real headings (`<h1>` through `<h4>`) in document hierarchy
- Use `<nav>`, `<main>`, `<footer>`, `<section>` semantically
- Provide `alt` text for every meaningful image; `alt=""` for decorative

### Screen reader

- All icons that aren't paired with text need `aria-label`
- Form inputs need explicit `<label>` elements (no placeholder-only labels)
- Live regions for dynamic content updates use `aria-live="polite"`

---

## 17. Hard Rules — Never Do These

This list is final. Any of these in production is a bug.

1. No purple, magenta, or pink anywhere on the site
2. No gradients of any kind
3. No glowing neural network, brain, or AI visualization graphics
4. No 3D orbs, blobs, or floating geometric shapes
5. No padlock or shield icons as primary cybersecurity visuals
6. No stock photos of people in business attire
7. No animated typing effects in any headline
8. No auto-rotating carousels of testimonials, logos, or features
9. No chatbot popup that appears within the first 30 seconds
10. No pure black `#000000`. Use `--color-ink`.
11. Pure white `#FFFFFF` is allowed only for elevated cards. The page
    background is `--color-paper`.
12. No fonts other than Geist, Inter, and Geist Mono
13. No more than one accent color (electric blue) per page
14. No bold body copy that runs longer than half a sentence
15. No ALL-CAPS body copy (eyebrows are the only exception)
16. No emoji in headlines or section titles
17. No "We're passionate about..." or "Our journey..." copy
18. No exclamation marks in headlines
19. No animated counter-up on metric numbers
20. No video backgrounds in the hero
21. No cookie banner that blocks the entire viewport
22. No more than 3 dark accent sections on a single page

---

## 18. Required Patterns — Always Do These

1. Lead every page with the answer (outcome, not setup)
2. Use eyebrow + headline + lead pattern at the top of every section
3. Show real metrics with units in the hero or first below-fold section
4. Use real client logos if we have them; if not, use a "How we work" diagram
5. Include the founders' real names and faces on the About page with
   LinkedIn links
6. Show the Mumbai address clearly in the footer (paired with international
   project credentials, not hidden)
7. Use Geist Mono uppercase eyebrows above every major headline
8. Apply tabular numerals to all metric displays
9. Respect `prefers-reduced-motion`
10. Use real `<button>` and `<a>` elements (never clickable divs)
11. Test every page on a 375px viewport before shipping
12. Compress images to WebP, max 200KB per image except hero (max 500KB)
13. Lazy-load all below-the-fold images
14. Set explicit `width` and `height` on all images to prevent layout shift
15. Achieve Lighthouse score above 90 on Performance and 100 on Accessibility
16. Place at least one dark accent section per page (typically the metric
    showcase or final CTA) to provide visual punctuation

---

## 19. Performance Budget

The site must meet these targets to feel premium. Slow sites do not feel
premium regardless of how they look.

| Metric | Target | Threshold |
|--------|--------|-----------|
| Largest Contentful Paint | < 1.5s | 2.5s max |
| Cumulative Layout Shift  | < 0.05 | 0.1 max  |
| First Input Delay        | < 50ms | 100ms max|
| Total page weight        | < 1.5MB| 2.5MB max|
| Lighthouse Performance   | > 95   | 90 min   |
| Lighthouse Accessibility | 100    | 95 min   |

Hosting: Vercel or Cloudflare Pages.

---

## 20. SEO and Metadata

Every page must have:
- Unique `<title>` (under 60 characters)
- Unique meta description (under 160 characters)
- Open Graph image (1200x630px, on-brand)
- Canonical URL
- Structured data where appropriate (Organization on homepage, Article on
  blog posts)

Page titles follow the format: `{Page Topic} — Kolabix`
Example: `AI Enablement for Mid-Market Companies — Kolabix`

---

## 21. Implementation Checklist

Before any page goes live, verify:

- [ ] All colors come from defined tokens (no inline hex values)
- [ ] All fonts are Geist, Inter, or Geist Mono
- [ ] All font sizes match the type scale tokens
- [ ] All spacing values are multiples of 4
- [ ] No banned visual patterns present (purple, gradients, orbs, etc.)
- [ ] At least one real metric or specific number above the fold
- [ ] Eyebrow + headline + lead pattern used in every section
- [ ] Page composes light sections by default with 1–3 dark accent sections
- [ ] Mobile (375px) layout tested and working
- [ ] Tablet (768px) layout tested and working
- [ ] All interactive elements keyboard-accessible
- [ ] Focus states visible on every interactive element
- [ ] Lighthouse Performance > 95
- [ ] Lighthouse Accessibility = 100
- [ ] Open Graph image set
- [ ] Page title and meta description unique to the page

---

End of design system.

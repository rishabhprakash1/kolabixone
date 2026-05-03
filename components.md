# Kolabix Component Library

This is the canonical component specification for **kolabix.com**. Read this
alongside `DESIGN.md`. The design system in `DESIGN.md` defines tokens
(colors, typography, spacing); this file defines how those tokens compose
into reusable components.

**Implementation target**: React + Next.js + Tailwind CSS. JSX examples
below assume Tailwind utility classes derived from the config in `DESIGN.md`.
If building in plain HTML/CSS, adapt the class names to your CSS architecture
but match the token usage exactly.

**Surface assumption**: Every component defaults to **light surface
styling** (paper background, dark text). Components that sit inside dark
accent sections (metric showcase, final CTA, footer) use the `surface="dark"`
variant where applicable. This split mirrors the surface strategy in
DESIGN.md Section 3.

**Core rule**: Every page is built from these components. If a page needs
something not in this library, the new pattern is added here first, then
used. No one-off styles in pages.

---

## Table of Contents

1. Foundation primitives (Container, Section, Stack, Cluster)
2. Typography components (Eyebrow, Headline, Lead, Prose, HeadlineGroup)
3. Buttons (Button, IconButton)
4. Form elements (Input, Textarea, Select, Checkbox)
5. Navigation (Header, MobileDrawer, Footer)
6. Cards (ServiceCard, CaseStudyCard, MetricCard, TestimonialCard, TeamMemberCard)
7. Section patterns (Hero, LogoStrip, MetricStrip, FeatureGrid, SideBySideFeature, ProcessSteps, FAQ, CTABlock)
8. Interactive (Tabs, Accordion, Modal, Tooltip)
9. Status indicators (Badge, StatusDot)
10. Misc (Avatar, Divider, Skeleton)
11. Composition examples
12. Component build order
13. Acceptance criteria

---

## 1. Foundation Primitives

### Container

Centers content horizontally with consistent side padding. Every section's
content goes inside a Container.

**Props:**
- `size`: `'prose' | 'narrow' | 'default' | 'wide' | 'full'` (default: `'default'`)
- `className`: string

**Sizes:**
- `prose`: max-width 720px (long-form text)
- `narrow`: max-width 960px (content-heavy sections)
- `default`: max-width 1280px (most sections)
- `wide`: max-width 1440px (hero, full-bleed visuals)
- `full`: 100% with padding

**Padding:** 24px sides on mobile, 40px on tablet (sm:), 64px on desktop (lg:)

**JSX:**

```jsx
export function Container({ size = 'default', className = '', children }) {
  const sizes = {
    prose:   'max-w-[720px]',
    narrow:  'max-w-[960px]',
    default: 'max-w-[1280px]',
    wide:    'max-w-[1440px]',
    full:    'max-w-full',
  };
  return (
    <div className={`mx-auto px-6 sm:px-10 lg:px-16 ${sizes[size]} ${className}`}>
      {children}
    </div>
  );
}
```

---

### Section

Vertical section wrapper with consistent top/bottom padding. Sets the
background surface (light by default, dark for accent sections) and
contains a Container.

**Props:**
- `surface`: `'light' | 'dark'` (default: `'light'`)
- `padding`: `'default' | 'compact' | 'hero'` (default: `'default'`)
- `id`: string (for anchor links)
- `className`: string

**Padding values:**
- `compact`: 80px top/bottom mobile, 96px tablet, 128px desktop
- `default`: 80px / 96px / 128px (same as compact for now; reserved for future delta)
- `hero`: 96px / 128px / 160px

**JSX:**

```jsx
export function Section({
  surface = 'light',
  padding = 'default',
  id,
  className = '',
  children
}) {
  const surfaces = {
    light: 'bg-paper text-text-primary',
    dark:  'bg-ink text-text-dark-primary',
  };
  const paddings = {
    compact: 'py-20 lg:py-24 xl:py-32',
    default: 'py-20 lg:py-24 xl:py-32',
    hero:    'py-24 lg:py-32 xl:py-40',
  };
  return (
    <section id={id} className={`${surfaces[surface]} ${paddings[padding]} ${className}`}>
      {children}
    </section>
  );
}
```

**Note on alternating sections:** A common pattern is alternating between
`bg-paper` and `bg-paper-muted` for visual rhythm without committing to
dark accent sections. Use `<Section surface="light" className="bg-paper-muted">`
for the muted variant.

---

### Stack

Vertical layout primitive with consistent gaps. Use instead of margin-based
spacing between elements.

**Props:**
- `gap`: `'1' | '2' | '3' | '4' | '5' | '6' | '8' | '10' | '12' | '16'`
  (corresponds to spacing scale in DESIGN.md)
- `align`: `'start' | 'center' | 'end' | 'stretch'` (default: `'stretch'`)
- `as`: HTML element (default: `'div'`)

**JSX:**

```jsx
export function Stack({ gap = '4', align = 'stretch', as: Tag = 'div', className = '', children }) {
  const gaps = {
    '1':  'gap-1',  '2':  'gap-2',  '3':  'gap-3',  '4':  'gap-4',
    '5':  'gap-5',  '6':  'gap-6',  '8':  'gap-8',  '10': 'gap-10',
    '12': 'gap-12', '16': 'gap-16',
  };
  const aligns = {
    start: 'items-start', center: 'items-center',
    end: 'items-end', stretch: 'items-stretch',
  };
  return (
    <Tag className={`flex flex-col ${gaps[gap]} ${aligns[align]} ${className}`}>
      {children}
    </Tag>
  );
}
```

---

### Cluster

Horizontal layout primitive that wraps when out of space. Use for inline
groups (button rows, tag lists, social icons).

**Props:**
- `gap`: same scale as Stack
- `align`: `'start' | 'center' | 'end' | 'baseline'`
- `justify`: `'start' | 'center' | 'end' | 'between'`

**JSX:**

```jsx
export function Cluster({ gap = '3', align = 'center', justify = 'start', className = '', children }) {
  return (
    <div className={`flex flex-row flex-wrap items-${align} justify-${justify} gap-${gap} ${className}`}>
      {children}
    </div>
  );
}
```

---

## 2. Typography Components

All typography components accept an `onDark` prop (or equivalent) for use
inside dark accent sections. Default is light surface styling.

### Eyebrow

Small uppercase label that appears above a headline. Geist Mono font, accent
color or muted, with letter-spacing.

**JSX:**

```jsx
export function Eyebrow({ children, color = 'accent', className = '' }) {
  const colors = {
    accent: 'text-accent',
    muted:  'text-text-secondary',         // light surfaces
    'muted-dark': 'text-text-dark-secondary',  // dark surfaces
  };
  return (
    <div className={`font-mono text-eyebrow uppercase tracking-[0.08em] ${colors[color]} ${className}`}>
      {children}
    </div>
  );
}
```

**Usage:**
```jsx
<Eyebrow>AI ENABLEMENT</Eyebrow>
```

---

### Headline

Display headline using Geist with negative letter-spacing. Sizes from the
type scale.

**Props:**
- `level`: `'display' | 'h1' | 'h2' | 'h3' | 'h4'`
- `as`: HTML element override (e.g., render an `h2`-styled headline as
  `<h1>` for SEO)
- `onDark`: boolean — use white text instead of ink (default: false)

**JSX:**

```jsx
export function Headline({ level = 'h2', as, onDark = false, className = '', children }) {
  const Tag = as || (level === 'display' ? 'h1' : level);
  const styles = {
    display: 'text-display font-display font-bold tracking-[-0.03em] leading-[1.05]',
    h1:      'text-h1 font-display font-bold tracking-[-0.025em] leading-[1.08]',
    h2:      'text-h2 font-display font-semibold tracking-[-0.02em] leading-[1.15]',
    h3:      'text-h3 font-display font-semibold tracking-[-0.015em] leading-[1.25]',
    h4:      'text-h4 font-display font-medium tracking-[-0.01em] leading-[1.35]',
  };
  const color = onDark ? 'text-text-dark-primary' : 'text-text-primary';
  return (
    <Tag className={`${styles[level]} ${color} ${className}`}>
      {children}
    </Tag>
  );
}
```

---

### Lead

Larger introductory paragraph below a headline.

**JSX:**

```jsx
export function Lead({ children, onDark = false, className = '' }) {
  const color = onDark ? 'text-text-dark-secondary' : 'text-text-secondary';
  return (
    <p className={`text-lead leading-[1.5] ${color} max-w-[65ch] ${className}`}>
      {children}
    </p>
  );
}
```

---

### Prose

Long-form body content wrapper. Inter font, 17px, line-height 1.6, with
proper spacing for paragraphs, lists, and inline elements. Light surface
styling by default.

**JSX:**

```jsx
export function Prose({ children, onDark = false, className = '' }) {
  const baseColor = onDark ? 'text-text-dark-primary' : 'text-text-primary';
  const linkHover = onDark ? 'hover:text-accent' : 'hover:text-accent-hover';
  const codeBg = onDark ? 'bg-ink-elevated' : 'bg-paper-muted';

  return (
    <div className={`
      font-body text-body leading-[1.6] ${baseColor}
      [&>p]:mb-4 [&>p:last-child]:mb-0
      [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-2 ${linkHover}
      [&_strong]:font-semibold
      [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4
      [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4
      [&_li]:mb-2
      [&_code]:font-mono [&_code]:text-body-sm [&_code]:${codeBg} [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded-sm
      max-w-[65ch]
      ${className}
    `}>
      {children}
    </div>
  );
}
```

---

### HeadlineGroup

The standard pattern: Eyebrow + Headline + Lead. Use this for nearly every
section opening.

**JSX:**

```jsx
export function HeadlineGroup({ eyebrow, headline, lead, level = 'h2', align = 'left', onDark = false }) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : '';
  return (
    <Stack gap="5" className={`max-w-[720px] ${alignClass}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Headline level={level} onDark={onDark}>{headline}</Headline>
      {lead && <Lead onDark={onDark}>{lead}</Lead>}
    </Stack>
  );
}
```

---

## 3. Buttons

### Button

Primary interactive element. All buttons across the site use this component
— no one-off button styles.

**Variants (light surface default — these are what you'll use 90% of the
time):**
- `primary`: Solid accent (electric blue) background with white text
- `secondary`: Solid ink background with white text (used as the secondary
  CTA on light hero sections, e.g., "See case studies" next to a primary
  "Book a call")
- `ghost`: Transparent background with ink border, ink text (low-emphasis
  actions)
- `link`: No background, no border, accent color, underline on hover

**Variants when sitting inside a dark accent section:**
- `primary` (dark): Same accent solid (works on both surfaces)
- `secondary` (dark): Solid white background with ink text
- `ghost` (dark): Transparent with white border, white text
- `link` (dark): Accent color, underline on hover

**Sizes:**
- `sm`: 36px tall, padding 12px 16px, text 14px
- `md` (default): 44px tall, padding 12px 24px, text 16px
- `lg`: 52px tall, padding 16px 32px, text 17px

**States:**
- Default
- Hover: background shift, border color shift
- Active: 0.98 scale (subtle press)
- Focus-visible: 2px accent outline with 2px offset
- Disabled: 50% opacity, cursor not-allowed
- Loading: spinner replaces label, button stays at original width

**With icon:** Icon (Lucide, 20px) appears left or right of the label, with
8px gap.

**JSX:**

```jsx
import { Loader2 } from 'lucide-react';

export function Button({
  variant = 'primary',
  size = 'md',
  surface = 'light',  // 'light' | 'dark'
  iconLeft,
  iconRight,
  loading = false,
  disabled = false,
  type = 'button',
  href,
  onClick,
  className = '',
  children,
}) {
  const base = `
    inline-flex items-center justify-center gap-2
    font-body font-medium
    rounded-sm
    transition-all duration-200 ease-out
    focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    active:scale-[0.98]
  `;

  const variantsLight = {
    primary:   'bg-accent text-white hover:bg-accent-hover',
    secondary: 'bg-ink text-white hover:bg-ink-elevated',
    ghost:     'bg-transparent text-text-primary border border-border hover:border-border-strong hover:bg-paper-muted',
    link:      'bg-transparent text-accent hover:text-accent-hover underline-offset-4 hover:underline px-0',
  };

  const variantsDark = {
    primary:   'bg-accent text-white hover:bg-accent-hover',
    secondary: 'bg-white text-ink hover:bg-paper-muted',
    ghost:     'bg-transparent text-text-dark-primary border border-border-dark-strong hover:border-white/20 hover:bg-white/5',
    link:      'bg-transparent text-accent hover:text-accent-hover underline-offset-4 hover:underline px-0',
  };

  const variants = surface === 'dark' ? variantsDark : variantsLight;

  const sizes = {
    sm: 'h-9  px-4  text-body-sm',
    md: 'h-11 px-6  text-body',
    lg: 'h-13 px-8  text-body',
  };

  const Tag = href ? 'a' : 'button';
  const props = href ? { href } : { type, onClick, disabled: disabled || loading };

  return (
    <Tag
      {...props}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {loading ? (
        <Loader2 size={20} strokeWidth={1.5} className="animate-spin" />
      ) : (
        <>
          {iconLeft}
          {children}
          {iconRight}
        </>
      )}
    </Tag>
  );
}
```

**Usage on a light hero:**
```jsx
<Button variant="primary" size="lg" href="/contact">Book a 30-min consult</Button>
<Button variant="ghost" size="lg" iconRight={<ArrowRight size={20} strokeWidth={1.5} />}>
  See case studies
</Button>
```

**Usage on a dark CTA section:**
```jsx
<Button variant="primary" size="lg" surface="dark" href="/contact">Book a call</Button>
```

**Layout rule:** Button rows use a Cluster with gap-3. Primary button always
appears first (left).

---

### IconButton

Icon-only button. Square aspect, used for navigation actions like close,
menu, share.

**Sizes:** 36px (sm), 44px (md), 52px (lg) — square.

**Always include `aria-label`.**

```jsx
<IconButton variant="ghost" size="md" aria-label="Close menu">
  <X size={20} strokeWidth={1.5} />
</IconButton>
```

---

## 4. Form Elements

### Input

Text input. Used for all single-line text fields. Light surface styling by
default.

**Variants:** `default`, `error`

**JSX:**

```jsx
export function Input({
  type = 'text',
  label,
  helper,
  error,
  required = false,
  id,
  surface = 'light',
  ...props
}) {
  const inputId = id || `input-${Math.random().toString(36).substring(2, 9)}`;
  const labelColor   = surface === 'dark' ? 'text-text-dark-primary' : 'text-text-primary';
  const helperColor  = surface === 'dark' ? 'text-text-dark-secondary' : 'text-text-secondary';
  const inputBg      = surface === 'dark' ? 'bg-ink-elevated' : 'bg-white';
  const inputBorder  = surface === 'dark' ? 'border-border-dark' : 'border-border';
  const inputText    = surface === 'dark' ? 'text-text-dark-primary' : 'text-text-primary';
  const placeholder  = surface === 'dark' ? 'placeholder:text-text-dark-tertiary' : 'placeholder:text-text-tertiary';

  return (
    <Stack gap="2">
      {label && (
        <label htmlFor={inputId} className={`text-body-sm font-medium ${labelColor}`}>
          {label}
          {required && <span className="text-accent ml-1">*</span>}
        </label>
      )}
      <input
        id={inputId}
        type={type}
        required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : helper ? `${inputId}-helper` : undefined}
        className={`
          h-11 px-4
          ${inputBg}
          border ${inputBorder}
          rounded-sm
          font-body text-body ${inputText}
          ${placeholder}
          transition-colors duration-200
          focus:outline-none focus:border-accent
          disabled:opacity-50 disabled:cursor-not-allowed
          ${error ? 'border-error' : ''}
        `}
        {...props}
      />
      {helper && !error && (
        <span id={`${inputId}-helper`} className={`text-caption ${helperColor}`}>
          {helper}
        </span>
      )}
      {error && (
        <span id={`${inputId}-error`} className="text-caption text-error" role="alert">
          {error}
        </span>
      )}
    </Stack>
  );
}
```

---

### Textarea

Multi-line text input. Same styling as Input, with `min-height: 120px`.

```jsx
<textarea className="..." rows={4} />
```

---

### Select

Native `<select>` styled to match Input. Use Lucide ChevronDown as the
indicator.

---

### Checkbox / Radio

Custom-styled to match the surface. Both use the accent color for the
checked/selected state.

```jsx
<label className="flex items-start gap-3 cursor-pointer">
  <input type="checkbox" className="..." />
  <span className="text-body-sm text-text-primary">
    I agree to the privacy policy
  </span>
</label>
```

---

### Form layout

Forms use Stack with gap-5 between fields. Submit button sits at the bottom,
full-width on mobile, auto-width on desktop.

---

## 5. Navigation

### Header

Top navigation bar. Sticky. Transparent over hero, solid `--color-paper`
background on scroll with a 1px bottom border.

**Structure:**
- Logo (left) — 36px height, links to /
- Primary nav links (center on desktop, hidden on mobile) — Services, Work,
  About, Pricing, Resources
- Primary CTA (right) — Button, variant="primary", size="md"
- Hamburger icon (right, mobile only) — opens MobileDrawer

**Behavior:**
- On page load: transparent background
- On scroll past 80px: fade in solid `--color-paper` background with subtle
  bottom border `border-border`
- Sticky position, z-index 50
- Height: 72px on desktop, 64px on mobile

**JSX outline:**

```jsx
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <>
      <header className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-200
        ${scrolled ? 'bg-paper/95 backdrop-blur-sm border-b border-border' : 'bg-transparent'}
      `}>
        <Container size="wide">
          <div className="flex items-center justify-between h-16 lg:h-18">
            <Link href="/" aria-label="Kolabix home">
              <Image src="/kolabix-logo-fullcolor.svg" alt="Kolabix" width={120} height={36} />
            </Link>
            <nav className="hidden lg:flex items-center gap-8">
              <Link href="/services" className="text-body-sm text-text-primary hover:text-accent transition-colors">Services</Link>
              <Link href="/work" className="text-body-sm text-text-primary hover:text-accent transition-colors">Work</Link>
              <Link href="/about" className="text-body-sm text-text-primary hover:text-accent transition-colors">About</Link>
              <Link href="/resources" className="text-body-sm text-text-primary hover:text-accent transition-colors">Resources</Link>
            </nav>
            <div className="hidden lg:block">
              <Button variant="primary" size="md" href="/contact">Book a call</Button>
            </div>
            <button
              className="lg:hidden p-2 text-text-primary"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} strokeWidth={1.5} />
            </button>
          </div>
        </Container>
      </header>
      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
```

---

### MobileDrawer

Full-height slide-in drawer from the right on mobile. Light surface (paper)
background.

**Behavior:**
- Slides in from the right over 300ms ease-out
- Backdrop fades in (ink at 60% opacity)
- Body scroll locked while open
- Closes on backdrop click, ESC key, or close button

**Contents:**
- Logo + close button at top
- Nav links stacked vertically with generous spacing
- Primary CTA at bottom

```jsx
<div className="fixed inset-0 z-50">
  <div
    className="absolute inset-0 bg-ink/60 transition-opacity duration-300"
    onClick={onClose}
  />
  <div className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-paper shadow-xl">
    {/* logo + close button */}
    {/* nav stack */}
    {/* CTA */}
  </div>
</div>
```

---

### Footer

Bottom site footer. Always uses **dark surface** (`--color-ink`) regardless
of the page-level surface mix. This is a deliberate Stripe/Wiz pattern:
light page → dark footer for visual punctuation and information density.

**Structure (4-column on desktop, stacked on mobile):**

| Column | Content |
|---|---|
| Column 1 | Logo (white variant) + tagline + Mumbai address + GSTIN |
| Column 2 | Services links (AI Enablement, Cybersecurity Audits, Custom Software, etc.) |
| Column 3 | Company links (About, Work, Careers, Resources) |
| Column 4 | Contact (email, LinkedIn, social icons) |

**Bottom bar:**
- Copyright text (left): "© Kolabix Innovations LLP. All rights reserved."
- Legal links (right): Privacy Policy, Terms of Service

**Spacing:** Section padding-default, with generous internal spacing
(gap-12 between columns).

```jsx
<Section surface="dark" padding="default" as="footer">
  <Container size="wide">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
      {/* columns */}
    </div>
    <div className="mt-16 pt-8 border-t border-border-dark flex flex-col md:flex-row justify-between gap-4">
      <p className="text-caption text-text-dark-tertiary">
        © 2026 Kolabix Innovations LLP. All rights reserved.
      </p>
      <Cluster gap="6">
        <Link href="/privacy" className="text-caption text-text-dark-tertiary hover:text-accent">Privacy Policy</Link>
        <Link href="/terms" className="text-caption text-text-dark-tertiary hover:text-accent">Terms of Service</Link>
      </Cluster>
    </div>
  </Container>
</Section>
```

---

## 6. Cards

All cards default to **light surface styling** (white background on paper
section). Include a `surface="dark"` variant for use inside dark accent
sections.

### ServiceCard

Used in the services overview grid on the homepage and on the services
landing page.

**Anatomy:**
- Icon (Lucide, 32px, accent color)
- Headline (h4 level)
- Description (body-sm, 2-3 lines max)
- "Learn more" link with arrow

**Light surface (default):** `bg-white` with 1px border `border-border`,
default `shadow-sm`. Hover lifts to `shadow-md`.

**Dark surface variant:** `bg-ink-elevated` with 1px border `border-border-dark`,
no shadow. Hover brightens border to `border-border-dark-strong`.

**Padding:** 32px all sides.
**Border radius:** 8px.

**JSX:**

```jsx
export function ServiceCard({ icon: Icon, title, description, href, surface = 'light' }) {
  const cardStyles = surface === 'dark'
    ? 'bg-ink-elevated border-border-dark hover:border-border-dark-strong'
    : 'bg-white border-border shadow-sm hover:shadow-md';
  const titleColor = surface === 'dark' ? 'text-text-dark-primary' : 'text-text-primary';
  const descColor  = surface === 'dark' ? 'text-text-dark-secondary' : 'text-text-secondary';

  return (
    <Link href={href} className={`group block border rounded-md p-8 transition-all duration-200 ${cardStyles}`}>
      <Stack gap="5">
        <Icon size={32} strokeWidth={1.5} className="text-accent" />
        <Stack gap="2">
          <h3 className={`text-h4 font-display font-medium tracking-[-0.01em] ${titleColor}`}>
            {title}
          </h3>
          <p className={`text-body-sm leading-[1.55] ${descColor}`}>
            {description}
          </p>
        </Stack>
        <div className="text-body-sm text-accent inline-flex items-center gap-2 mt-2">
          Learn more
          <ArrowRight size={16} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform duration-200" />
        </div>
      </Stack>
    </Link>
  );
}
```

---

### CaseStudyCard

Larger card for showcasing client work. Light surface by default.

**Anatomy:**
- Optional client logo or industry tag (top)
- Headline (h3) — what we did + outcome
- 2–3 metric chips (e.g., "40% cost reduction", "8 weeks to deploy")
- "Read case study" link with arrow

**Light surface:** `bg-white` with 1px border `border-border`, `shadow-sm`,
hover to `shadow-md`.
**Dark surface variant:** `bg-ink-elevated` with `border-border-dark`.

**Image:** Optional. If present, occupies the top portion at 16:9 aspect
ratio with a subtle overlay treatment.

---

### MetricCard

Single large number with a label. Used in metric strips and case studies.
Inherits the surrounding section's surface styling.

**Anatomy:**
- Value (h1 or display size, primary text or accent color)
- Label (eyebrow style, secondary text)
- Optional context text below (caption)

**JSX:**

```jsx
export function MetricCard({ value, label, context, color = 'primary', surface = 'light' }) {
  const valueColor = color === 'accent'
    ? 'text-accent'
    : (surface === 'dark' ? 'text-text-dark-primary' : 'text-text-primary');

  const labelColor   = surface === 'dark' ? 'text-text-dark-secondary' : 'text-text-secondary';
  const contextColor = surface === 'dark' ? 'text-text-dark-secondary' : 'text-text-secondary';
  const borderColor  = surface === 'dark' ? 'border-border-dark-strong' : 'border-border';

  return (
    <Stack gap="2" className={`border-l ${borderColor} pl-6`}>
      <div className={`font-display font-semibold tracking-[-0.025em] text-h1 tabular-nums ${valueColor}`}>
        {value}
      </div>
      <div className={`font-mono text-eyebrow uppercase tracking-[0.08em] ${labelColor}`}>
        {label}
      </div>
      {context && (
        <p className={`text-body-sm mt-1 ${contextColor}`}>
          {context}
        </p>
      )}
    </Stack>
  );
}
```

---

### TestimonialCard

Quote from a real, named client. Light surface by default.

**Anatomy:**
- Quote text (lead size, primary text, with curly quote marks)
- Avatar (40px circle)
- Name (body-sm, font-medium)
- Title and company (caption, secondary text)

**Critical rule:** Never use a testimonial card without a real name, title,
and company. Anonymized testimonials hurt more than they help.

```jsx
export function TestimonialCard({ quote, name, title, company, avatarSrc, surface = 'light' }) {
  const cardBg     = surface === 'dark' ? 'bg-ink-elevated' : 'bg-white';
  const cardBorder = surface === 'dark' ? 'border-border-dark' : 'border-border';
  const quoteColor = surface === 'dark' ? 'text-text-dark-primary' : 'text-text-primary';
  const nameColor  = surface === 'dark' ? 'text-text-dark-primary' : 'text-text-primary';
  const metaColor  = surface === 'dark' ? 'text-text-dark-secondary' : 'text-text-secondary';

  return (
    <div className={`${cardBg} border ${cardBorder} rounded-md p-8`}>
      <Stack gap="6">
        <p className={`text-lead leading-[1.5] ${quoteColor}`}>
          &ldquo;{quote}&rdquo;
        </p>
        <Cluster gap="3">
          <Avatar src={avatarSrc} alt={name} size="40" />
          <Stack gap="1">
            <p className={`text-body-sm font-medium ${nameColor}`}>{name}</p>
            <p className={`text-caption ${metaColor}`}>{title}, {company}</p>
          </Stack>
        </Cluster>
      </Stack>
    </div>
  );
}
```

---

### TeamMemberCard

Team member display on the About page.

**Anatomy:**
- Photo (1:1 aspect, square corners or 4px radius, 240px)
- Name (h4)
- Role (body-sm, secondary text)
- LinkedIn icon link

---

## 7. Section Patterns

### Hero

**Variants:**
- `Hero.Full` — Full-viewport-height hero, used only on the homepage
- `Hero.Compact` — 60vh hero, used on service and about pages

Both variants default to **light surface**.

**Hero.Full structure:**

```
[Section, surface=light, padding=hero]
  [Container, size=wide]
    [Grid 12 col]
      [col-span-7: text content]
        Eyebrow
        Headline (display level)
        Lead
        Button row (Cluster: primary + ghost)
      [col-span-5: visual content]
        Real product screenshot OR metric block OR architecture diagram
    [Below grid: thin metric strip or logo strip]
```

**Mobile collapse:** All content stacks vertically, visual appears below
text. Image scales down to fit.

**JSX outline:**

```jsx
export function HeroFull({ eyebrow, headline, lead, primaryCTA, secondaryCTA, visual }) {
  return (
    <Section surface="light" padding="hero">
      <Container size="wide">
        <div className="grid grid-cols-12 gap-8 items-center min-h-[70vh]">
          <div className="col-span-12 lg:col-span-7">
            <Stack gap="6">
              <Eyebrow>{eyebrow}</Eyebrow>
              <Headline level="display" as="h1">{headline}</Headline>
              <Lead>{lead}</Lead>
              <Cluster gap="3" className="mt-2">
                {primaryCTA}
                {secondaryCTA}
              </Cluster>
            </Stack>
          </div>
          <div className="col-span-12 lg:col-span-5">
            {visual}
          </div>
        </div>
      </Container>
    </Section>
  );
}
```

---

### LogoStrip

Trust strip with client logos. Static, never animated. Light surface.

**Anatomy:**
- Eyebrow text: "TRUSTED BY TEAMS AT" (centered, secondary color)
- Logo row: 4–6 logos, evenly spaced, monochrome ink at 60% opacity
- On hover: individual logo lifts to 100% opacity

**Critical rule:** Only use real client logos. If we have fewer than 4 real
logos, replace this section with a different trust signal (metric strip,
"How we work" diagram, or named case studies).

---

### MetricStrip

Horizontal row of 3-4 MetricCards. **Use the dark surface variant** as the
primary metric showcase moment on the homepage — this is one of the
deliberate dark accent sections that gives the page its punctuation.

```jsx
<Section surface="dark" padding="compact">
  <Container>
    <Stack gap="12">
      <HeadlineGroup
        eyebrow="OUTCOMES"
        headline="The numbers from our last 12 enterprise deployments."
        lead="Anonymized client outcomes. Full case studies available on request."
        onDark
      />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
        <MetricCard surface="dark" value="$2.4M" label="Saved across deployments" />
        <MetricCard surface="dark" value="40%" label="Avg cost reduction" />
        <MetricCard surface="dark" value="12" label="Enterprise deployments" />
        <MetricCard surface="dark" value="< 8 wks" label="Avg time to value" />
      </div>
    </Stack>
  </Container>
</Section>
```

A lighter version of MetricStrip (light surface) can also be used as a thin
trust band below the hero, but the punchier dark version is the standard
showcase.

---

### FeatureGrid

3-column grid of ServiceCards (or feature cards). 2-col on tablet, 1-col on
mobile. Light surface by default.

```jsx
<Section surface="light">
  <Container>
    <Stack gap="16">
      <HeadlineGroup
        eyebrow="WHAT WE DO"
        headline="Three engineering disciplines, fully integrated."
        lead="..."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ServiceCard ... />
        <ServiceCard ... />
        <ServiceCard ... />
      </div>
    </Stack>
  </Container>
</Section>
```

---

### SideBySideFeature

Asymmetric two-column section. Image/visual on one side, text on the other.
Direction alternates between sections. Light surface by default.

```
[Section, surface=light]
  [Container]
    [Grid 12 col]
      [col-span-7: visual] (left)
      [col-span-5: text content] (right)
        Eyebrow + Headline + Body + Bullet list + CTA link
```

Next section flips direction (text left, visual right). This rhythm prevents
long pages from feeling repetitive.

You can alternate between `bg-paper` and `bg-paper-muted` between
SideBySideFeature sections for a subtle visual rhythm without committing to
dark accent sections.

---

### ProcessSteps

Numbered process visualization. Used to explain "How we work." Light
surface by default.

**Anatomy:**
- 3–5 steps in a vertical flow on mobile, horizontal on desktop
- Each step: number (large, font-display, accent or primary color), step
  title (h4), description (body-sm)
- Connecting line between steps (subtle, border color)

```jsx
const steps = [
  { number: '01', title: 'Discovery call',  description: '30-min call to understand your stack, constraints, and goals.' },
  { number: '02', title: 'Audit + plan',    description: 'We deliver a written audit and implementation plan within 5 days.' },
  { number: '03', title: 'Build',           description: 'Engineering team integrates AI into your workflows, weekly demos.' },
  { number: '04', title: 'Handover',        description: 'Full documentation, training, and 60-day support included.' },
];
```

---

### FAQ

Accordion list of common questions. Closed by default. Light surface.

```jsx
<Section surface="light">
  <Container size="narrow">
    <Stack gap="12">
      <HeadlineGroup eyebrow="QUESTIONS" headline="Common questions, answered." />
      <Stack gap="0" className="border-t border-border">
        <Accordion question="..." answer="..." />
        <Accordion question="..." answer="..." />
      </Stack>
    </Stack>
  </Container>
</Section>
```

---

### CTABlock

Final call-to-action section before the footer. **Use dark surface** —
this is one of the deliberate dark accent moments that punctuates the page.
Centered layout with primary CTA.

**Anatomy:**
- Eyebrow (optional)
- Headline (h2)
- Brief lead
- Primary CTA button (large)
- Optional: "or [secondary action]" link below

```jsx
<Section surface="dark" padding="default">
  <Container size="narrow">
    <Stack gap="6" align="center" className="text-center">
      <Headline level="h2" onDark>Ready to see what AI can do for your stack?</Headline>
      <Lead onDark>30-minute discovery call. No pitch deck, no obligation.</Lead>
      <Button variant="primary" size="lg" surface="dark" href="/contact">Book a call</Button>
      <p className="text-caption text-text-dark-secondary">
        Or email us at <a href="mailto:hello@kolabix.com" className="text-accent underline">hello@kolabix.com</a>
      </p>
    </Stack>
  </Container>
</Section>
```

---

## 8. Interactive Components

### Tabs

Horizontal tabs with active underline. Light surface by default.

**Anatomy:**
- Tab list (role="tablist"): horizontal flex with bottom border (`border-border`)
- Each tab: padding 12px 16px, body-sm, `text-secondary` by default,
  `text-primary` + accent underline when active
- Tab panel below: padded content area

**Behavior:**
- Click or keyboard (Arrow keys) navigation
- Underline transitions in 200ms ease-out

---

### Accordion

Single accordion item. Light surface by default.

**Anatomy:**
- Trigger: full-width button with question text (body, font-medium) and
  Chevron icon (right). Expanded state rotates chevron 180deg.
- Content: hidden by default, expands with height transition (300ms
  ease-in-out)
- Border-bottom on each item

```jsx
export function Accordion({ question, answer, surface = 'light' }) {
  const [open, setOpen] = useState(false);
  const borderColor = surface === 'dark' ? 'border-border-dark' : 'border-border';
  const titleColor  = surface === 'dark' ? 'text-text-dark-primary' : 'text-text-primary';
  const bodyColor   = surface === 'dark' ? 'text-text-dark-secondary' : 'text-text-secondary';

  return (
    <div className={`border-b ${borderColor}`}>
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center justify-between w-full py-6 text-left text-body font-medium ${titleColor} hover:text-accent transition-colors duration-200`}
        aria-expanded={open}
      >
        <span>{question}</span>
        <ChevronDown
          size={20}
          strokeWidth={1.5}
          className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className={`text-body leading-[1.6] max-w-[65ch] ${bodyColor}`}>
          {answer}
        </p>
      </div>
    </div>
  );
}
```

---

### Modal / Dialog

**Behavior:**
- Backdrop: ink at 60% opacity, fades in 200ms
- Content: centered, max-width 560px, slides up 20px and fades in 300ms
- Close on: backdrop click, ESC key, close button
- Body scroll locked while open
- Focus trapped inside modal
- First focusable element auto-focused on open

**Modal content surface:** Always `bg-white` regardless of the underlying
section surface. Modals are their own context.

**Anatomy:**
- Header: title + close icon button
- Body: padded content
- Footer: button row (right-aligned, primary first... actually wait, primary
  goes RIGHT in modals, secondary on left — this is the only place where
  primary is not first)

Use `<dialog>` element where possible for accessibility. Otherwise,
implement focus trapping manually.

---

### Tooltip

Small contextual hint on hover or focus.

**Behavior:**
- Appears on hover (after 300ms delay) or focus
- Ink background `--color-ink`, white text, 8px padding, 4px radius
- Arrow pointing to trigger
- Positioned above by default, flips below if no room

Use Radix UI Tooltip or Headless UI for accessibility.

---

## 9. Status Indicators

### Badge

Small inline label. Used for tags, statuses, categories. Light surface
default.

**Variants:**
- `default`: Paper-muted background, primary text, border
- `accent`: Accent muted background, accent text
- `success`, `warning`, `error`: Corresponding system color, muted background

**Sizes:**
- `sm`: 20px tall, padding 4px 8px, text 12px
- `md`: 24px tall, padding 4px 12px, text 13px

```jsx
<Badge variant="accent">CERT-In Empanelled</Badge>
<Badge variant="success">Live</Badge>
```

---

### StatusDot

Tiny colored dot for inline status. 8px circle.

```jsx
<span className="inline-flex items-center gap-2">
  <span className="w-2 h-2 rounded-full bg-success" aria-hidden="true" />
  <span className="text-body-sm text-text-primary">All systems operational</span>
</span>
```

---

## 10. Misc

### Avatar

Circular profile image.

**Sizes:** 24px, 32px, 40px (default), 56px, 80px

**Fallback:** If no image, show initials on `bg-paper-muted` (light) or
`bg-ink-elevated` (dark).

```jsx
<Avatar src="/team/founder.jpg" alt="Rishabh Khanna" size="40" />
```

---

### Divider

Horizontal rule. Subtle on light (`border-border`), subtle on dark
(`border-border-dark`).

```jsx
<hr className="border-t border-border my-12" />
```

Use sparingly. Whitespace is usually a better divider than a line.

---

### Skeleton

Loading state placeholder. Subtle pulsing rectangle in `bg-paper-muted`
(light) or `bg-ink-elevated` (dark).

```jsx
<div className="bg-paper-muted animate-pulse rounded-sm h-6 w-32" />
```

---

## 11. Composition Examples

This section shows how the components above compose into common patterns.

### Standard light content section

```jsx
<Section surface="light" padding="default">
  <Container>
    <Stack gap="16">
      <HeadlineGroup
        eyebrow="AI ENABLEMENT"
        headline="Engineering-led AI integration."
        lead="We integrate AI into your existing workflows in weeks. Most clients see 30-40% cost reduction within 90 days."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ServiceCard ... />
        <ServiceCard ... />
        <ServiceCard ... />
      </div>
    </Stack>
  </Container>
</Section>
```

### Asymmetric feature section (light)

```jsx
<Section surface="light" padding="default">
  <Container>
    <div className="grid grid-cols-12 gap-12 items-center">
      <div className="col-span-12 lg:col-span-7">
        <ProductScreenshot src="..." />
      </div>
      <div className="col-span-12 lg:col-span-5">
        <Stack gap="6">
          <Eyebrow color="accent">CASE STUDY</Eyebrow>
          <Headline level="h2">A US fintech cut model costs by $2.4M annually.</Headline>
          <Prose>
            <p>...</p>
          </Prose>
          <Button variant="link" iconRight={<ArrowRight size={16} />}>
            Read the full case study
          </Button>
        </Stack>
      </div>
    </div>
  </Container>
</Section>
```

### Dark accent section (metric showcase)

```jsx
<Section surface="dark" padding="default">
  <Container>
    <Stack gap="16">
      <HeadlineGroup
        eyebrow="RESULTS"
        headline="What our clients see in 90 days."
        lead="Anonymized outcomes from the last 12 enterprise deployments."
        onDark
      />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
        <MetricCard surface="dark" value="40%" label="Cost reduction" />
        <MetricCard surface="dark" value="$2.4M" label="Annual savings" />
        <MetricCard surface="dark" value="< 8 wks" label="Time to deploy" />
        <MetricCard surface="dark" value="12" label="Deployments" />
      </div>
    </Stack>
  </Container>
</Section>
```

### Final CTA before footer

See `CTABlock` above.

---

## 12. Component Build Order

If building the component library from scratch in Antigravity, follow this
order. Each layer depends on the previous.

1. **Foundation primitives**: Container, Section, Stack, Cluster
2. **Typography**: Eyebrow, Headline, Lead, Prose, HeadlineGroup
3. **Buttons**: Button, IconButton
4. **Cards**: ServiceCard, MetricCard, CaseStudyCard, TestimonialCard
5. **Section patterns**: Hero, LogoStrip, MetricStrip, FeatureGrid,
   SideBySideFeature, ProcessSteps, CTABlock
6. **Navigation**: Header, MobileDrawer, Footer
7. **Forms**: Input, Textarea, Select, Checkbox
8. **Interactive**: Accordion, Tabs, Modal, Tooltip
9. **Status**: Badge, StatusDot
10. **Misc**: Avatar, Divider, Skeleton

Build the design system page first — a single page that displays every
component in every variant on both light and dark surfaces. This is the
source of truth. Iterate the component library on this page before building
any production page.

---

## 13. Component Acceptance Criteria

Before marking any component complete, verify:

- [ ] All variants implemented and visually correct
- [ ] All sizes implemented
- [ ] Light surface and (where applicable) dark surface variants both work
- [ ] Default, hover, active, focus, disabled states all work
- [ ] Keyboard accessible (Tab, Enter, Space as appropriate)
- [ ] Screen reader announces correctly (aria-* attributes)
- [ ] Tested at 375px, 768px, 1024px, 1440px viewports
- [ ] Respects `prefers-reduced-motion`
- [ ] No hardcoded colors (all from tokens)
- [ ] No hardcoded font sizes (all from type scale)
- [ ] No hardcoded spacing (all multiples of 4)
- [ ] Component is documented on the design system page
- [ ] Storybook story written (if Storybook is set up)

---

End of component library.

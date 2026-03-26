# Performance & Accessibility Standards

Standards for maintaining high Lighthouse scores (90+) and production-quality code. Based on optimizations applied to the Dacoda project.

---

## 1. Server Components First

Every component is a **Server Component by default**. Only add `'use client'` when the component genuinely needs browser APIs.

**Needs `'use client'`:**

- `useState`, `useReducer`, `useContext`
- `useEffect`, `useLayoutEffect`
- Event handlers: `onClick`, `onChange`, `onSubmit`
- Browser APIs: `window`, `document`, `localStorage`
- Libraries that require browser: Framer Motion, etc.

**Does NOT need `'use client'`:**

- Static text, headings, paragraphs
- Images (`next/image` works in Server Components)
- Links (`next/link`)
- CSS animations
- Data fetching (use `async` Server Components instead)

**Rule:** If a page has a static hero/header + an interactive form, split them. The static part stays in the Server Component (`page.tsx`), and only the interactive part gets `'use client'`.

```tsx
// page.tsx — Server Component
export default function Page() {
  return (
    <>
      <section>
        <h1>Static title</h1>        {/* instant HTML */}
        <p>Static description</p>     {/* instant HTML */}
      </section>
      <InteractiveForm />             {/* only this is Client */}
    </>
  );
}
```

---

## 2. CSS Animations Over JavaScript

For simple animations (fade, slide, scale), always use CSS instead of JavaScript libraries.

**Do NOT use Framer Motion / motion for:**

- Fade in/out
- Slide up/down
- Simple hover effects
- Scroll-triggered opacity changes

**CSS alternative pattern:**

```css
@keyframes fade-up {
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
}

.fade-up {
  animation: fade-up 0.35s ease-out both;
}
```

```tsx
<h1 className="fade-up" style={{ animationDelay: '130ms' }}>
```

**When Framer Motion IS appropriate:**

- Drag interactions
- Layout animations (`layoutId`)
- Shared element transitions
- Complex spring physics
- `AnimatePresence` (exit animations)

---

## 3. Dynamic Imports for Below-the-Fold Content

Any component that is **not visible on initial page load** (user must scroll to see it) should be dynamically imported.

```tsx
import dynamic from 'next/dynamic';

// Components visible immediately — static import
import Hero from '@/components/sections/hero';
import TrustBar from '@/components/sections/trust-bar';

// Components below the fold — dynamic import
const Stats = dynamic(() => import('@/components/sections/stats'));
const Testimonials = dynamic(() => import('@/components/sections/testimonials'));
const Cta = dynamic(() => import('@/components/sections/cta'));
```

**Also dynamically import heavy components:**

- Interactive maps (SVG, Leaflet, Google Maps)
- Chart libraries
- Rich text editors
- Any component importing a large dependency

---

## 4. Image Optimization

### Next.js Config

Always include modern formats and appropriate quality tiers in `next.config.ts`:

```ts
images: {
  formats: ['image/avif', 'image/webp'],
  qualities: [40, 65, 75],
}
```

### Quality by Context

| Context | Quality | Why |
|---|---|---|
| Decorative backgrounds with low opacity | `quality={40}` | Invisible at full quality anyway |
| Supporting images (sections, cards) | `quality={65}` | Good balance of size vs clarity |
| Product photos, detailed images | `quality={75-85}` | Users inspect these closely |
| Hero images at full opacity | `quality={75}` | Default is fine |

### Always Include `sizes`

```tsx
// Full-width background
<Image sizes="100vw" ... />

// Half-width on desktop, full on mobile
<Image sizes="(max-width: 1024px) 100vw, 50vw" ... />
```

### Always Use `priority` on LCP Images

The hero background image or first visible image should have `priority`:

```tsx
<Image priority sizes="100vw" ... />
```

---

## 5. Browserslist

Maintain a `browserslist` in `package.json` to prevent unnecessary polyfills:

```json
"browserslist": [
  "chrome >= 87",
  "firefox >= 78",
  "safari >= 14",
  "edge >= 88"
]
```

Update these values periodically based on your actual audience (check analytics).

---

## 6. Accessibility (a11y)

### Form Labels

Every input must be associated with a label. Two approaches:

```tsx
{/* Approach 1: htmlFor + id */}
<Label htmlFor="email">Email *</Label>
<Input id="email" ... />

{/* Approach 2: visually hidden label (when no visible label exists) */}
<label htmlFor="search" className="sr-only">Search</label>
<Input id="search" ... />
```

### Select / Dropdown Elements

Native `<select>` and custom `<SelectTrigger>` must have `aria-label`:

```tsx
<select aria-label="Tip transport" ...>
<SelectTrigger aria-label="Țară origine" ...>
```

### Heading Hierarchy

Headings must follow a logical order without skipping levels:

```
h1 → h2 → h3 → h4    (correct)
h1 → h3               (wrong — skips h2)
h1 → h4 → h2          (wrong — out of order)
```

Only one `<h1>` per page.

### Color Contrast

Text must meet WCAG AA minimum contrast ratios:

- Normal text: **4.5:1** contrast ratio
- Large text (18px+ or 14px+ bold): **3:1** contrast ratio

**Practical rules for dark backgrounds:**

- Use `text-white/70` minimum (not `/60` or `/50`) for readable body text
- Use `text-white/80` or higher for important text
- Use `text-gray-300` instead of `text-gray-400` on dark backgrounds

### Interactive Elements

Buttons with only icons must have `aria-label`:

```tsx
<button aria-label="Trimite mesaj">
  <Send className="h-4 w-4" />
</button>
```

---

## 7. LCP (Largest Contentful Paint) Checklist

Before shipping any page, verify:

- [ ] The largest visible element (usually hero heading or image) is in a **Server Component**
- [ ] Hero image has `priority` attribute
- [ ] No JavaScript library blocks the hero from rendering
- [ ] Hero animations use CSS, not JS
- [ ] Font loading does not block rendering (`next/font` handles this)

---

## 8. Bundle Size Awareness

Before adding a new dependency, check its size:

```bash
npx bundlephobia <package-name>
```

**Guidelines:**

- < 5KB: fine to import anywhere
- 5-20KB: consider if it's truly needed
- 20KB+: must be dynamically imported or justified
- 50KB+: almost never worth it — find a lighter alternative or use native APIs

---

## Quick Reference — What Lighthouse Measures

| Category | Key Metrics | How We Address It |
|---|---|---|
| **Performance** | LCP, TBT, CLS, Speed Index | Server Components, dynamic imports, image optimization |
| **Accessibility** | Labels, contrast, headings, ARIA | Form labels, aria-labels, heading hierarchy, contrast ratios |
| **Best Practices** | HTTPS, no console errors, image aspect ratios | Proper `next/image` usage, clean console |
| **SEO** | Meta tags, crawlability, structured data | `metadata` exports, semantic HTML |

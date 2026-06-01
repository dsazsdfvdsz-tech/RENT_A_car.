# Landing components

Cleaned, car-rental-ready version of the imported hero template. Split into
focused, reusable pieces and rebranded from the original AI-platform demo.

## Files

| File             | Purpose                                                        |
| ---------------- | -------------------------------------------------------------- |
| `Hero.tsx`       | Full hero section (navbar + plasma background + copy + stats). |
| `Navbar.tsx`     | Glassmorphic floating navbar.                                  |
| `Logo.tsx`       | Brand logo mark (placeholder car icon — swap for the real one).|
| `Plasma.tsx`     | Animated WebGL plasma background.                              |
| `site.config.ts` | **Single source of truth** for brand name, nav links and copy.|
| `index.ts`       | Barrel exports.                                                |

## Usage

```tsx
import { Hero } from "@/components/landing";

export default function Page() {
  return <Hero />;
}
```

## Requirements

- **Dependency:** `ogl` — install with `npm install ogl`.
- **Tailwind CSS** must be configured (the components use utility classes).
- **Next.js App Router:** `Plasma.tsx` and `Navbar.tsx` already include the
  `"use client"` directive (they use browser APIs / hooks). Harmless in Vite/CRA.

## Customizing

- Brand name, nav links, CTAs, hero copy and stats live in `site.config.ts`.
- Brand colors are Tailwind classes (`blue-600` / `cyan-500`) inline in the
  components, since Tailwind cannot purge dynamic class names. Search & replace
  there if you change the palette.

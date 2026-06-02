# Abubakr Chadhar Rent a Car

Production-ready marketing website for **Abubakr Chadhar Rent a Car** — Lahore's
trusted car rental since 2000. Built with Next.js 15 (App Router), Tailwind CSS 4
and Framer Motion. Dark-mode-first with a gold accent and WhatsApp-driven booking.

## Tech stack

- **Next.js 15** (App Router, `src/` dir, TypeScript)
- **Tailwind CSS 4** (CSS-first config in `src/styles/globals.css`)
- **Framer Motion** — scroll reveals, stagger, parallax, lightbox
- **React Hook Form + Zod** — validated contact form
- **lucide-react** — icons

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Project structure

```
src/
├── app/                 # routes: / , /fleet , /about , /terms , /privacy , sitemap, robots
├── components/
│   ├── layout/          # Navbar, MobileBottomNav, Footer, FloatingWhatsApp, BackToTop
│   ├── sections/        # Hero, TrustStrip, FleetShowcase, Services, Routes, Testimonials, Contact
│   ├── ui/              # VehicleCard, RouteCard, LightboxGallery, ContactForm, ThemeToggle, …
│   ├── animations/      # FadeInOnScroll, StaggerChildren, ParallaxBackground
│   └── providers/       # ThemeProvider (no-flash dark/light)
├── data/                # fleet, routes, services, testimonials, siteConfig (all business data)
├── lib/                 # utils (WhatsApp link builders), nav links
└── styles/globals.css   # design tokens + Tailwind theme mapping
```

## Editing content

All business data lives in `src/data/`. Update `siteConfig.ts` for contact
details, social links and policies; `fleet.ts`, `routes.ts`, `services.ts` and
`testimonials.ts` for the catalog.

## Theming

Design tokens are CSS variables in `globals.css`, switched via the
`[data-theme]` attribute on `<html>`. They're mapped to Tailwind utilities
(`bg-bg-card`, `text-gold`, `bg-whatsapp`, …) through `@theme inline`. Default
theme is **dark**; the choice persists in `localStorage`.

> Note: Tailwind 4 is configured CSS-first (via `@theme` in `globals.css`), so
> there is no `tailwind.config.ts` — this is the idiomatic v4 setup.

## Images

Pre-designed fleet and route images (badges, names, specs and prices are baked
into the artwork) live in `public/images/`. Cards intentionally render no text
over these images and add WhatsApp / details actions below them.

## Deployment

Deployable as-is to Vercel, Netlify or any Node host. Update the `siteUrl`
constant in `src/app/layout.tsx`, `sitemap.ts` and `robots.ts` to the final
production domain.

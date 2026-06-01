/**
 * Central brand / content config for the landing page.
 * Change copy, links and the brand name here — components read from this file
 * so you never have to hunt through JSX. (Tailwind color classes stay inline
 * in the components since Tailwind cannot purge fully dynamic class names.)
 */

export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}

export const siteConfig = {
  /** Brand name shown in the navbar — replace with your real brand. */
  brandName: "DriveEase",

  nav: {
    links: [
      { label: "Browse Cars", href: "#fleet" },
      { label: "Deals", href: "#deals" },
      { label: "Locations", href: "#locations" },
      { label: "How it Works", href: "#how-it-works" },
    ] as NavLink[],
    signIn: { label: "Sign in", href: "/login" },
    primaryCta: { label: "Book Now", href: "/booking" },
  },

  hero: {
    badge: "2026 Fleet Now Available",
    titleLead: "Rent the Perfect Car for",
    titleHighlight: "Every Journey",
    subtitle:
      "Browse hundreds of cars across the city, book in minutes, and drive away with transparent pricing, free cancellation, and 24/7 roadside support.",
    primaryCta: { label: "Browse Cars", href: "#fleet" },
    secondaryCta: { label: "How it Works", href: "#how-it-works" },
    stats: [
      { value: "500+", label: "Cars Available" },
      { value: "50+", label: "Pickup Locations" },
      { value: "24/7", label: "Roadside Support" },
      { value: "4.9★", label: "Customer Rating" },
    ] as Stat[],
  },
} as const;

export type SiteConfig = typeof siteConfig;

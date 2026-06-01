/** Primary navigation links. `/#id` works from any page (routes home, then scrolls). */
export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Fleet", href: "/#fleet" },
  { label: "Services", href: "/#services" },
  { label: "Routes", href: "/#routes" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
] as const;

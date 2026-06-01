"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Car, House, Menu, Phone, X } from "lucide-react";
import { navLinks } from "@/lib/nav";
import { telLink, whatsappLink, cn } from "@/lib/utils";
import { siteConfig } from "@/data/siteConfig";
import { WhatsAppIcon } from "@/components/ui/icons";

export function MobileBottomNav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isHome = pathname === "/";
  const isFleet = pathname.startsWith("/fleet");

  return (
    <>
      {/* Slide-up menu sheet */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[60] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              className="absolute inset-x-0 bottom-0 rounded-t-3xl border-t border-border bg-bg-card p-6 pb-[calc(1.5rem+env(safe-area-inset-bottom))] shadow-2xl"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
            >
              <div className="mb-4 flex items-center justify-between">
                <h2 className="font-heading text-lg font-semibold">Menu</h2>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setMenuOpen(false)}
                  className="grid h-10 w-10 place-items-center rounded-full bg-bg-secondary text-text-secondary"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="grid gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-xl px-4 py-3 text-base font-medium text-text-primary transition-colors hover:bg-gold-light hover:text-gold"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/fleet"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-medium text-text-primary transition-colors hover:bg-gold-light hover:text-gold"
                >
                  Full Fleet Details
                </Link>
              </nav>

              <div className="mt-4 grid grid-cols-2 gap-3 border-t border-border pt-4">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl bg-whatsapp px-4 py-3 font-semibold text-white"
                >
                  <WhatsAppIcon className="h-5 w-5" /> WhatsApp
                </a>
                <a
                  href={telLink}
                  className="flex items-center justify-center gap-2 rounded-xl border border-gold px-4 py-3 font-semibold text-gold"
                >
                  <Phone className="h-5 w-5" /> Call
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fixed bottom tab bar */}
      <nav
        aria-label="Primary"
        className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-bg-primary/95 backdrop-blur-xl pb-[env(safe-area-inset-bottom)] lg:hidden"
      >
        <div className="mx-auto grid max-w-md grid-cols-5 items-end gap-1 px-2 pt-1.5">
          <TabLink href="/" label="Home" active={isHome}>
            <House className="h-5 w-5" />
          </TabLink>
          <TabLink href="/#fleet" label="Fleet" active={isFleet}>
            <Car className="h-5 w-5" />
          </TabLink>

          {/* Center prominent WhatsApp button */}
          <div className="flex justify-center">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Chat on WhatsApp ${siteConfig.contact.whatsapp}`}
              className="-mt-6 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-white shadow-lg shadow-whatsapp/40 ring-4 ring-bg-primary transition-transform active:scale-95"
            >
              <WhatsAppIcon className="h-7 w-7" />
            </a>
          </div>

          <TabLink href={telLink} label="Call" external>
            <Phone className="h-5 w-5" />
          </TabLink>
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="flex min-h-[3rem] flex-col items-center justify-end gap-1 rounded-xl py-1.5 text-text-muted transition-colors hover:text-gold"
          >
            <Menu className="h-5 w-5" />
            <span className="text-[0.65rem] font-medium leading-none">Menu</span>
          </button>
        </div>
      </nav>
    </>
  );
}

function TabLink({
  href,
  label,
  active = false,
  external = false,
  children,
}: {
  href: string;
  label: string;
  active?: boolean;
  external?: boolean;
  children: React.ReactNode;
}) {
  const className = cn(
    "flex min-h-[3rem] flex-col items-center justify-end gap-1 rounded-xl py-1.5 transition-colors",
    active ? "text-gold" : "text-text-muted hover:text-gold",
  );
  const content = (
    <>
      {children}
      <span className="text-[0.65rem] font-medium leading-none">{label}</span>
    </>
  );

  if (external) {
    return (
      <a href={href} className={className} aria-label={label}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={className} aria-current={active ? "page" : undefined}>
      {content}
    </Link>
  );
}

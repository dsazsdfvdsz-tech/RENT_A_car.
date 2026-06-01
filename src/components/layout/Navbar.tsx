"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";
import { navLinks } from "@/lib/nav";
import { whatsappLink, cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { WhatsAppIcon } from "@/components/ui/icons";

export function Navbar() {
  const pathname = usePathname();
  const transparentOnTop = pathname === "/";
  const [scrolled, setScrolled] = useState(!transparentOnTop);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50 || !transparentOnTop);
  });

  const solid = scrolled;

  return (
    <motion.header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        solid
          ? "border-b border-border bg-bg-primary/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-[1320px] items-center justify-between gap-4 px-4 sm:px-6 lg:h-[4.5rem] lg:px-8">
        {/* Brand */}
        <Link
          href="/"
          className="flex shrink-0 items-center font-heading text-lg font-bold tracking-tight sm:text-xl"
        >
          <span className="text-gold">Abubakr</span>
          <span
            className={cn(
              "ml-1.5 transition-colors",
              solid ? "text-text-primary" : "text-white",
            )}
          >
            {/* Full name on desktop, shortened on small screens */}
            <span className="hidden sm:inline">Chadhar Rent a Car</span>
            <span className="sm:hidden">Rent a Car</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={cn(
                  "rounded-full px-3.5 py-2 text-sm font-medium transition-colors xl:px-4",
                  solid
                    ? "text-text-secondary hover:bg-gold-light hover:text-gold"
                    : "text-white/80 hover:bg-white/10 hover:text-white",
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle
            className={cn(
              !solid && "border-white/25 bg-white/10 text-white hover:text-white",
            )}
          />
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-whatsapp px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-whatsapp/20 transition-colors hover:bg-whatsapp-hover lg:inline-flex"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp Us
          </a>
        </div>
      </nav>
    </motion.header>
  );
}

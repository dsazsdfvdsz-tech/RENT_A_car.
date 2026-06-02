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
        {/* Brand — gold monogram + stacked wordmark */}
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <span className="brand-fill grid h-9 w-9 place-items-center rounded-xl font-heading text-lg font-extrabold text-black shadow-md sm:h-10 sm:w-10">
            A
          </span>
          <span className="flex flex-col leading-none">
            <span
              className={cn(
                "font-heading text-base font-bold tracking-tight transition-colors sm:text-lg",
                solid ? "text-text-primary" : "text-white",
              )}
            >
              Abubakr Chadhar
            </span>
            <span
              className={cn(
                "mt-0.5 text-[0.62rem] font-semibold uppercase tracking-[0.2em] transition-colors",
                solid ? "text-text-muted" : "text-white/70",
              )}
            >
              Rent a Car
            </span>
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
          <ThemeToggle />
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-whatsapp glass-sheen hidden items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold lg:inline-flex"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp Us
          </a>
        </div>
      </nav>
    </motion.header>
  );
}

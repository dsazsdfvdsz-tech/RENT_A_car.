"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Phone } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { telLink, whatsappLink, asset } from "@/lib/utils";
import { WhatsAppIcon } from "@/components/ui/icons";

export function HeroSection() {
  const reduce = useReducedMotion();
  const { offer } = siteConfig;

  const reveal = (delay: number) =>
    reduce
      ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0 } }
      : {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section
      id="home"
      className="relative flex min-h-dvh items-center overflow-hidden"
    >
      {/* Background image (LCP — eager + high priority) */}
      <Image
        src={asset("/images/hero/hero-bg.jpg")}
        alt="Luxury car available for rent in Lahore"
        fill
        priority
        sizes="100vw"
        className="scale-105 object-cover"
      />
      {/* Cinematic warm readability gradient — blends into the near-black page */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0908] via-[#0a0908]/74 to-[#0a0908]/30" />
      {/* Left vignette so left-aligned copy stays crisp on desktop */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0908]/88 via-[#0a0908]/40 to-transparent" />
      {/* Warm gold accent glow (top-right) for a premium feel */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-[32rem] w-[32rem] rounded-full bg-[#d4a853]/18 blur-3xl" />
      {/* Amber spark (bottom-left), very soft */}
      <div className="pointer-events-none absolute -bottom-24 left-1/4 h-[22rem] w-[22rem] rounded-full bg-[#e0a94e]/10 blur-3xl" />

      {/* Decorative line-art (right side) — echoes the reference, kept faint */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 hidden h-full w-1/2 text-gold/20 lg:block"
        viewBox="0 0 600 600"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <path d="M420 600 L300 0 M540 600 L360 0 M300 600 L240 0" stroke="currentColor" strokeWidth="1.2" />
        <path d="M180 130 L600 130 M150 250 L600 250 M210 370 L600 370 M250 490 L600 490" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 10" />
        <circle cx="360" cy="250" r="46" stroke="currentColor" strokeWidth="1" />
        <circle cx="360" cy="250" r="78" stroke="currentColor" strokeWidth="0.6" strokeDasharray="3 9" />
      </svg>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-4 pb-24 pt-28 sm:px-6 lg:px-8 lg:pb-20 lg:pt-32">
        <div className="max-w-2xl text-center lg:text-left">
          {offer.active && (
            <motion.div {...reveal(0.8)} className="mb-6 flex justify-center lg:justify-start">
              <span className="glass glass-sheen inline-flex items-center gap-2 rounded-full py-1.5 pl-2.5 pr-4 text-sm font-medium">
                <span className="h-2 w-2 rounded-full bg-gold shadow-[0_0_8px_var(--accent-gold)]" />
                <span className="font-semibold text-gold">{offer.text.split(" ").slice(0, 2).join(" ")}</span>
                <span className="text-text-secondary">{offer.text.split(" ").slice(2).join(" ")}</span>
              </span>
            </motion.div>
          )}

          <motion.h1 {...reveal(0.2)} className="leading-[1.05]">
            <span className="block text-white">Abubakr Chadhar</span>
            <span className="mt-1 block font-heading text-3xl font-semibold text-text-secondary sm:text-4xl lg:text-5xl">
              Rent a Car
            </span>
          </motion.h1>

          <motion.p
            {...reveal(0.4)}
            className="mt-4 font-heading text-xl font-semibold text-gold sm:text-2xl"
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.p
            {...reveal(0.5)}
            className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-300 lg:mx-0"
          >
            Lahore&apos;s most trusted car rental since {siteConfig.established} — self-drive
            from Rs 7,000/day, available {siteConfig.availability} whenever the road calls.
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...reveal(0.6)}
            className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row lg:justify-start"
          >
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-whatsapp glass-sheen inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 font-semibold"
            >
              <WhatsAppIcon className="h-5 w-5" />
              WhatsApp Us
            </a>
            <a
              href={telLink}
              className="glass glass-interactive inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 font-semibold text-white"
            >
              <Phone className="h-5 w-5" />
              Call Now
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

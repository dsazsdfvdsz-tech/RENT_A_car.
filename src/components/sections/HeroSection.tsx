"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Phone, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { quickQuoteLink, telLink, whatsappLink } from "@/lib/utils";
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
        src="/images/hero/hero-bg.jpg"
        alt="Luxury car available for rent in Lahore"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Readability gradient */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(10,10,15,0.95) 0%, rgba(10,10,15,0.45) 50%, rgba(10,10,15,0.2) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-4 pb-24 pt-28 sm:px-6 lg:px-8 lg:pb-20 lg:pt-32">
        <div className="max-w-2xl text-center lg:text-left">
          {offer.active && (
            <motion.div {...reveal(0.8)} className="mb-5 flex justify-center lg:justify-start">
              <span className="inline-flex items-center gap-2 rounded-full bg-gold px-4 py-1.5 text-sm font-semibold text-black">
                <Sparkles className="h-4 w-4" />
                {offer.text}
              </span>
            </motion.div>
          )}

          <motion.h1 {...reveal(0.2)} className="text-white">
            {siteConfig.businessName}
          </motion.h1>

          <motion.p
            {...reveal(0.4)}
            className="mt-3 font-heading text-xl font-semibold text-gold sm:text-2xl"
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.p
            {...reveal(0.5)}
            className="mx-auto mt-4 max-w-xl text-base text-slate-300 lg:mx-0"
          >
            Lahore&apos;s most trusted car rental since {siteConfig.established}. Self-drive
            from Rs 7,000/day. Available {siteConfig.availability}.
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
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-whatsapp px-7 py-3.5 font-semibold text-white shadow-lg shadow-whatsapp/25 transition-transform hover:-translate-y-0.5 hover:bg-whatsapp-hover"
            >
              <WhatsAppIcon className="h-5 w-5" />
              WhatsApp Us
            </a>
            <a
              href={telLink}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-gold px-7 py-3.5 font-semibold text-gold backdrop-blur-sm transition-colors hover:bg-gold hover:text-black"
            >
              <Phone className="h-5 w-5" />
              Call Now
            </a>
          </motion.div>
        </div>

        {/* Quick inquiry strip */}
        <motion.div {...reveal(0.9)} className="mt-10 lg:mt-14">
          <QuickInquiry />
        </motion.div>
      </div>
    </section>
  );
}

function QuickInquiry() {
  const [destination, setDestination] = useState("");
  const [when, setWhen] = useState("");

  return (
    <div className="mx-auto max-w-3xl rounded-2xl border border-white/15 bg-black/40 p-3 backdrop-blur-md lg:mx-0">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <label className="flex-1">
          <span className="sr-only">Where to?</span>
          <input
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="Where to? (e.g. Murree)"
            className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none transition-colors placeholder:text-slate-400 focus:border-gold"
          />
        </label>
        <label className="flex-1">
          <span className="sr-only">When?</span>
          <input
            value={when}
            onChange={(e) => setWhen(e.target.value)}
            placeholder="When? (e.g. 15 June)"
            className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none transition-colors placeholder:text-slate-400 focus:border-gold"
          />
        </label>
        <a
          href={quickQuoteLink(destination, when)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-gold px-6 py-3 font-semibold text-black transition-colors hover:bg-gold-hover"
        >
          Get Quote on WhatsApp
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import { Clock, ShieldCheck, UserCheck, Wallet } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { telLink, whatsappLink } from "@/lib/utils";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { FadeInOnScroll } from "@/components/animations/FadeInOnScroll";
import { ParallaxBackground } from "@/components/animations/ParallaxBackground";
import { WhatsAppIcon } from "@/components/ui/icons";
import { Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us — 26 Years of Trusted Service",
  description:
    "Founded by Amanullah in 2000 in Shahdara, Lahore, Abubakr Chadhar Rent a Car has served families, businesses and travelers for over 26 years with a trusted fleet across Pakistan.",
  alternates: { canonical: "/about" },
};

const stats = [
  { value: 26, suffix: "+", label: "Years of Service" },
  { value: 500, suffix: "+", label: "Happy Customers" },
  { value: 1000, suffix: "+", label: "Trips Completed" },
];

const usps = [
  {
    icon: ShieldCheck,
    title: "Well-Maintained Cars",
    description:
      "Every vehicle is regularly serviced, cleaned and inspected before each booking.",
  },
  {
    icon: UserCheck,
    title: "Experienced Drivers",
    description:
      "Professional drivers who know every route — from city streets to mountain passes.",
  },
  {
    icon: Wallet,
    title: "Affordable Rates",
    description:
      "Transparent pricing with no hidden charges. Self-drive from just Rs 7,000/day.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description:
      "Day or night, we're always available — including late-night airport pickups.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-bg-primary">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <ParallaxBackground className="absolute inset-0" strength={50}>
          <Image
            src="/images/hero/hero-bg.jpg"
            alt="Abubakr Chadhar Rent a Car premium fleet in Lahore"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </ParallaxBackground>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0908] via-[#0a0908]/82 to-[#0a0908]/60" />
        <div className="relative z-10 mx-auto max-w-[1320px] px-4 pb-16 pt-32 text-center sm:px-6 lg:px-8 lg:pb-20 lg:pt-40">
          <FadeInOnScroll className="mx-auto max-w-3xl">
            <p className="eyebrow mb-3">About Us</p>
            <h1 className="text-white">
              26 Years of Trusted Service Since 2000
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-slate-300">
              {siteConfig.tagline}
            </p>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FadeInOnScroll>
            <h2 className="text-text-primary">Our Story</h2>
            <p className="mt-4 text-lg leading-relaxed text-text-secondary">
              Founded by {siteConfig.ownerName} in {siteConfig.established} in
              Shahdara, Lahore, Abubakr Chadhar Rent a Car has been serving
              families, businesses, and travelers for over {siteConfig.yearsInBusiness}{" "}
              years. What started as a single-car operation has grown into a
              trusted fleet of 9+ premium vehicles covering all of Pakistan.
            </p>
          </FadeInOnScroll>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <FadeInOnScroll
                key={stat.label}
                className="rounded-2xl border border-border bg-bg-card p-5 text-center"
              >
                <span className="block font-heading text-3xl font-bold text-gold sm:text-4xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="mt-1 block text-xs text-text-secondary sm:text-sm">
                  {stat.label}
                </span>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* USPs */}
      <section className="bg-bg-secondary py-16 lg:py-24">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
          <FadeInOnScroll className="max-w-2xl">
            <p className="eyebrow mb-3">Why Choose Us</p>
            <h2 className="text-text-primary">The Abubakr Chadhar Promise</h2>
          </FadeInOnScroll>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {usps.map((usp, i) => {
              const Icon = usp.icon;
              return (
                <FadeInOnScroll
                  key={usp.title}
                  delay={i * 0.05}
                  className="rounded-2xl border border-border bg-bg-card p-6"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-gold-light text-gold">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-heading text-lg font-semibold text-text-primary">
                    {usp.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {usp.description}
                  </p>
                </FadeInOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <FadeInOnScroll>
            <h2 className="text-text-primary">Ready to Book Your Ride?</h2>
            <p className="mx-auto mt-3 max-w-xl text-text-secondary">
              Message us on WhatsApp or give us a call — we&apos;re available 24/7 to
              help plan your trip.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
                className="glass-gold glass-sheen inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 font-semibold"
              >
                <Phone className="h-5 w-5" />
                Call Now
              </a>
            </div>
          </FadeInOnScroll>
        </div>
      </section>
    </div>
  );
}

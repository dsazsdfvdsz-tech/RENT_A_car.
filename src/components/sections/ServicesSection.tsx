"use client";

import { services } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { FadeInOnScroll } from "@/components/animations/FadeInOnScroll";

const directions = ["up", "right", "left", "right", "left"] as const;

export function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-20 bg-bg-secondary py-16 lg:py-24">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Offer"
          title="Services for Every Journey"
          subtitle="City tours, intercity travel, airport runs, weddings, and corporate packages — tailored to your needs."
        />

        {/* Bento grid: 3 cards top, 2 wider cards bottom (desktop) */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {services.map((service, i) => (
            <FadeInOnScroll
              key={service.id}
              direction={directions[i]}
              delay={i * 0.05}
              className={i < 3 ? "lg:col-span-2" : "lg:col-span-3"}
            >
              <ServiceCard service={service} />
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

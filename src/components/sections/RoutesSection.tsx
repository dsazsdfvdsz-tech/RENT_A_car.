"use client";

import { routes } from "@/data/routes";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RouteCard } from "@/components/ui/RouteCard";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";

export function RoutesSection() {
  return (
    <section id="routes" className="scroll-mt-20 py-16 lg:py-24">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Popular Routes"
          title="Where Would You Like to Go?"
          subtitle="From a Lahore city tour to the mountains of Naran — book a driver or self-drive for any destination."
        />

        {/* Horizontal snap-scroll on mobile, grid on larger screens */}
        <StaggerChildren
          stagger={0.08}
          className="no-scrollbar -mx-4 mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-3"
        >
          {routes.map((route) => (
            <StaggerItem
              key={route.id}
              className="flex w-[85vw] shrink-0 snap-center sm:w-auto sm:shrink"
            >
              <RouteCard route={route} />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}

"use client";

import { siteConfig } from "@/data/siteConfig";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

type Stat = {
  value: number | null;
  display?: string;
  suffix?: string;
  label: string;
};

const stats: Stat[] = [
  { value: 26, suffix: "+", label: "Years of Service" },
  { value: 500, suffix: "+", label: "Happy Customers" },
  { value: 1000, suffix: "+", label: "Trips Completed" },
  { value: null, display: "24/7", label: "Always Available" },
];

export function TrustStrip() {
  return (
    <section className="border-y border-border bg-bg-secondary">
      <div className="mx-auto max-w-[1320px] px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
        <div className="no-scrollbar -mx-4 flex snap-x gap-4 overflow-x-auto px-4 sm:mx-0 sm:grid sm:grid-cols-4 sm:gap-6 sm:overflow-visible sm:px-0">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex min-w-[40%] shrink-0 snap-center flex-col items-center text-center sm:min-w-0"
            >
              <span className="font-heading text-3xl font-bold text-gold sm:text-4xl">
                {stat.value !== null ? (
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                ) : (
                  stat.display
                )}
              </span>
              <span className="mt-1 text-sm font-medium text-text-secondary">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-text-muted">
          <span className="font-medium text-text-secondary">We Accept:</span>{" "}
          {siteConfig.payment.methods
            .map((m) => m.replace(" (Faysal Bank)", ""))
            .join(" • ")}
        </p>
      </div>
    </section>
  );
}

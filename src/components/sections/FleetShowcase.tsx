"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { fleet, fleetCategories, type Vehicle, type VehicleCategory } from "@/data/fleet";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CategoryFilter } from "@/components/ui/CategoryFilter";
import { VehicleCard } from "@/components/ui/VehicleCard";
import { LightboxGallery } from "@/components/ui/LightboxGallery";

type CategoryId = VehicleCategory | "all";

export function FleetShowcase() {
  const [active, setActive] = useState<CategoryId>("all");
  const [selected, setSelected] = useState<Vehicle | null>(null);

  const visible = useMemo(
    () => (active === "all" ? fleet : fleet.filter((v) => v.category === active)),
    [active],
  );

  return (
    <section id="fleet" className="scroll-mt-20 py-16 lg:py-24">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Fleet"
          title="Choose Your Perfect Ride"
          subtitle="From fuel-efficient sedans to luxury SUVs and wedding cars — all well-maintained and ready for the road."
        />

        <div className="mt-8">
          <CategoryFilter
            categories={fleetCategories}
            active={active}
            onChange={setActive}
          />
        </div>

        <motion.div
          layout
          className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((vehicle) => (
              <VehicleCard
                key={vehicle.id}
                vehicle={vehicle}
                onOpen={setSelected}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <LightboxGallery vehicle={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

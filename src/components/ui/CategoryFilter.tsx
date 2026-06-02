"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { VehicleCategory } from "@/data/fleet";

type CategoryId = VehicleCategory | "all";

interface CategoryFilterProps {
  categories: { id: CategoryId; label: string }[];
  active: CategoryId;
  onChange: (id: CategoryId) => void;
}

export function CategoryFilter({
  categories,
  active,
  onChange,
}: CategoryFilterProps) {
  return (
    <div
      role="tablist"
      aria-label="Filter vehicles by category"
      className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0"
    >
      {categories.map((category) => {
        const isActive = category.id === active;
        return (
          <button
            key={category.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(category.id)}
            className={cn(
              "relative shrink-0 snap-start rounded-full px-5 py-2.5 text-sm font-medium transition-colors",
              isActive
                ? "text-gold"
                : "text-text-secondary hover:text-text-primary",
            )}
          >
            <span className="relative z-10">{category.label}</span>
            {isActive && (
              <motion.span
                layoutId="category-pill"
                className="glass-pill absolute inset-0 rounded-full"
                transition={{ type: "spring", stiffness: 300, damping: 30, mass: 0.6 }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}

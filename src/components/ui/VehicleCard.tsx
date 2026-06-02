"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Expand } from "lucide-react";
import type { Vehicle } from "@/data/fleet";
import { vehicleInquiryLink, asset } from "@/lib/utils";
import { WhatsAppIcon } from "@/components/ui/icons";

interface VehicleCardProps {
  vehicle: Vehicle;
  onOpen: (vehicle: Vehicle) => void;
  priority?: boolean;
}

/**
 * Wraps a pre-designed fleet image (badge/name/specs/price are baked in) and
 * adds an open-lightbox affordance plus WhatsApp + details actions below.
 */
export function VehicleCard({ vehicle, onOpen, priority = false }: VehicleCardProps) {
  const reduce = useReducedMotion();

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduce ? undefined : { y: -6 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-bg-card shadow-[var(--card-shadow)]"
    >
      {/* Pre-designed image — opens lightbox */}
      <button
        type="button"
        onClick={() => onOpen(vehicle)}
        aria-label={`View larger image and details for ${vehicle.name}`}
        className="relative block aspect-[4/3] w-full overflow-hidden bg-bg-secondary"
      >
        <Image
          src={asset(vehicle.image)}
          alt={`${vehicle.name} available for rent in Lahore`}
          width={800}
          height={600}
          priority={priority}
          loading={priority ? undefined : "lazy"}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
        {/* Hover affordance (kept top-right so it never covers baked-in text) */}
        <span className="pointer-events-none absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-black/45 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
          <Expand className="h-4 w-4" />
        </span>
      </button>

      {/* Actions below the image */}
      <div className="flex items-center gap-2 p-3">
        <a
          href={vehicleInquiryLink(vehicle.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="glass-whatsapp glass-sheen inline-flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold"
        >
          <WhatsAppIcon className="h-4 w-4" />
          Inquire
        </a>
        <Link
          href={`/fleet#${vehicle.id}`}
          className="glass-gold glass-sheen inline-flex items-center justify-center gap-1 rounded-xl px-4 py-2.5 text-sm font-semibold"
        >
          View Details
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.article>
  );
}

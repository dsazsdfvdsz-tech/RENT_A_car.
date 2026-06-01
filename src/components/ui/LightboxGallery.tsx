"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Users, Cog, Fuel, Snowflake, Calendar, X } from "lucide-react";
import { useEffect } from "react";
import type { Vehicle } from "@/data/fleet";
import { formatRate, vehicleInquiryLink } from "@/lib/utils";
import { WhatsAppIcon } from "@/components/ui/icons";

interface LightboxGalleryProps {
  vehicle: Vehicle | null;
  onClose: () => void;
}

export function LightboxGallery({ vehicle, onClose }: LightboxGalleryProps) {
  // Lock body scroll + close on Escape while open.
  useEffect(() => {
    if (!vehicle) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [vehicle, onClose]);

  return (
    <AnimatePresence>
      {vehicle && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label={`${vehicle.name} details`}
        >
          {/* Scrim */}
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
          />

          <motion.div
            className="relative z-10 max-h-[90vh] w-full max-w-3xl overflow-y-auto overscroll-contain rounded-2xl border border-white/10 bg-bg-card shadow-2xl"
            initial={{ scale: 0.92, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 10, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0, bottom: 0.6 }}
            onDragEnd={(_, info) => {
              if (info.offset.y > 140) onClose();
            }}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-3 top-3 z-20 grid h-10 w-10 place-items-center rounded-full bg-black/50 text-white backdrop-blur transition-colors hover:bg-black/70"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Mobile drag handle */}
            <div className="absolute left-1/2 top-2 z-20 h-1.5 w-12 -translate-x-1/2 rounded-full bg-white/40 sm:hidden" />

            <div className="relative aspect-[4/3] w-full bg-bg-secondary">
              <Image
                src={vehicle.image}
                alt={`${vehicle.name} available for rent in Lahore`}
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-5 sm:p-6">
              <h3 className="font-heading text-2xl font-bold text-text-primary">
                {vehicle.name}
              </h3>
              <p className="mt-1 text-sm text-text-secondary">{vehicle.description}</p>

              {/* Specs */}
              <dl className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                <Spec icon={<Calendar className="h-4 w-4" />} label="Model Year" value={String(vehicle.year)} />
                <Spec icon={<Users className="h-4 w-4" />} label="Seats" value={`${vehicle.seats} Seats`} />
                <Spec icon={<Cog className="h-4 w-4" />} label="Transmission" value={vehicle.transmission} />
                <Spec icon={<Fuel className="h-4 w-4" />} label="Fuel" value={vehicle.fuel} />
                <Spec icon={<Snowflake className="h-4 w-4" />} label="Air Conditioning" value={vehicle.ac ? "Yes" : "No"} />
                <Spec icon={<span className="text-xs font-bold">◑</span>} label="Colors" value={vehicle.colors.join(", ")} />
              </dl>

              {/* Pricing */}
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-border bg-bg-secondary px-4 py-3">
                  <p className="text-xs uppercase tracking-wide text-text-muted">Self-Drive</p>
                  <p className="price mt-0.5">
                    {vehicle.selfDriveRate ? `${formatRate(vehicle.selfDriveRate)}/day` : "Not available"}
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-bg-secondary px-4 py-3">
                  <p className="text-xs uppercase tracking-wide text-text-muted">With Driver</p>
                  <p className="mt-0.5 font-semibold text-text-primary">{vehicle.withDriverRate}</p>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-5 flex flex-col gap-2 sm:flex-row">
                <a
                  href={vehicleInquiryLink(vehicle.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-whatsapp px-5 py-3 font-semibold text-white transition-colors hover:bg-whatsapp-hover"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Inquire on WhatsApp
                </a>
                <Link
                  href={`/fleet#${vehicle.id}`}
                  onClick={onClose}
                  className="inline-flex items-center justify-center gap-1 rounded-xl border border-border px-5 py-3 font-semibold text-gold transition-colors hover:border-gold hover:bg-gold-light"
                >
                  Full Details
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Spec({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-bg-secondary px-3 py-2.5">
      <dt className="flex items-center gap-1.5 text-xs text-text-muted">
        <span className="text-gold">{icon}</span>
        {label}
      </dt>
      <dd className="mt-0.5 text-sm font-semibold text-text-primary">{value}</dd>
    </div>
  );
}

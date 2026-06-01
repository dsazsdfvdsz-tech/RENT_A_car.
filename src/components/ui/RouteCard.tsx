"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Route } from "@/data/routes";
import { routeQuoteLink } from "@/lib/utils";
import { WhatsAppIcon } from "@/components/ui/icons";

interface RouteCardProps {
  route: Route;
  priority?: boolean;
}

/**
 * Wraps a pre-designed route image (destination/time/price baked in) and adds
 * a WhatsApp quote CTA below it.
 */
export function RouteCard({ route, priority = false }: RouteCardProps) {
  const quoteLink = routeQuoteLink(`${route.from} to ${route.destination}`);

  return (
    <article className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-border bg-bg-card shadow-[var(--card-shadow)] transition-transform duration-300 hover:-translate-y-1.5">
      <a
        href={quoteLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Get a WhatsApp quote for car rental from ${route.from} to ${route.destination}`}
        className="relative block aspect-[3/2] w-full overflow-hidden bg-bg-secondary"
      >
        <Image
          src={route.image}
          alt={`Car rental from Lahore to ${route.destination}`}
          width={1200}
          height={800}
          priority={priority}
          loading={priority ? undefined : "lazy"}
          sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 33vw"
          className="h-full w-full object-cover brightness-100 transition-[transform,filter] duration-500 ease-out group-hover:scale-[1.03] group-hover:brightness-110"
        />
      </a>

      <a
        href={quoteLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 border-t border-border px-4 py-3.5 text-sm font-semibold text-whatsapp transition-colors hover:bg-whatsapp hover:text-white"
      >
        <WhatsAppIcon className="h-4 w-4" />
        Get Quote on WhatsApp
        <ArrowRight className="h-4 w-4" />
      </a>
    </article>
  );
}

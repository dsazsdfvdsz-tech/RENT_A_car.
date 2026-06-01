"use client";

import { Check } from "lucide-react";
import type { Service } from "@/data/services";
import { whatsappLink } from "@/lib/utils";
import { WhatsAppIcon } from "@/components/ui/icons";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  const inquireLink = whatsappLink(
    `Hi, I'm interested in your ${service.title} service. Please share details and pricing.`,
  );

  return (
    <div className="group flex h-full flex-col rounded-2xl border border-border bg-bg-card p-6 shadow-[var(--card-shadow)] transition-colors duration-300 hover:border-gold">
      <div className="flex items-center gap-3">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gold-light text-gold transition-colors group-hover:bg-gold group-hover:text-black">
          <Icon className="h-6 w-6" />
        </span>
        <h3 className="font-heading text-lg font-semibold text-text-primary">
          {service.title}
        </h3>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-text-secondary">
        {service.description}
      </p>

      <ul className="mt-4 space-y-2">
        {service.highlights.map((highlight) => (
          <li key={highlight} className="flex items-start gap-2 text-sm text-text-secondary">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
            {highlight}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex items-center justify-between gap-3 border-t border-border pt-4">
        <div>
          <p className="text-xs uppercase tracking-wide text-text-muted">Starting</p>
          <p className="price">{service.startingPrice}</p>
        </div>
        <a
          href={inquireLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-whatsapp px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-whatsapp-hover"
        >
          <WhatsAppIcon className="h-4 w-4" />
          Inquire
        </a>
      </div>
    </div>
  );
}

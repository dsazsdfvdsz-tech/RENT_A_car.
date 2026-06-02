import type { Metadata } from "next";
import Image from "next/image";
import { Calendar, Cog, Fuel, Phone, Snowflake, Users } from "lucide-react";
import { fleet } from "@/data/fleet";
import { formatRate, telLink, vehicleInquiryLink } from "@/lib/utils";
import { FadeInOnScroll } from "@/components/animations/FadeInOnScroll";
import { WhatsAppIcon } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Our Fleet — Cars for Rent in Lahore",
  description:
    "Browse the full Abubakr Chadhar Rent a Car fleet: Toyota, Honda, Audi, Mercedes, Land Cruiser and more. Self-drive & with-driver rates. Book on WhatsApp.",
  alternates: { canonical: "/fleet" },
};

const categoryLabels: Record<string, string> = {
  economy: "Economy",
  premium: "Premium",
  luxury: "Luxury",
  wedding: "Wedding",
};

export default function FleetPage() {
  return (
    <div className="bg-bg-primary">
      {/* Page header */}
      <header className="border-b border-border bg-bg-secondary px-4 pb-12 pt-28 sm:px-6 lg:px-8 lg:pt-36">
        <div className="mx-auto max-w-[1320px]">
          <p className="eyebrow mb-3">Our Fleet</p>
          <h1 className="text-text-primary">The Complete Fleet</h1>
          <p className="mt-4 max-w-2xl text-text-secondary">
            Every vehicle is well-maintained, fully air-conditioned, and ready for
            self-drive or with-driver rental across Pakistan. Tap WhatsApp on any car
            to check live availability.
          </p>
        </div>
      </header>

      {/* Vehicle list */}
      <div className="mx-auto max-w-[1320px] space-y-12 px-4 py-14 sm:px-6 lg:space-y-16 lg:px-8 lg:py-20">
        {fleet.map((vehicle, i) => (
          <FadeInOnScroll
            key={vehicle.id}
            id={vehicle.id}
            className="scroll-mt-24"
          >
            <article className="grid items-center gap-8 rounded-2xl border border-border bg-bg-card p-5 shadow-[var(--card-shadow)] lg:grid-cols-2 lg:p-8">
              <div className="overflow-hidden rounded-xl bg-bg-secondary">
                <Image
                  src={vehicle.image}
                  alt={`${vehicle.name} available for rent in Lahore`}
                  width={800}
                  height={600}
                  priority={i === 0}
                  loading={i === 0 ? undefined : "lazy"}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="h-full w-full object-cover"
                />
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-gold/40 bg-gold-light px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gold">
                    {categoryLabels[vehicle.category]}
                  </span>
                  <span className="text-sm text-text-muted">{vehicle.year} Model</span>
                </div>

                <h2 className="mt-3 text-text-primary">{vehicle.name}</h2>
                <p className="mt-2 text-text-secondary">{vehicle.description}</p>

                {/* Specs */}
                <dl className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  <Spec icon={<Users className="h-4 w-4" />} label="Seats" value={`${vehicle.seats}`} />
                  <Spec icon={<Cog className="h-4 w-4" />} label="Gearbox" value={vehicle.transmission} />
                  <Spec icon={<Fuel className="h-4 w-4" />} label="Fuel" value={vehicle.fuel} />
                  <Spec icon={<Snowflake className="h-4 w-4" />} label="AC" value={vehicle.ac ? "Yes" : "No"} />
                  <Spec icon={<Calendar className="h-4 w-4" />} label="Year" value={`${vehicle.year}`} />
                  <Spec icon={<span className="grid h-4 w-4 place-items-center text-[0.7rem]">●</span>} label="Colors" value={vehicle.colors.join(", ")} />
                </dl>

                {/* Pricing */}
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-border bg-bg-secondary px-4 py-3">
                    <p className="text-xs uppercase tracking-wide text-text-muted">
                      Self-Drive
                    </p>
                    <p className="price mt-0.5">
                      {vehicle.selfDriveRate
                        ? `${formatRate(vehicle.selfDriveRate)}/day`
                        : "Not available"}
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-bg-secondary px-4 py-3">
                    <p className="text-xs uppercase tracking-wide text-text-muted">
                      With Driver
                    </p>
                    <p className="mt-0.5 font-semibold text-text-primary">
                      {vehicle.withDriverRate}
                    </p>
                  </div>
                </div>

                {/* CTAs */}
                <div className="mt-5 flex flex-col gap-2 sm:flex-row">
                  <a
                    href={vehicleInquiryLink(vehicle.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-whatsapp glass-sheen inline-flex flex-1 items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold"
                  >
                    <WhatsAppIcon className="h-5 w-5" />
                    Inquire on WhatsApp
                  </a>
                  <a
                    href={telLink}
                    className="glass-gold glass-sheen inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold"
                  >
                    <Phone className="h-5 w-5" />
                    Call
                  </a>
                </div>
              </div>
            </article>
          </FadeInOnScroll>
        ))}
      </div>
    </div>
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

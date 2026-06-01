import { Clock, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { telLink, whatsappLink } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/ui/ContactForm";
import { FadeInOnScroll } from "@/components/animations/FadeInOnScroll";
import { WhatsAppIcon } from "@/components/ui/icons";

export function ContactSection() {
  const { contact } = siteConfig;

  return (
    <section id="contact" className="scroll-mt-20 py-16 lg:py-24">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get in Touch"
          title="Book Your Ride Today"
          subtitle="Send us your trip details and we'll confirm availability and pricing on WhatsApp within minutes."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Form */}
          <FadeInOnScroll
            direction="right"
            className="rounded-2xl border border-border bg-bg-card p-6 shadow-[var(--card-shadow)] sm:p-8"
          >
            <h3 className="mb-6 font-heading text-xl font-semibold">
              Send an Inquiry
            </h3>
            <ContactForm />
          </FadeInOnScroll>

          {/* Info */}
          <FadeInOnScroll direction="left" className="flex flex-col gap-4">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-whatsapp px-5 py-4 font-semibold text-white transition-colors hover:bg-whatsapp-hover"
              >
                <WhatsAppIcon className="h-5 w-5" />
                WhatsApp Us
              </a>
              <a
                href={telLink}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-gold px-5 py-4 font-semibold text-gold transition-colors hover:bg-gold hover:text-black"
              >
                <Phone className="h-5 w-5" />
                Call Now
              </a>
            </div>

            <div className="rounded-2xl border border-border bg-bg-card p-5">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <div>
                  <p className="font-medium text-text-primary">Our Office</p>
                  <p className="mt-0.5 text-sm text-text-secondary">
                    {contact.address}
                  </p>
                  <p className="mt-1 text-sm text-text-muted">
                    Landmark: {contact.landmark}
                  </p>
                  <a
                    href={contact.googleMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm font-semibold text-gold underline"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 rounded-xl bg-gold-light px-4 py-2.5 text-sm font-medium text-gold">
                <Clock className="h-4 w-4" />
                {contact.workingHours}
              </div>
            </div>

            {/* Map embed */}
            <div className="overflow-hidden rounded-2xl border border-border">
              <iframe
                src={contact.googleMapsEmbed}
                title="Abubakr Chadhar Rent a Car location on Google Maps"
                width="100%"
                height="260"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full"
                style={{ border: 0 }}
              />
            </div>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  );
}

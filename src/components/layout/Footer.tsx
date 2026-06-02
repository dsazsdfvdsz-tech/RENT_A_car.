import Link from "next/link";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { services } from "@/data/services";
import { navLinks } from "@/lib/nav";
import { telLink } from "@/lib/utils";
import {
  FacebookIcon,
  GoogleIcon,
  TikTokIcon,
} from "@/components/ui/icons";

export function Footer() {
  const { contact, social, payment, businessName, tagline } = siteConfig;

  const socials = [
    social.facebook && {
      label: "Facebook",
      href: social.facebook,
      Icon: FacebookIcon,
    },
    social.tiktok && { label: "TikTok", href: social.tiktok, Icon: TikTokIcon },
    social.googleBusiness && {
      label: "Google Business",
      href: social.googleBusiness,
      Icon: GoogleIcon,
    },
  ].filter(Boolean) as { label: string; href: string; Icon: typeof FacebookIcon }[];

  return (
    <footer className="border-t border-white/10 bg-[#08080c] pb-[4.5rem] text-slate-300 lg:pb-0">
      <div className="mx-auto max-w-[1320px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="font-heading text-xl font-bold">
              <span className="text-gold">Abubakr</span>
              <span className="text-white"> Chadhar Rent a Car</span>
            </h2>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-400">
              {tagline}. Lahore&apos;s trusted car rental since {siteConfig.established}.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="glass glass-interactive grid h-10 w-10 place-items-center rounded-full text-slate-300 hover:text-gold"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer">
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/fleet"
                  className="text-slate-400 transition-colors hover:text-gold"
                >
                  Full Fleet
                </Link>
              </li>
            </ul>
          </nav>

          {/* Services */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href="/#services"
                    className="text-slate-400 transition-colors hover:text-gold"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <span className="text-slate-400">{contact.address}</span>
              </li>
              <li>
                <a
                  href={telLink}
                  className="flex items-center gap-3 text-slate-400 transition-colors hover:text-gold"
                >
                  <Phone className="h-5 w-5 shrink-0 text-gold" />
                  {contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-3 break-all text-slate-400 transition-colors hover:text-gold"
                >
                  <Mail className="h-5 w-5 shrink-0 text-gold" />
                  {contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 shrink-0 text-gold" />
                <span className="text-slate-400">{contact.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment methods */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-center text-sm text-slate-400">
          <span className="font-medium text-slate-300">We Accept:</span>{" "}
          {payment.methods.join(" • ")}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1320px] flex-col items-center justify-between gap-3 px-4 py-6 text-center text-xs text-slate-500 sm:flex-row sm:text-left sm:px-6 lg:px-8">
          <p>
            © {siteConfig.established}–2026 {businessName}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="transition-colors hover:text-gold">
              Terms &amp; Conditions
            </Link>
            <Link href="/privacy" className="transition-colors hover:text-gold">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

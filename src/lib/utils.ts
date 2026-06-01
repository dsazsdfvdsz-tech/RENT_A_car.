import { siteConfig } from "@/data/siteConfig";

/**
 * Lightweight className combiner (truthy strings only) — avoids extra deps.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/** Digits-only WhatsApp/phone number, e.g. "923101404545". */
export const whatsappNumber = siteConfig.contact.whatsapp.replace(/\D/g, "");

/**
 * Build a wa.me link. Pass a message to pre-fill the chat, or omit for a blank chat.
 */
export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** tel: link for the business phone. */
export const telLink = `tel:${siteConfig.contact.phone.replace(/[^\d+]/g, "")}`;

/** Pre-filled WhatsApp link for a specific vehicle inquiry. */
export function vehicleInquiryLink(vehicleName: string): string {
  return whatsappLink(
    `Hi, I'm interested in the ${vehicleName}. Please share availability and pricing.`,
  );
}

/** Pre-filled WhatsApp link for a route/quote inquiry. */
export function routeQuoteLink(destination: string): string {
  return whatsappLink(
    `Hi, I'm interested in renting a car for ${destination}. Please share availability and pricing.`,
  );
}

/** Pre-filled WhatsApp link for the hero quick-inquiry strip. */
export function quickQuoteLink(destination: string, when: string): string {
  const where = destination.trim() || "[destination]";
  const date = when.trim() || "[date]";
  return whatsappLink(
    `Hi, I'm interested in renting a car to ${where} on ${date}. Please share availability and pricing.`,
  );
}

/** Pre-filled WhatsApp link from the contact form fields. */
export function contactFormLink(data: {
  name: string;
  phone: string;
  trip: string;
  date: string;
}): string {
  const message = [
    "New Inquiry",
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    `Trip: ${data.trip}`,
    `Date: ${data.date}`,
  ].join("\n");
  return whatsappLink(message);
}

/** mailto: backup link for the contact form. */
export function contactFormMailto(data: {
  name: string;
  phone: string;
  trip: string;
  date: string;
}): string {
  const subject = `New Rental Inquiry from ${data.name}`;
  const body = [
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    `Trip Details: ${data.trip}`,
    `Preferred Date: ${data.date}`,
  ].join("\n");
  return `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
}

/** Format a numeric PKR rate, e.g. 7000 -> "Rs 7,000". */
export function formatRate(rate: number): string {
  return `Rs ${rate.toLocaleString("en-PK")}`;
}

import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import { LegalPage } from "@/components/ui/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Abubakr Chadhar Rent a Car collects, uses and protects your information.",
  alternates: { canonical: "/privacy" },
};

const sections = [
  {
    heading: "Information We Collect",
    body: [
      "When you submit an inquiry, we collect your name and phone number, and any trip details you choose to share.",
      "We do not collect payment card information on this website — payment details are arranged directly via WhatsApp after booking.",
    ],
  },
  {
    heading: "How We Use Your Information",
    body: [
      "Your information is used solely to respond to your rental inquiry, confirm availability, and coordinate your booking.",
      "We may contact you on the phone number you provide via call or WhatsApp regarding your inquiry.",
    ],
  },
  {
    heading: "WhatsApp Communication",
    body: [
      "By submitting an inquiry or messaging us, you consent to being contacted on WhatsApp regarding your booking.",
      "WhatsApp messages are governed by WhatsApp's own privacy policy.",
    ],
  },
  {
    heading: "Data Sharing",
    body: [
      "We do not sell or share your personal information with third parties.",
      "Your details are kept confidential and used only for your booking.",
    ],
  },
  {
    heading: "Data Retention & Your Rights",
    body: [
      "You may request that we delete your information at any time by contacting us.",
      `To request deletion, email ${siteConfig.contact.email} or message us on WhatsApp at ${siteConfig.contact.whatsapp}.`,
    ],
  },
  {
    heading: "Contact Us",
    body: [
      `For any privacy questions, contact ${siteConfig.businessName} at ${siteConfig.contact.email}.`,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="Your privacy matters to us. This policy explains what information we collect and how we use it."
      sections={sections}
    />
  );
}

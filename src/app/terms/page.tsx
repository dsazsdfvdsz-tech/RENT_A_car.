import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import { LegalPage } from "@/components/ui/LegalPage";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Booking, cancellation, documents, damage, fuel and mileage policies for Abubakr Chadhar Rent a Car.",
  alternates: { canonical: "/terms" },
};

const sections = [
  {
    heading: "Booking & Cancellation",
    body: [
      "Free cancellation up to 24 hours before pickup.",
      `${siteConfig.policies.cancellation}`,
      `Minimum rental: ${siteConfig.policies.minimumRental}.`,
    ],
  },
  {
    heading: "Documents Required",
    body: [
      `For with-driver bookings: ${siteConfig.policies.documents}.`,
      `For self-drive: ${siteConfig.policies.selfDriveRequirements}.`,
      `Security deposit: ${siteConfig.policies.securityDeposit} (self-drive).`,
    ],
  },
  {
    heading: "Damage & Liability",
    body: [siteConfig.policies.damagePolicy + "."],
  },
  {
    heading: "Driver Meals & Accommodation",
    body: [siteConfig.policies.driverMeals + "."],
  },
  {
    heading: "Tolls & Parking",
    body: [siteConfig.policies.tollsParking + "."],
  },
  {
    heading: "Fuel Policy",
    body: [siteConfig.policies.fuelPolicy + "."],
  },
  {
    heading: "Mileage",
    body: [siteConfig.policies.mileageLimit + "."],
  },
  {
    heading: "Overtime",
    body: [
      `City tours: ${siteConfig.policies.cityTourOvertime}.`,
      `Driver overtime: ${siteConfig.policies.driverOvertime}.`,
    ],
  },
  {
    heading: "Pickup",
    body: [siteConfig.policies.pickup + "."],
  },
  {
    heading: "Payment",
    body: [
      `Accepted methods: ${siteConfig.payment.methods.join(", ")}.`,
      siteConfig.payment.note + ".",
    ],
  },
];

export default function TermsPage() {
  return <LegalPage title="Terms & Conditions" sections={sections} />;
}

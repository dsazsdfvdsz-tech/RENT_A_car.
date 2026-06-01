import type { LucideIcon } from "lucide-react";
import { MapPin, Route, Plane, Heart, Briefcase } from "lucide-react";

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  highlights: string[];
  startingPrice: string;
};

export const services: Service[] = [
  {
    id: "city-tours",
    title: "City Tours",
    description:
      "Explore Lahore's historic landmarks with an experienced driver. Full day tours covering Badshahi Mosque, Lahore Fort, Food Street, and Minar-e-Pakistan.",
    icon: MapPin,
    highlights: [
      "Driver + Fuel + AC included",
      "8 hours duration",
      "Pickup from your location",
    ],
    startingPrice: "Rs 15,000",
  },
  {
    id: "intercity",
    title: "Intercity Trips",
    description:
      "Travel anywhere in Pakistan. Islamabad, Murree, Naran, Swat — we cover all major routes with experienced drivers who know the roads.",
    icon: Route,
    highlights: [
      "All Pakistan coverage",
      "Experienced mountain drivers",
      "One-way & round-trip available",
    ],
    startingPrice: "Rs 25,000",
  },
  {
    id: "airport",
    title: "Airport Transfers",
    description:
      "Reliable 24/7 pickup and drop-off at Allama Iqbal International Airport. Your driver will be waiting when you land.",
    icon: Plane,
    highlights: [
      "24/7 availability",
      "Allama Iqbal Airport (LHE)",
      "On-time guarantee",
    ],
    startingPrice: "Rs 6,000",
  },
  {
    id: "wedding",
    title: "Wedding & Events",
    description:
      "Make your special day unforgettable with our luxury decorated cars. Mercedes, Land Cruiser, Prado, and Fortuner available for weddings.",
    icon: Heart,
    highlights: [
      "Decorated cars available",
      "Mercedes, Land Cruiser, Prado",
      "Driver + 6 hours included",
    ],
    startingPrice: "Custom packages",
  },
  {
    id: "corporate",
    title: "Corporate Monthly",
    description:
      "Dedicated vehicles for your business. Monthly packages for office commutes, client pickups, and executive transport.",
    icon: Briefcase,
    highlights: [
      "Monthly packages from Rs 150,000",
      "Dedicated vehicle",
      "Flexible terms",
    ],
    startingPrice: "Rs 150,000/month",
  },
];

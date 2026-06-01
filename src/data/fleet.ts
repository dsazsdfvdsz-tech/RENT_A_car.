export type VehicleCategory = "economy" | "premium" | "luxury" | "wedding";

export type Vehicle = {
  id: string;
  name: string;
  year: number;
  category: VehicleCategory;
  seats: number;
  transmission: "Automatic" | "Manual";
  fuel: string;
  ac: boolean;
  colors: string[];
  selfDriveRate: number | null;
  withDriverRate: string;
  image: string;
  description: string;
};

export const fleet: Vehicle[] = [
  {
    id: "toyota-yaris",
    name: "Toyota Yaris",
    year: 2023,
    category: "economy",
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    ac: true,
    colors: ["White", "Silver"],
    selfDriveRate: 7000,
    withDriverRate: "Contact for pricing",
    image: "/images/fleet/toyota-yaris.jpg",
    description:
      "Compact, fuel-efficient sedan perfect for city commutes and short trips.",
  },
  {
    id: "toyota-corolla",
    name: "Toyota Corolla",
    year: 2020,
    category: "economy",
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    ac: true,
    colors: ["White", "Silver"],
    selfDriveRate: 7000,
    withDriverRate: "Contact for pricing",
    image: "/images/fleet/toyota-corolla.jpg",
    description:
      "Pakistan's most trusted sedan. Reliable, comfortable, and fuel-efficient.",
  },
  {
    id: "honda-city",
    name: "Honda City",
    year: 2026,
    category: "economy",
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    ac: true,
    colors: ["White", "Black", "Silver"],
    selfDriveRate: 7000,
    withDriverRate: "Contact for pricing",
    image: "/images/fleet/honda-city.jpg",
    description:
      "Stylish and modern sedan with premium features at an affordable rate.",
  },
  {
    id: "honda-brv",
    name: "Honda BR-V",
    year: 2021,
    category: "economy",
    seats: 7,
    transmission: "Automatic",
    fuel: "Petrol",
    ac: true,
    colors: ["White", "Black"],
    selfDriveRate: 8000,
    withDriverRate: "Contact for pricing",
    image: "/images/fleet/honda-brv.jpg",
    description:
      "Spacious 7-seater for families. Perfect blend of SUV comfort and sedan efficiency.",
  },
  {
    id: "honda-civic",
    name: "Honda Civic",
    year: 2026,
    category: "premium",
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    ac: true,
    colors: ["Black", "White", "Silver"],
    selfDriveRate: 10000,
    withDriverRate: "Contact for pricing",
    image: "/images/fleet/honda-civic.jpg",
    description:
      "Premium sports sedan with cutting-edge design and powerful performance.",
  },
  {
    id: "toyota-fortuner",
    name: "Toyota Fortuner",
    year: 2023,
    category: "premium",
    seats: 7,
    transmission: "Automatic",
    fuel: "Petrol/Diesel",
    ac: true,
    colors: ["Black", "White"],
    selfDriveRate: 18000,
    withDriverRate: "Contact for pricing",
    image: "/images/fleet/toyota-fortuner.jpg",
    description:
      "Commanding SUV built for both city roads and mountain adventures.",
  },
  {
    id: "toyota-prado",
    name: "Toyota Prado TX",
    year: 2024,
    category: "premium",
    seats: 7,
    transmission: "Automatic",
    fuel: "Petrol/Diesel",
    ac: true,
    colors: ["White", "Black"],
    selfDriveRate: 20000,
    withDriverRate: "Contact for pricing",
    image: "/images/fleet/toyota-prado.jpg",
    description:
      "Legendary off-roader with premium luxury. Dominates highways and mountain passes.",
  },
  {
    id: "toyota-landcruiser",
    name: "Land Cruiser V8",
    year: 2020,
    category: "luxury",
    seats: 7,
    transmission: "Automatic",
    fuel: "Petrol/Diesel",
    ac: true,
    colors: ["White", "Black"],
    selfDriveRate: 35000,
    withDriverRate: "Contact for pricing",
    image: "/images/fleet/toyota-landcruiser.jpg",
    description:
      "The ultimate luxury SUV. Unmatched power, comfort, and prestige for VIP travel.",
  },
  {
    id: "audi-a6",
    name: "Audi A6",
    year: 2021,
    category: "luxury",
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol/Diesel",
    ac: true,
    colors: ["White", "Black"],
    selfDriveRate: 40000,
    withDriverRate: "Contact for pricing",
    image: "/images/fleet/audi-a6.jpg",
    description:
      "German engineering at its finest. The pinnacle of luxury sedan experience.",
  },
  {
    id: "mercedes-eclass",
    name: "Mercedes E-Class",
    year: 2020,
    category: "wedding",
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    ac: true,
    colors: ["White", "Black"],
    selfDriveRate: null,
    withDriverRate: "Custom wedding packages",
    image: "/images/fleet/mercedes-eclass.jpg",
    description:
      "Elegance personified. The ultimate wedding car with decoration available.",
  },
  {
    id: "toyota-revo",
    name: "Toyota Revo 4×4",
    year: 2020,
    category: "wedding",
    seats: 5,
    transmission: "Automatic",
    fuel: "Diesel",
    ac: true,
    colors: ["White", "Black"],
    selfDriveRate: null,
    withDriverRate: "Custom event packages",
    image: "/images/fleet/toyota-revo.jpg",
    description:
      "Powerful pickup truck for wedding escorts and special occasion convoys.",
  },
];

export const fleetCategories: { id: VehicleCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "economy", label: "Economy" },
  { id: "premium", label: "Premium" },
  { id: "luxury", label: "Luxury" },
  { id: "wedding", label: "Wedding" },
];

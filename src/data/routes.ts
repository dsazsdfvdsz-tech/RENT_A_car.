export type Route = {
  id: string;
  destination: string;
  from: string;
  estimatedTime: string;
  withDriverPrice: string;
  selfDrivePrice: string;
  image: string;
  description: string;
  baseCar: string;
};

export const routes: Route[] = [
  {
    id: "lahore-city",
    destination: "Lahore City Tour",
    from: "Lahore",
    estimatedTime: "Full Day • 12 Hours",
    withDriverPrice: "Rs 15,000",
    selfDrivePrice: "Rs 8,000",
    image: "/images/routes/lahore-city.jpg",
    description:
      "Explore Badshahi Mosque, Lahore Fort, Food Street, and Minar-e-Pakistan.",
    baseCar: "Toyota Yaris/Corolla",
  },
  {
    id: "airport",
    destination: "Airport Transfer",
    from: "Lahore",
    estimatedTime: "Allama Iqbal Airport (LHE)",
    withDriverPrice: "Rs 6,000",
    selfDrivePrice: "Rs 7,000",
    image: "/images/routes/lahore-airport.jpg",
    description: "Reliable airport pickup and drop-off. Available 24/7.",
    baseCar: "Toyota Yaris/Corolla",
  },
  {
    id: "islamabad",
    destination: "Islamabad",
    from: "Lahore",
    estimatedTime: "~4 Hours Drive",
    withDriverPrice: "Rs 25,000",
    selfDrivePrice: "Rs 12,000",
    image: "/images/routes/islamabad.jpg",
    description: "Capital city trip. One-way Rs 25,000, Round-trip Rs 35,000.",
    baseCar: "Toyota Yaris/Corolla",
  },
  {
    id: "murree",
    destination: "Murree",
    from: "Lahore",
    estimatedTime: "~5 Hours Drive",
    withDriverPrice: "Rs 35,000",
    selfDrivePrice: "Rs 15,000",
    image: "/images/routes/murree.jpg",
    description: "Hill station escape. One-way Rs 35,000, Round-trip Rs 45,000.",
    baseCar: "Toyota Yaris/Corolla",
  },
  {
    id: "naran-kaghan",
    destination: "Naran & Kaghan",
    from: "Lahore",
    estimatedTime: "~8 Hours Drive",
    withDriverPrice: "Rs 60,000",
    selfDrivePrice: "Rs 15,000",
    image: "/images/routes/naran-kaghan.jpg",
    description:
      "Experience Saif ul Malook Lake and the stunning Kaghan Valley.",
    baseCar: "Toyota Yaris/Corolla",
  },
  {
    id: "swat",
    destination: "Swat Valley",
    from: "Lahore",
    estimatedTime: "~9 Hours Drive",
    withDriverPrice: "Rs 30,000+ (3-day min, Rs 10,000/day)",
    selfDrivePrice: "Rs 15,000",
    image: "/images/routes/swat.jpg",
    description: "The Switzerland of Pakistan. Multi-day adventure through paradise.",
    baseCar: "Toyota Yaris/Corolla",
  },
];

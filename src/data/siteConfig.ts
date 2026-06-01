export const siteConfig = {
  businessName: "Abubakr Chadhar Rent a Car",
  tagline: "Your Trusted Ride Across Pakistan",
  established: 2000,
  yearsInBusiness: 26,
  totalCustomers: "500+",
  totalTrips: "1,000+",
  availability: "24/7",
  ownerName: "Amanullah",

  contact: {
    whatsapp: "+923101404545",
    phone: "+923101404545",
    email: "abubakrchadharamotors@gmail.com",
    address: "Near Ferozwala Kachari, Near PSO Pump, Shahdara Town, Lahore",
    landmark: "Shahdara Mor Near Euro Pump",
    googleMapsLink: "https://maps.app.goo.gl/Lrsfnjbex63pK5rd8",
    googleMapsEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3398.5!2d74.3!3d31.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDM2JzAwLjAiTiA3NMKwMTgnMDAuMCJF!5e0!3m2!1sen!2s!4v1",
    workingHours: "24/7 — Always Available",
  },

  social: {
    facebook: "https://www.facebook.com/share/1EFUJgJ4nB/",
    tiktok: "https://www.tiktok.com/@abubakr01140",
    googleBusiness: "https://maps.app.goo.gl/RnfocrB2EX3NBgkv8",
    instagram: null as string | null,
  },

  payment: {
    methods: ["Cash", "JazzCash", "EasyPaisa", "Bank Transfer (Faysal Bank)"],
    note: "Payment details shared via WhatsApp after booking confirmation",
  },

  policies: {
    documents: "CNIC copy + phone number + advance payment",
    selfDriveRequirements:
      "Valid driving license (age 25+) + CNIC + Rs 30,000 security deposit + check + warranty",
    securityDeposit: "Rs 30,000",
    cancellation:
      "Free cancellation 24 hours before pickup. 25% charge if cancelled after advance booking confirmation.",
    fuelPolicy: "Depends on package — specified at booking",
    mileageLimit: "Depends on package — specified at booking",
    minimumRental: "No minimum — hourly rentals available",
    driverMeals: "Customer provides driver food and accommodation on long trips",
    tollsParking: "Customer pays separately",
    damagePolicy:
      "Customer must either get the car repaired or pay for repairs at our discretion",
    cityTourOvertime: "1 hour relaxation free, extra hours charged based on trip",
    driverOvertime: "Extra charges depend on trip duration",
    childSeat: "Not available",
    airportMeetGreet: "Not available",
    pickup: "Customer comes to our office for pickup",
  },

  offer: {
    active: true,
    text: "10% Off Your First Ride",
    description: "New customers get 10% discount on their first rental",
  },

  seo: {
    title:
      "Abubakr Chadhar Rent a Car | Premium Car Rental in Lahore — Since 2000",
    description:
      "Lahore's trusted car rental since 2000. Self-drive & with-driver options. Toyota, Honda, Audi, Land Cruiser. 24/7 service. WhatsApp: +923101404545",
    keywords:
      "car rental Lahore, rent a car Lahore, self drive Lahore, car hire Pakistan, wedding car Lahore, Murree car rental, Islamabad car hire",
  },
};

export type SiteConfig = typeof siteConfig;

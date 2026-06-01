export type Testimonial = {
  id: number;
  name: string;
  trip: string;
  rating: number;
  text: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ahmed Raza",
    trip: "Lahore to Murree — Family Trip",
    rating: 5,
    text: "Booked a Fortuner for our family trip to Murree. Driver was on time, car was spotless, AC worked perfectly even on the steep climb. My kids loved it. Already planning the Naran trip with them.",
  },
  {
    id: 2,
    name: "Fatima Sheikh",
    trip: "Wedding Car Hire — Lahore",
    rating: 5,
    text: "Used their Mercedes for my brother's wedding baraat. The decoration was beautiful and the driver was professional. Everyone asked where we got the car from. Will definitely use again for my own wedding!",
  },
  {
    id: 3,
    name: "Usman Tariq",
    trip: "Self-Drive — Honda Civic",
    rating: 5,
    text: "Been renting self-drive from Abubakr sahab for 3 months now for office commute. Civic is always clean and well-maintained. The monthly package saved me a lot compared to buying my own car. Very trustworthy people.",
  },
  {
    id: 4,
    name: "Hira Noor",
    trip: "Airport Pickup — Allama Iqbal",
    rating: 4,
    text: "My parents were arriving from Dubai at 3 AM. I was worried no one would be available that late but Abubakr team picked them up right on time. My mother said the car was comfortable and the driver was very respectful.",
  },
  {
    id: 5,
    name: "Bilal Hussain",
    trip: "Lahore to Naran Kaghan — Friends Trip",
    rating: 5,
    text: "We took a Prado for our friends trip to Naran. 4 days, zero issues. The driver knew every scenic spot and even suggested where to stop for the best chai. Worth every rupee. 10/10 would recommend.",
  },
];

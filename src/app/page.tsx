import { HeroSection } from "@/components/sections/HeroSection";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { FleetShowcase } from "@/components/sections/FleetShowcase";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { RoutesSection } from "@/components/sections/RoutesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <FleetShowcase />
      <ServicesSection />
      <RoutesSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}

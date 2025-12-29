import CountdownHeader from "@/app/components/CountdownHeader";
import HeroSection from "@/app/components/HeroSection";
import DiscoverySection from "@/app/components/DiscoverySection";
import Awareness from "@/app/components/Awareness";
import BeforeAfterSection from "@/app/components/BeforeAfterSection";
import ProgramSection from "@/app/components/ProgramSection";
import ChefSection from "@/app/components/ChefSection";
import InstagramCarousel from "@/app/components/InstagramCarousel";
import TestimonialSection from "@/app/components/TestimonialSection";
import Pricing from "@/app/components/Pricing";
import FAQSection from "@/app/components/FAQSection";
import FooterCTA from "@/app/components/FooterCTA";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <CountdownHeader />
      <HeroSection />
      <DiscoverySection />
      <Awareness />
      <BeforeAfterSection />
      <ProgramSection />
      <ChefSection />
      <InstagramCarousel />
      <TestimonialSection />
      <Pricing />
      <FAQSection />
      <FooterCTA />
    </main>
  );
};

export default Index;

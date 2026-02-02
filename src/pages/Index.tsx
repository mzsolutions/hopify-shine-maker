import HeroSection from "@/components/about/HeroSection";
import FounderSection from "@/components/about/FounderSection";
import StorySection from "@/components/about/StorySection";
import WhyChooseUsSection from "@/components/about/WhyChooseUsSection";
import CtaSection from "@/components/about/CtaSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <FounderSection />
      <StorySection />
      <WhyChooseUsSection />
      <CtaSection />
    </main>
  );
};

export default Index;

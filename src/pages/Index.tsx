import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FounderSection from "@/components/about/FounderSection";
import StorySection from "@/components/about/StorySection";
import WhyChooseUsSection from "@/components/about/WhyChooseUsSection";
import CtaSection from "@/components/about/CtaSection";
import HomeTrialSection from "@/components/home/HomeTrialSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <HomeTrialSection />
        <FounderSection />
        <StorySection />
        <WhyChooseUsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/about/HeroSection";
import FounderSection from "@/components/about/FounderSection";
import StorySection from "@/components/about/StorySection";
import WhyChooseUsSection from "@/components/about/WhyChooseUsSection";
import CtaSection from "@/components/about/CtaSection";
import { HomeTrialOptionA, HomeTrialOptionB, HomeTrialOptionC } from "@/components/home/HomeTrialSection";

const options = [
  { label: "A – Dark Banner", Component: HomeTrialOptionA },
  { label: "B – Light Cards", Component: HomeTrialOptionB },
  { label: "C – Split Layout", Component: HomeTrialOptionC },
];

const Index = () => {
  const [selected, setSelected] = useState(0);
  const SelectedSection = options[selected].Component;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />

        {/* Option Switcher – remove after choosing */}
        <div className="bg-muted py-4 sticky top-16 z-30 border-b border-border">
          <div className="container mx-auto px-4 flex items-center justify-center gap-3 flex-wrap">
            <span className="text-sm text-muted-foreground font-sans mr-2">Home Trial Section:</span>
            {options.map((opt, i) => (
              <button
                key={opt.label}
                onClick={() => setSelected(i)}
                className={`px-4 py-2 rounded-lg text-sm font-sans font-medium transition-all ${
                  selected === i
                    ? "bg-primary text-primary-foreground shadow-warm"
                    : "bg-card text-foreground border border-border hover:bg-secondary"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <SelectedSection />

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

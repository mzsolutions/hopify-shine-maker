import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/about/HeroSection";
import FounderSection from "@/components/about/FounderSection";
import StorySection from "@/components/about/StorySection";
import WhyChooseUsSection from "@/components/about/WhyChooseUsSection";
import CtaSection from "@/components/about/CtaSection";
import { DarkOptionA, DarkOptionB, DarkOptionC, LightOptionA, LightOptionB, LightOptionC } from "@/components/home/HomeTrialSection";

const options = [
  { label: "Dark A – Cinematic", Component: DarkOptionA },
  { label: "Dark B – Centered", Component: DarkOptionB },
  { label: "Dark C – Split", Component: DarkOptionC },
  { label: "Light A – Editorial", Component: LightOptionA },
  { label: "Light B – Minimal", Component: LightOptionB },
  { label: "Light C – Sticky", Component: LightOptionC },
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
        <div className="bg-muted py-3 sticky top-16 z-30 border-b border-border">
          <div className="container mx-auto px-4 flex items-center justify-center gap-2 flex-wrap">
            <span className="text-xs text-muted-foreground font-sans mr-2">Home Trial:</span>
            {options.map((opt, i) => (
              <button
                key={opt.label}
                onClick={() => setSelected(i)}
                className={`px-3 py-1.5 rounded-full text-xs font-sans font-medium transition-all ${
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

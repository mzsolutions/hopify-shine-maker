import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StepIndicator from "@/components/estimate/StepIndicator";
import CategoryStep from "@/components/estimate/CategoryStep";
import SubcategoryStep from "@/components/estimate/SubcategoryStep";
import DimensionsStep from "@/components/estimate/DimensionsStep";
import AccessoriesStep from "@/components/estimate/AccessoriesStep";
import EstimateResult from "@/components/estimate/EstimateResult";
import { categories, accessories } from "@/components/estimate/data";
import curtainsHero from "@/assets/curtains-hero.jpg";

const ALL_STEPS = ["Style", "Type", "Size", "Extras", "Estimate"];
const QUOTE_STEPS = ["Style", "Type", "Quote"];

const GetEstimate = () => {
  const [step, setStep] = useState(0);
  const [categoryId, setCategoryId] = useState<string | null>(null);
  const [subcategoryId, setSubcategoryId] = useState<string | null>(null);
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [selectedAccessories, setSelectedAccessories] = useState<Record<string, number>>({});

  const category = categories.find((c) => c.id === categoryId);
  const subcategory = category?.subcategories.find((s) => s.id === subcategoryId);
  const isBlinds = categoryId === "blinds";
  const isQuote = subcategory?.formula === "quote";

  // Step indicator adapts for quote-only products
  const visibleSteps = isQuote && step === 4 ? QUOTE_STEPS : ALL_STEPS;
  const indicatorStep = isQuote && step === 4 ? 2 : step;

  const canProceed = () => {
    if (step === 0) return !!categoryId;
    if (step === 1) return !!subcategoryId;
    if (step === 2)
      return !!width && !!height && parseFloat(width) > 0 && parseFloat(height) > 0;
    if (step === 3) return true;
    return false;
  };

  const handleNext = () => {
    if (!canProceed()) return;
    if (step === 1 && isQuote) {
      setStep(4);
    } else {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step === 4 && isQuote) {
      setStep(1);
    } else {
      setStep(step - 1);
    }
  };

  const handleCategorySelect = (id: string) => {
    setCategoryId(id);
    setSubcategoryId(null);
    setSelectedAccessories({});
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative h-[38vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <img
          src={curtainsHero}
          alt="Curtains & blinds collection"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/60" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative text-center z-10 px-4"
        >
          <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground mb-3">
            Get Your Estimate
          </h1>
          <p className="text-primary-foreground/80 text-base md:text-lg max-w-lg mx-auto font-sans">
            Custom curtains & blinds, tailored to your space
          </p>
        </motion.div>
      </section>

      {/* Estimator */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <StepIndicator steps={visibleSteps} current={indicatorStep} />

          <AnimatePresence mode="wait">
            {step === 0 && (
              <CategoryStep
                key="cat"
                categories={categories}
                selected={categoryId}
                onSelect={handleCategorySelect}
              />
            )}
            {step === 1 && category && (
              <SubcategoryStep
                key="sub"
                category={category}
                selected={subcategoryId}
                onSelect={setSubcategoryId}
              />
            )}
            {step === 2 && (
              <DimensionsStep
                key="dim"
                width={width}
                height={height}
                onWidthChange={setWidth}
                onHeightChange={setHeight}
              />
            )}
            {step === 3 && (
              <AccessoriesStep
                key="acc"
                accessories={accessories}
                selected={selectedAccessories}
                onToggle={(id, qty) =>
                  setSelectedAccessories((prev) => ({ ...prev, [id]: qty }))
                }
                isDoubleLayer={!!subcategory?.isDoubleLayer}
                isBlinds={isBlinds}
              />
            )}
            {step === 4 && category && subcategory && (
              <EstimateResult
                key="result"
                category={category}
                subcategory={subcategory}
                width={width}
                height={height}
                selectedAccessories={selectedAccessories}
                accessories={accessories}
              />
            )}
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-12 max-w-3xl mx-auto">
            {step > 0 ? (
              <button
                onClick={handleBack}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border text-foreground hover:bg-secondary transition-colors font-sans text-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
            ) : (
              <div />
            )}
            {step < 4 && (
              <button
                onClick={handleNext}
                disabled={!canProceed()}
                className="flex items-center gap-2 px-7 py-2.5 rounded-xl bg-primary text-primary-foreground font-medium text-sm disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-warm transition-all font-sans"
              >
                {step === 1 && isQuote ? "Get Quote" : "Continue"}
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GetEstimate;

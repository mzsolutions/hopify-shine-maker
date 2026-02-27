import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Ruler, CheckCircle2, Sparkles, Truck, Shield, Phone } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import curtainsHero from "@/assets/curtains-hero.jpg";
import americanSheer from "@/assets/curtain-american-sheer.jpg";
import americanBlackout from "@/assets/curtain-american-blackout.jpg";
import waveSheer from "@/assets/curtain-wave-sheer.jpg";
import waveBlackout from "@/assets/curtain-wave-blackout.jpg";
import rollerBlinds from "@/assets/curtain-roller-blinds.jpg";
import zebraBlinds from "@/assets/curtain-zebra-blinds.jpg";

const categories = [
  {
    id: "american",
    name: "American",
    description: "Classic pleated elegance with timeless draping",
    subcategories: [
      { id: "american-sheer", name: "Sheer", image: americanSheer, pricePerSqM: 45, description: "Light-filtering soft fabric" },
      { id: "american-blackout", name: "Blackout", image: americanBlackout, pricePerSqM: 65, description: "Total darkness & privacy" },
    ],
  },
  {
    id: "wave",
    name: "Wave",
    description: "Modern S-fold ripple for a sleek, contemporary look",
    subcategories: [
      { id: "wave-sheer", name: "Sheer", image: waveSheer, pricePerSqM: 55, description: "Flowing wave sheer fabric" },
      { id: "wave-blackout", name: "Blackout", image: waveBlackout, pricePerSqM: 75, description: "Premium wave blackout" },
    ],
  },
  {
    id: "blinds",
    name: "Blinds",
    description: "Functional & minimal window solutions",
    subcategories: [
      { id: "roller-blinds", name: "Roller Blinds", image: rollerBlinds, pricePerSqM: 40, description: "Clean & simple roller" },
      { id: "zebra-blinds", name: "Zebra Blinds", image: zebraBlinds, pricePerSqM: 50, description: "Dual-layer light control" },
    ],
  },
];

const discountTiers = [
  { min: 2000, max: 3999, pct: 5 },
  { min: 4000, max: 4999, pct: 10 },
  { min: 5000, max: 5999, pct: 15 },
  { min: 6000, max: 7999, pct: 20 },
  { min: 8000, max: 11999, pct: 25 },
  { min: 12000, max: Infinity, pct: 30 },
];

const GetEstimate = () => {
  const [step, setStep] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSub, setSelectedSub] = useState<string | null>(null);
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");

  const category = categories.find((c) => c.id === selectedCategory);
  const subcategory = category?.subcategories.find((s) => s.id === selectedSub);

  const estimate = useMemo(() => {
    if (!subcategory || !width || !height) return null;
    const w = parseFloat(width);
    const h = parseFloat(height);
    if (isNaN(w) || isNaN(h) || w <= 0 || h <= 0) return null;
    const sqM = (w / 100) * (h / 100);
    const base = Math.round(sqM * subcategory.pricePerSqM);
    const tier = discountTiers.find((t) => base >= t.min && base <= t.max);
    const discount = tier ? tier.pct : 0;
    const final = Math.round(base * (1 - discount / 100));
    return { base, discount, final, sqM: sqM.toFixed(2) };
  }, [subcategory, width, height]);

  const canProceed = () => {
    if (step === 0) return !!selectedCategory;
    if (step === 1) return !!selectedSub;
    if (step === 2) return !!width && !!height && parseFloat(width) > 0 && parseFloat(height) > 0;
    return false;
  };

  const steps = ["Style", "Type", "Size", "Estimate"];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img src={curtainsHero} alt="Curtains collection" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/60" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center z-10 px-4"
        >
          <h1 className="font-serif text-4xl md:text-6xl text-primary-foreground mb-4">
            Get Your Estimate
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-xl mx-auto font-sans">
            Custom curtains & blinds, tailored to your space
          </p>
        </motion.div>
      </section>

      {/* Main Estimator */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Step Indicator */}
          <div className="flex items-center justify-center mb-16 gap-0">
            {steps.map((label, i) => (
              <div key={label} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-500 ${
                      i < step
                        ? "bg-primary text-primary-foreground"
                        : i === step
                        ? "bg-primary text-primary-foreground shadow-warm scale-110"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {i < step ? <CheckCircle2 className="w-5 h-5" /> : i + 1}
                  </div>
                  <span
                    className={`text-xs mt-2 font-medium ${
                      i <= step ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {label}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div
                    className={`w-12 md:w-24 h-0.5 mx-2 mb-6 transition-colors duration-500 ${
                      i < step ? "bg-primary" : "bg-border"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Step Content */}
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div
                key="step0"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="font-serif text-3xl md:text-4xl text-center mb-3">Choose Your Style</h2>
                <p className="text-muted-foreground text-center mb-12 font-sans">Select the curtain category that suits your space</p>
                <div className="grid md:grid-cols-3 gap-6">
                  {categories.map((cat) => (
                    <motion.button
                      key={cat.id}
                      whileHover={{ y: -6 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        setSelectedCategory(cat.id);
                        setSelectedSub(null);
                      }}
                      className={`group relative rounded-2xl overflow-hidden border-2 transition-all duration-300 text-left ${
                        selectedCategory === cat.id
                          ? "border-primary shadow-warm"
                          : "border-border hover:border-primary/40"
                      }`}
                    >
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={cat.subcategories[0].image}
                          alt={cat.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-5 bg-card">
                        <h3 className="font-serif text-xl mb-1">{cat.name}</h3>
                        <p className="text-sm text-muted-foreground font-sans">{cat.description}</p>
                      </div>
                      {selectedCategory === cat.id && (
                        <motion.div
                          layoutId="selected-cat"
                          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-primary flex items-center justify-center"
                        >
                          <CheckCircle2 className="w-5 h-5 text-primary-foreground" />
                        </motion.div>
                      )}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 1 && category && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="font-serif text-3xl md:text-4xl text-center mb-3">
                  Select {category.name} Type
                </h2>
                <p className="text-muted-foreground text-center mb-12 font-sans">
                  Pick the fabric type for your {category.name.toLowerCase()} curtains
                </p>
                <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                  {category.subcategories.map((sub) => (
                    <motion.button
                      key={sub.id}
                      whileHover={{ y: -6 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedSub(sub.id)}
                      className={`group relative rounded-2xl overflow-hidden border-2 transition-all duration-300 text-left ${
                        selectedSub === sub.id
                          ? "border-primary shadow-warm"
                          : "border-border hover:border-primary/40"
                      }`}
                    >
                      <div className="aspect-[16/10] overflow-hidden">
                        <img
                          src={sub.image}
                          alt={sub.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-5 bg-card">
                        <h3 className="font-serif text-xl mb-1">{sub.name}</h3>
                        <p className="text-sm text-muted-foreground font-sans">{sub.description}</p>
                        <p className="text-sm font-medium text-primary mt-2 font-sans">
                          From AED {sub.pricePerSqM}/m²
                        </p>
                      </div>
                      {selectedSub === sub.id && (
                        <motion.div
                          layoutId="selected-sub"
                          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-primary flex items-center justify-center"
                        >
                          <CheckCircle2 className="w-5 h-5 text-primary-foreground" />
                        </motion.div>
                      )}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
                className="max-w-2xl mx-auto"
              >
                <h2 className="font-serif text-3xl md:text-4xl text-center mb-3">Enter Dimensions</h2>
                <p className="text-muted-foreground text-center mb-12 font-sans">
                  Measure your window width and height in centimeters
                </p>

                <div className="bg-card rounded-2xl border border-border p-8 md:p-12 shadow-soft">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                      <Ruler className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-serif text-lg">Window Size</span>
                  </div>

                  <div className="flex items-end gap-4">
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-muted-foreground mb-2 font-sans">Width</label>
                      <div className="relative">
                        <input
                          type="number"
                          value={width}
                          onChange={(e) => setWidth(e.target.value)}
                          placeholder="200"
                          min="1"
                          className="w-full h-14 rounded-xl border border-input bg-background px-4 pr-14 text-lg font-sans focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-muted-foreground font-sans">cm</span>
                      </div>
                    </div>
                    <span className="text-2xl text-muted-foreground mb-3 font-sans">×</span>
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-muted-foreground mb-2 font-sans">Height</label>
                      <div className="relative">
                        <input
                          type="number"
                          value={height}
                          onChange={(e) => setHeight(e.target.value)}
                          placeholder="300"
                          min="1"
                          className="w-full h-14 rounded-xl border border-input bg-background px-4 pr-14 text-lg font-sans focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-muted-foreground font-sans">cm</span>
                      </div>
                    </div>
                  </div>

                  {width && height && parseFloat(width) > 0 && parseFloat(height) > 0 && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-sm text-muted-foreground mt-4 font-sans"
                    >
                      Area: {((parseFloat(width) / 100) * (parseFloat(height) / 100)).toFixed(2)} m²
                    </motion.p>
                  )}
                </div>
              </motion.div>
            )}

            {step === 3 && estimate && subcategory && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="max-w-3xl mx-auto"
              >
                <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">Your Estimate</h2>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Product Summary */}
                  <div className="rounded-2xl overflow-hidden border border-border shadow-soft">
                    <img src={subcategory.image} alt={subcategory.name} className="w-full aspect-[4/3] object-cover" />
                    <div className="p-6 bg-card">
                      <p className="text-sm text-primary font-medium uppercase tracking-wider font-sans mb-1">
                        {category?.name} Style
                      </p>
                      <h3 className="font-serif text-2xl">{subcategory.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1 font-sans">{subcategory.description}</p>
                      <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground font-sans">
                        <span>{width} × {height} cm</span>
                        <span>•</span>
                        <span>{estimate.sqM} m²</span>
                      </div>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="space-y-4">
                    <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                      <div className="flex items-center gap-2 mb-6">
                        <Sparkles className="w-5 h-5 text-primary" />
                        <span className="font-serif text-lg">Price Breakdown</span>
                      </div>
                      <div className="space-y-3 font-sans">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Base Price</span>
                          <span>AED {estimate.base.toLocaleString()}</span>
                        </div>
                        {estimate.discount > 0 && (
                          <div className="flex justify-between text-sm">
                            <span className="text-sage">Bulk Discount ({estimate.discount}%)</span>
                            <span className="text-sage">
                              -AED {(estimate.base - estimate.final).toLocaleString()}
                            </span>
                          </div>
                        )}
                        <div className="border-t border-border pt-3 flex justify-between items-end">
                          <span className="font-medium">Total</span>
                          <div className="text-right">
                            <span className="text-3xl font-serif text-primary">
                              AED {estimate.final.toLocaleString()}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Discount Tiers */}
                    <div className="rounded-2xl border border-border bg-card p-6">
                      <p className="text-sm font-medium mb-3 font-sans">Bulk Discounts</p>
                      <div className="grid grid-cols-2 gap-2">
                        {discountTiers.map((t) => (
                          <div
                            key={t.pct}
                            className={`text-xs px-3 py-2 rounded-lg font-sans ${
                              estimate.discount === t.pct
                                ? "bg-primary/10 text-primary border border-primary/30"
                                : "bg-muted text-muted-foreground"
                            }`}
                          >
                            {t.pct}% off{" "}
                            {t.max === Infinity
                              ? `AED ${t.min.toLocaleString()}+`
                              : `AED ${t.min.toLocaleString()}-${t.max.toLocaleString()}`}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <motion.a
                      href="https://wa.me/971501234567?text=Hi! I'd like to book a free consultation for curtains."
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-primary text-primary-foreground font-medium text-lg shadow-warm hover:shadow-elevated transition-all font-sans"
                    >
                      <Phone className="w-5 h-5" />
                      Book a Free Consultation
                    </motion.a>

                    <p className="text-xs text-center text-muted-foreground font-sans">
                      *Estimate is indicative. Final price confirmed after site visit.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-12 max-w-3xl mx-auto">
            {step > 0 ? (
              <motion.button
                whileHover={{ x: -4 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setStep(step - 1)}
                className="flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-foreground hover:bg-secondary transition-colors font-sans"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </motion.button>
            ) : (
              <div />
            )}

            {step < 3 && (
              <motion.button
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => canProceed() && setStep(step + 1)}
                disabled={!canProceed()}
                className="flex items-center gap-2 px-8 py-3 rounded-xl bg-primary text-primary-foreground font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-warm transition-all font-sans"
              >
                Continue
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            )}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Ruler, label: "Custom Made", desc: "Tailored to your exact measurements" },
              { icon: Truck, label: "Free Installation", desc: "Professional fitting included" },
              { icon: Shield, label: "2-Year Warranty", desc: "Quality guaranteed" },
              { icon: Sparkles, label: "Premium Fabrics", desc: "Handpicked materials" },
            ].map(({ icon: Icon, label, desc }) => (
              <div key={label} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-serif text-sm md:text-base font-medium">{label}</h4>
                <p className="text-xs text-muted-foreground mt-1 font-sans">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GetEstimate;

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Phone, Ruler, Truck, Shield, Sparkles } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import curtainsHero from "@/assets/curtains-hero.jpg";
import americanSheer from "@/assets/curtain-american-sheer.jpg";
import americanBlackout from "@/assets/curtain-american-blackout.jpg";
import waveSheer from "@/assets/curtain-wave-sheer.jpg";
import waveBlackout from "@/assets/curtain-wave-blackout.jpg";
import rollerBlinds from "@/assets/curtain-roller-blinds.jpg";
import zebraBlinds from "@/assets/curtain-zebra-blinds.jpg";

const products = [
  { id: "american-sheer", category: "American", name: "Sheer Curtains", image: americanSheer, pricePerSqM: 45 },
  { id: "american-blackout", category: "American", name: "Blackout Curtains", image: americanBlackout, pricePerSqM: 65 },
  { id: "wave-sheer", category: "Wave", name: "Sheer Curtains", image: waveSheer, pricePerSqM: 55 },
  { id: "wave-blackout", category: "Wave", name: "Blackout Curtains", image: waveBlackout, pricePerSqM: 75 },
  { id: "roller-blinds", category: "Blinds", name: "Roller Blinds", image: rollerBlinds, pricePerSqM: 40 },
  { id: "zebra-blinds", category: "Blinds", name: "Zebra Blinds", image: zebraBlinds, pricePerSqM: 50 },
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
  const [selectedId, setSelectedId] = useState<string>(products[0].id);
  const [width, setWidth] = useState("200");
  const [height, setHeight] = useState("300");

  const selected = products.find((p) => p.id === selectedId)!;

  const estimate = useMemo(() => {
    const w = parseFloat(width);
    const h = parseFloat(height);
    if (isNaN(w) || isNaN(h) || w <= 0 || h <= 0) return null;
    const sqM = (w / 100) * (h / 100);
    const base = Math.round(sqM * selected.pricePerSqM);
    const tier = discountTiers.find((t) => base >= t.min && base <= t.max);
    const discount = tier ? tier.pct : 0;
    const final = Math.round(base * (1 - discount / 100));
    return { base, discount, final, sqM: sqM.toFixed(2) };
  }, [selected, width, height]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative h-[45vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <img src={curtainsHero} alt="Curtains collection" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/60" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center z-10 px-4"
        >
          <h1 className="font-serif text-4xl md:text-6xl text-primary-foreground mb-4">Get Estimate</h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-xl mx-auto font-sans">
            Custom curtains & blinds, tailored to your space
          </p>
        </motion.div>
      </section>

      {/* Estimator */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[1fr_420px] gap-12 max-w-6xl mx-auto">
            {/* Left: Size + Products */}
            <div>
              {/* Size Input */}
              <div className="mb-12">
                <h2 className="font-serif text-2xl mb-6">Size</h2>
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
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-muted-foreground font-sans bg-muted px-2 py-0.5 rounded">cm</span>
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
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-muted-foreground font-sans bg-muted px-2 py-0.5 rounded">cm</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Selection */}
              <div>
                <h2 className="font-serif text-2xl mb-6">Product</h2>
                <div className="space-y-3">
                  {products.map((product) => (
                    <motion.button
                      key={product.id}
                      whileTap={{ scale: 0.99 }}
                      onClick={() => setSelectedId(product.id)}
                      className={`w-full flex items-center gap-4 p-3 rounded-xl border-2 transition-all duration-300 text-left ${
                        selectedId === product.id
                          ? "border-primary shadow-warm bg-card"
                          : "border-border hover:border-primary/30 bg-background"
                      }`}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-24 h-16 md:w-32 md:h-20 object-cover rounded-lg flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-primary font-medium uppercase tracking-wider font-sans">{product.category}</p>
                        <h3 className="font-serif text-base md:text-lg truncate">{product.name}</h3>
                        <p className="text-xs text-muted-foreground font-sans">From AED {product.pricePerSqM}/m²</p>
                      </div>
                      {selectedId === product.id && (
                        <div className="w-5 h-5 rounded-full bg-primary flex-shrink-0 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                        </div>
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Estimate */}
            <div className="lg:sticky lg:top-28 self-start">
              <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-soft">
                {estimate ? (
                  <>
                    <div className="text-center mb-6">
                      <p className="text-sm text-muted-foreground font-sans mb-1">Estimated Price</p>
                      <p className="text-5xl font-serif text-primary">
                        AED {estimate.final.toLocaleString()}
                      </p>
                      {estimate.discount > 0 && (
                        <p className="text-sm text-sage font-sans mt-2">
                          {estimate.discount}% bulk discount applied
                        </p>
                      )}
                    </div>

                    <div className="border-t border-border pt-4 space-y-2 font-sans text-sm mb-6">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Product</span>
                        <span>{selected.category} {selected.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Size</span>
                        <span>{width} × {height} cm ({estimate.sqM} m²)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Base Price</span>
                        <span>AED {estimate.base.toLocaleString()}</span>
                      </div>
                      {estimate.discount > 0 && (
                        <div className="flex justify-between text-sage">
                          <span>Discount ({estimate.discount}%)</span>
                          <span>-AED {(estimate.base - estimate.final).toLocaleString()}</span>
                        </div>
                      )}
                    </div>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <Ruler className="w-10 h-10 text-muted-foreground/40 mx-auto mb-3" />
                    <p className="text-muted-foreground font-sans text-sm">Enter valid dimensions to see your estimate</p>
                  </div>
                )}

                <motion.a
                  href="https://wa.me/971501234567?text=Hi! I'd like to book a free consultation for curtains."
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-primary text-primary-foreground font-medium text-base shadow-warm hover:shadow-elevated transition-all font-sans"
                >
                  <Phone className="w-5 h-5" />
                  Book a Free Consultation
                </motion.a>

                <p className="text-xs text-center text-muted-foreground mt-3 font-sans">
                  *Price is indicative. Final quote confirmed after site visit.
                </p>
              </div>

              {/* Discount tiers */}
              <div className="mt-4 rounded-2xl border border-border bg-card p-5">
                <p className="text-sm font-medium mb-3 font-sans">Volume Discounts</p>
                <div className="grid grid-cols-2 gap-2">
                  {discountTiers.map((t) => (
                    <div
                      key={t.pct}
                      className={`text-xs px-3 py-2 rounded-lg font-sans ${
                        estimate && estimate.discount === t.pct
                          ? "bg-primary/10 text-primary border border-primary/30"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      <span className="font-medium">{t.pct}%</span> off{" "}
                      {t.max === Infinity ? `AED ${t.min.toLocaleString()}+` : `AED ${t.min.toLocaleString()}-${t.max.toLocaleString()}`}
                    </div>
                  ))}
                </div>
              </div>
            </div>
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

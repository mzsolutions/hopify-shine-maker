import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Search, Grid3X3, LayoutGrid, Filter } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import shapeRectangular from "@/assets/filters/shape-rectangular.jpg";
import shapeRound from "@/assets/filters/shape-round.jpg";
import shapeSquare from "@/assets/filters/shape-square.jpg";
import shapeRunner from "@/assets/filters/shape-runner.jpg";

import materialWool from "@/assets/filters/material-wool.jpg";
import materialSilk from "@/assets/filters/material-silk.jpg";
import materialCotton from "@/assets/filters/material-cotton.jpg";
import materialJute from "@/assets/filters/material-jute.jpg";
import materialSynthetic from "@/assets/filters/material-synthetic.jpg";

import collectionModern from "@/assets/filters/collection-modern.jpg";
import collectionTraditional from "@/assets/filters/collection-traditional.jpg";
import collectionBohemian from "@/assets/filters/collection-bohemian.jpg";
import collectionMinimalist from "@/assets/filters/collection-minimalist.jpg";
import collectionLuxury from "@/assets/filters/collection-luxury.jpg";
import collectionOutdoor from "@/assets/filters/collection-outdoor.jpg";

// Filter options
const SHAPES = [
  { id: "rectangular", label: "Rectangular", image: shapeRectangular },
  { id: "round", label: "Round", image: shapeRound },
  { id: "square", label: "Square", image: shapeSquare },
  { id: "runner", label: "Runner", image: shapeRunner },
];

const SIZES = [
  { id: "small", label: "Small", dim: "120×170 cm" },
  { id: "medium", label: "Medium", dim: "160×230 cm" },
  { id: "large", label: "Large", dim: "200×290 cm" },
  { id: "xlarge", label: "X-Large", dim: "250×350 cm" },
  { id: "oversized", label: "Oversized", dim: "300×400+ cm" },
  { id: "custom", label: "Custom", dim: "Made to order" },
];

const COLORS = [
  { id: "beige", label: "Beige", hex: "#D4B896" },
  { id: "ivory", label: "Ivory", hex: "#FFFFF0" },
  { id: "gray", label: "Gray", hex: "#9E9E9E" },
  { id: "blue", label: "Blue", hex: "#4A6FA5" },
  { id: "red", label: "Red", hex: "#B94A48" },
  { id: "green", label: "Green", hex: "#5D8A66" },
  { id: "brown", label: "Brown", hex: "#8B6914" },
  { id: "black", label: "Black", hex: "#2C2C2C" },
  { id: "gold", label: "Gold", hex: "#C5A44E" },
  { id: "terracotta", label: "Terracotta", hex: "#C75B39" },
  { id: "navy", label: "Navy", hex: "#1B2A4A" },
  { id: "multicolor", label: "Multi", hex: "conic-gradient(#E74C3C, #F1C40F, #2ECC71, #3498DB, #E74C3C)" },
];

const COLLECTIONS = [
  { id: "modern", label: "Modern", image: collectionModern },
  { id: "traditional", label: "Traditional", image: collectionTraditional },
  { id: "bohemian", label: "Bohemian", image: collectionBohemian },
  { id: "minimalist", label: "Minimalist", image: collectionMinimalist },
  { id: "luxury", label: "Luxury", image: collectionLuxury },
  { id: "outdoor", label: "Outdoor", image: collectionOutdoor },
];

const MATERIALS = [
  { id: "wool", label: "Wool", image: materialWool },
  { id: "silk", label: "Silk", image: materialSilk },
  { id: "cotton", label: "Cotton", image: materialCotton },
  { id: "jute", label: "Jute", image: materialJute },
  { id: "synthetic", label: "Synthetic", image: materialSynthetic },
];

// Demo products
const ALL_IMAGES = [collectionModern, collectionTraditional, collectionBohemian, collectionMinimalist, collectionLuxury, collectionOutdoor];
const PRODUCT_NAMES = [
  "Anatolian Heritage Rug", "Nordic Frost Carpet", "Sahara Dune Weave", "Kyoto Zen Mat",
  "Marrakech Mosaic Rug", "Tuscany Sunset Carpet", "Alpine Meadow Weave", "Cairo Medallion Rug",
  "Stockholm Stripe Carpet", "Bali Breeze Mat", "Vienna Classic Rug", "Atlas Mountain Weave",
  "Pacific Shore Carpet", "Provence Garden Rug", "Kashmir Valley Weave", "Santorini Blue Rug",
  "Savannah Gold Carpet", "Fjord Grey Weave",
];

const DEMO_PRODUCTS = PRODUCT_NAMES.map((name, i) => ({
  id: i + 1,
  name,
  price: 499 + Math.floor(Math.random() * 2000),
  originalPrice: 999 + Math.floor(Math.random() * 2500),
  shape: SHAPES[i % SHAPES.length].id,
  size: SIZES[i % SIZES.length].id,
  color: COLORS[i % COLORS.length].id,
  collection: COLLECTIONS[i % COLLECTIONS.length].id,
  material: MATERIALS[i % MATERIALS.length].id,
  image: ALL_IMAGES[i % ALL_IMAGES.length],
  badge: i % 5 === 0 ? "Best Seller" : i % 7 === 0 ? "New" : null,
}));

type FilterKey = "shape" | "size" | "color" | "collection" | "material";
type ActiveStep = FilterKey | null;

const CheckBadge = () => (
  <div className="absolute top-2 right-2 w-7 h-7 bg-primary rounded-full flex items-center justify-center shadow-lg">
    <svg className="w-4 h-4 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  </div>
);

const ShopCarpetsV2 = () => {
  const [filters, setFilters] = useState<Record<FilterKey, string[]>>({
    shape: [], size: [], color: [], collection: [], material: [],
  });
  const [activeStep, setActiveStep] = useState<ActiveStep>("shape");
  const [searchQuery, setSearchQuery] = useState("");
  const [gridCols, setGridCols] = useState<2 | 3>(3);

  const toggle = (key: FilterKey, val: string) => {
    setFilters((p) => ({
      ...p,
      [key]: p[key].includes(val) ? p[key].filter((v) => v !== val) : [...p[key], val],
    }));
  };

  const clearAll = () => {
    setFilters({ shape: [], size: [], color: [], collection: [], material: [] });
    setSearchQuery("");
  };

  const totalFilters = Object.values(filters).flat().length;

  const filtered = useMemo(() => {
    return DEMO_PRODUCTS.filter((p) => {
      if (searchQuery && !p.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
      if (filters.shape.length && !filters.shape.includes(p.shape)) return false;
      if (filters.size.length && !filters.size.includes(p.size)) return false;
      if (filters.color.length && !filters.color.includes(p.color)) return false;
      if (filters.collection.length && !filters.collection.includes(p.collection)) return false;
      if (filters.material.length && !filters.material.includes(p.material)) return false;
      return true;
    });
  }, [filters, searchQuery]);

  const STEPS: { key: FilterKey; label: string }[] = [
    { key: "shape", label: "Shape" },
    { key: "size", label: "Size" },
    { key: "color", label: "Color" },
    { key: "collection", label: "Collection" },
    { key: "material", label: "Material" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Compact Hero */}
      <section className="bg-foreground/95 py-10 text-center">
        <h1 className="font-heading text-3xl md:text-4xl text-white font-semibold mb-2">
          Find Your Perfect Carpet
        </h1>
        <p className="text-white/60 text-sm md:text-base">
          Use the visual filters below to narrow down your ideal carpet
        </p>
      </section>

      {/* Horizontal Filter Steps */}
      <div className="sticky top-[72px] z-30 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-hide">
            {STEPS.map(({ key, label }) => {
              const count = filters[key].length;
              const isActive = activeStep === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveStep(isActive ? null : key)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-md"
                      : count > 0
                      ? "bg-primary/10 text-primary border border-primary/20"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {label}
                  {count > 0 && (
                    <span className={`text-xs rounded-full px-1.5 py-0.5 ${
                      isActive ? "bg-primary-foreground/20 text-primary-foreground" : "bg-primary/20 text-primary"
                    }`}>
                      {count}
                    </span>
                  )}
                </button>
              );
            })}

            <div className="ml-auto flex items-center gap-2 pl-4">
              {totalFilters > 0 && (
                <button onClick={clearAll} className="text-xs text-muted-foreground hover:text-destructive flex items-center gap-1 whitespace-nowrap">
                  <X className="h-3 w-3" /> Clear all
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Expanded Filter Panel */}
      <AnimatePresence>
        {activeStep && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-b border-border bg-card"
          >
            <div className="max-w-7xl mx-auto px-4 py-8">
              {/* SHAPE */}
              {activeStep === "shape" && (
                <div>
                  <h3 className="font-heading text-lg font-semibold mb-1 text-foreground">What shape are you looking for?</h3>
                  <p className="text-sm text-muted-foreground mb-5">Select one or more shapes</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {SHAPES.map((s) => {
                      const selected = filters.shape.includes(s.id);
                      return (
                        <button
                          key={s.id}
                          onClick={() => toggle("shape", s.id)}
                          className={`relative group rounded-2xl overflow-hidden aspect-square border-3 transition-all duration-200 ${
                            selected ? "border-primary ring-4 ring-primary/15 shadow-xl" : "border-transparent hover:shadow-lg"
                          }`}
                        >
                          <img src={s.image} alt={s.label} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 p-4">
                            <span className="text-white font-heading font-semibold text-lg">{s.label}</span>
                          </div>
                          {selected && <CheckBadge />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* SIZE */}
              {activeStep === "size" && (
                <div>
                  <h3 className="font-heading text-lg font-semibold mb-1 text-foreground">What size do you need?</h3>
                  <p className="text-sm text-muted-foreground mb-5">Select one or more sizes</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                    {SIZES.map((s) => {
                      const selected = filters.size.includes(s.id);
                      return (
                        <button
                          key={s.id}
                          onClick={() => toggle("size", s.id)}
                          className={`relative p-5 rounded-2xl border-2 text-center transition-all duration-200 ${
                            selected
                              ? "border-primary bg-primary/5 shadow-lg ring-2 ring-primary/15"
                              : "border-border bg-background hover:border-primary/30 hover:shadow-md"
                          }`}
                        >
                          <div className={`w-12 h-12 mx-auto mb-3 rounded-lg flex items-center justify-center ${
                            selected ? "bg-primary/10" : "bg-muted"
                          }`}>
                            <LayoutGrid className={`w-6 h-6 ${selected ? "text-primary" : "text-muted-foreground"}`} />
                          </div>
                          <div className={`font-semibold text-sm ${selected ? "text-primary" : "text-foreground"}`}>
                            {s.label}
                          </div>
                          <div className="text-xs text-muted-foreground mt-0.5">{s.dim}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* COLOR */}
              {activeStep === "color" && (
                <div>
                  <h3 className="font-heading text-lg font-semibold mb-1 text-foreground">Pick your preferred colors</h3>
                  <p className="text-sm text-muted-foreground mb-5">Select one or more colors</p>
                  <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-4">
                    {COLORS.map((c) => {
                      const selected = filters.color.includes(c.id);
                      return (
                        <button
                          key={c.id}
                          onClick={() => toggle("color", c.id)}
                          className="flex flex-col items-center gap-2 group"
                        >
                          <div
                            className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl border-3 transition-all duration-200 relative ${
                              selected
                                ? "border-primary scale-110 shadow-xl ring-4 ring-primary/20"
                                : "border-border/50 hover:scale-105 hover:shadow-md"
                            }`}
                            style={{ background: c.hex }}
                          >
                            {selected && (
                              <div className="absolute inset-0 flex items-center justify-center">
                                <svg className="w-6 h-6 text-white drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                            )}
                          </div>
                          <span className={`text-xs font-medium transition-colors ${selected ? "text-primary" : "text-muted-foreground group-hover:text-foreground"}`}>
                            {c.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* COLLECTION */}
              {activeStep === "collection" && (
                <div>
                  <h3 className="font-heading text-lg font-semibold mb-1 text-foreground">Browse by collection</h3>
                  <p className="text-sm text-muted-foreground mb-5">Select one or more styles</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {COLLECTIONS.map((c) => {
                      const selected = filters.collection.includes(c.id);
                      return (
                        <button
                          key={c.id}
                          onClick={() => toggle("collection", c.id)}
                          className={`relative group rounded-2xl overflow-hidden aspect-[3/4] border-3 transition-all duration-200 ${
                            selected ? "border-primary ring-4 ring-primary/15 shadow-xl" : "border-transparent hover:shadow-lg"
                          }`}
                        >
                          <img src={c.image} alt={c.label} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 p-4">
                            <span className="text-white font-heading font-semibold text-base">{c.label}</span>
                          </div>
                          {selected && <CheckBadge />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* MATERIAL */}
              {activeStep === "material" && (
                <div>
                  <h3 className="font-heading text-lg font-semibold mb-1 text-foreground">Choose your material</h3>
                  <p className="text-sm text-muted-foreground mb-5">Select one or more materials</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {MATERIALS.map((m) => {
                      const selected = filters.material.includes(m.id);
                      return (
                        <button
                          key={m.id}
                          onClick={() => toggle("material", m.id)}
                          className={`relative group rounded-2xl overflow-hidden aspect-square border-3 transition-all duration-200 ${
                            selected ? "border-primary ring-4 ring-primary/15 shadow-xl" : "border-transparent hover:shadow-lg"
                          }`}
                        >
                          <img src={m.image} alt={m.label} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 p-4">
                            <span className="text-white font-heading font-semibold text-lg">{m.label}</span>
                          </div>
                          {selected && <CheckBadge />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Results Area */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-6 gap-4">
          <div className="flex items-center gap-3">
            <p className="text-sm text-muted-foreground">
              <span className="font-bold text-foreground text-base">{filtered.length}</span> carpets
            </p>

            {/* Active filter pills */}
            <div className="hidden md:flex flex-wrap gap-1.5">
              {Object.entries(filters).flatMap(([cat, vals]) =>
                vals.map((v) => (
                  <button
                    key={`${cat}-${v}`}
                    onClick={() => toggle(cat as FilterKey, v)}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium hover:bg-primary/20"
                  >
                    <span className="capitalize">{v}</span>
                    <X className="h-3 w-3" />
                  </button>
                ))
              )}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative w-56">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 h-9 text-sm rounded-full"
              />
            </div>
            <div className="hidden md:flex items-center border border-border rounded-lg overflow-hidden">
              <button
                onClick={() => setGridCols(2)}
                className={`p-2 transition-colors ${gridCols === 2 ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"}`}
              >
                <Grid3X3 className="h-4 w-4" />
              </button>
              <button
                onClick={() => setGridCols(3)}
                className={`p-2 transition-colors ${gridCols === 3 ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"}`}
              >
                <LayoutGrid className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-24 bg-card rounded-3xl border border-border">
            <Filter className="h-12 w-12 text-muted-foreground/30 mx-auto mb-4" />
            <p className="text-lg text-muted-foreground mb-2">No carpets match your selection</p>
            <p className="text-sm text-muted-foreground/70 mb-6">Try adjusting your filters</p>
            <Button variant="outline" onClick={clearAll} className="rounded-full">
              Reset all filters
            </Button>
          </div>
        ) : (
          <motion.div
            layout
            className={`grid gap-5 ${
              gridCols === 2 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-2xl transition-all duration-300"
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {product.badge && (
                      <div className="absolute top-3 left-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          product.badge === "Best Seller"
                            ? "bg-primary text-primary-foreground"
                            : "bg-foreground text-background"
                        }`}>
                          {product.badge}
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                    <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="sm" className="rounded-full shadow-lg text-xs">
                        Quick View
                      </Button>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <div
                        className="w-4 h-4 rounded-full border border-border/50"
                        style={{ background: COLORS.find((c) => c.id === product.color)?.hex || "#ccc" }}
                      />
                      <span className="text-xs text-muted-foreground capitalize">{product.material} • {product.shape}</span>
                    </div>
                    <h3 className="font-heading font-semibold text-foreground text-base mb-3 group-hover:text-primary transition-colors leading-tight">
                      {product.name}
                    </h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-bold text-foreground">AED {product.price.toLocaleString()}</span>
                      <span className="text-sm text-muted-foreground line-through">AED {product.originalPrice.toLocaleString()}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ShopCarpetsV2;

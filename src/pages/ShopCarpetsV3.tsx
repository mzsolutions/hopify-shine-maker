import { useState, useMemo, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { X, Search, LayoutGrid, Grid3X3, SlidersHorizontal, ChevronDown, Sparkles } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import shopBanner from "@/assets/shop-banner.jpg";
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

// ── Data ──────────────────────────────────────────────

const SHAPES = [
  { id: "rectangular", label: "Rectangular", desc: "Classic room-filling shape", image: shapeRectangular },
  { id: "round", label: "Round", desc: "Soft & organic accent", image: shapeRound },
  { id: "square", label: "Square", desc: "Perfect under tables", image: shapeSquare },
  { id: "runner", label: "Runner", desc: "Ideal for hallways", image: shapeRunner },
];

const SIZES = [
  { id: "small", label: "Small", dim: "120 × 170 cm", scale: 0.4 },
  { id: "medium", label: "Medium", dim: "160 × 230 cm", scale: 0.55 },
  { id: "large", label: "Large", dim: "200 × 290 cm", scale: 0.7 },
  { id: "xlarge", label: "X-Large", dim: "250 × 350 cm", scale: 0.85 },
  { id: "oversized", label: "Oversized", dim: "300 × 400+ cm", scale: 1 },
  { id: "custom", label: "Custom", dim: "Made to order", scale: 0 },
];

const COLORS = [
  { id: "white", label: "White", hex: "#FFFFFF", light: true },
  { id: "ivory", label: "Ivory", hex: "#FFFFF0", light: true },
  { id: "beige", label: "Beige", hex: "#D4B896", light: false },
  { id: "cream", label: "Cream", hex: "#FFFDD0", light: true },
  { id: "gold", label: "Gold", hex: "#C5A44E", light: false },
  { id: "brown", label: "Brown", hex: "#8B6914", light: false },
  { id: "terracotta", label: "Terracotta", hex: "#C75B39", light: false },
  { id: "red", label: "Red", hex: "#B94A48", light: false },
  { id: "blue", label: "Blue", hex: "#4A6FA5", light: false },
  { id: "navy", label: "Navy", hex: "#1B2A4A", light: false },
  { id: "green", label: "Green", hex: "#5D8A66", light: false },
  { id: "gray", label: "Gray", hex: "#9E9E9E", light: false },
  { id: "charcoal", label: "Charcoal", hex: "#4A4A4A", light: false },
  { id: "black", label: "Black", hex: "#2C2C2C", light: false },
  { id: "multicolor", label: "Multicolor", hex: "conic-gradient(#E74C3C, #F1C40F, #2ECC71, #3498DB, #9B59B6, #E74C3C)", light: false },
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
  { id: "wool", label: "Wool", desc: "Soft, durable & timeless", image: materialWool },
  { id: "silk", label: "Silk", desc: "Luxurious natural sheen", image: materialSilk },
  { id: "cotton", label: "Cotton", desc: "Lightweight & easy care", image: materialCotton },
  { id: "jute", label: "Jute", desc: "Natural & sustainable", image: materialJute },
  { id: "synthetic", label: "Synthetic", desc: "Stain-proof & resilient", image: materialSynthetic },
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

// ── Animated section wrapper ──────────────────────────

const FilterSection = ({ children, id }: { children: React.ReactNode; id: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
};

// ── Main Component ────────────────────────────────────

const ShopCarpetsV3 = () => {
  const [filters, setFilters] = useState<Record<FilterKey, string[]>>({
    shape: [], size: [], color: [], collection: [], material: [],
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [gridCols, setGridCols] = useState<2 | 3>(3);
  const resultsRef = useRef<HTMLDivElement>(null);

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

  const scrollToResults = () => {
    resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const SectionHeader = ({ step, title, subtitle }: { step: number; title: string; subtitle: string }) => (
    <div className="flex items-start gap-4 mb-6">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center">
        <span className="text-sm font-bold text-primary">{step}</span>
      </div>
      <div>
        <h2 className="text-xl md:text-2xl font-semibold text-foreground leading-tight">{title}</h2>
        <p className="text-sm text-muted-foreground mt-0.5">{subtitle}</p>
      </div>
    </div>
  );

  const SelectedCheck = ({ size = "md" }: { size?: "sm" | "md" }) => (
    <div className={`absolute top-2 right-2 ${size === "sm" ? "w-6 h-6" : "w-7 h-7"} bg-primary rounded-full flex items-center justify-center shadow-lg z-10`}>
      <svg className={`${size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4"} text-primary-foreground`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ── Hero Banner ── */}
      <section className="relative h-[300px] md:h-[380px] overflow-hidden flex items-center justify-center">
        <img src={shopBanner} alt="Luxury carpet showroom" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 via-foreground/30 to-foreground/70" />
        <div className="relative z-10 text-center px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-primary-foreground/70 text-xs font-semibold tracking-[0.35em] uppercase">Handpicked Furniture</span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground font-semibold mt-2 mb-3">
              Find Your Perfect Carpet
            </h1>
            <p className="text-primary-foreground/60 text-base md:text-lg max-w-md mx-auto">
              Use the visual guide below — just tap what you like
            </p>
            <button onClick={() => document.getElementById("filter-shape")?.scrollIntoView({ behavior: "smooth" })} className="mt-6 inline-flex items-center gap-2 text-primary-foreground/80 text-sm hover:text-primary-foreground transition-colors">
              Start browsing <ChevronDown className="w-4 h-4 animate-bounce" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── Sticky Selection Bar ── */}
      <div className="sticky top-[72px] z-40 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center gap-3 overflow-x-auto">
          <div className="flex items-center gap-2 mr-2 shrink-0">
            <SlidersHorizontal className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-foreground">Filters</span>
          </div>

          {/* Active pills */}
          {totalFilters === 0 ? (
            <span className="text-xs text-muted-foreground italic">No filters applied — showing all carpets</span>
          ) : (
            <div className="flex items-center gap-1.5 flex-wrap">
              {Object.entries(filters).flatMap(([cat, vals]) =>
                vals.map((v) => {
                  const color = cat === "color" ? COLORS.find(c => c.id === v) : null;
                  return (
                    <button
                      key={`${cat}-${v}`}
                      onClick={() => toggle(cat as FilterKey, v)}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium hover:bg-primary/20 transition-colors shrink-0"
                    >
                      {color && (
                        <span
                          className="w-3 h-3 rounded-full border border-border/50 shrink-0"
                          style={{ background: color.hex }}
                        />
                      )}
                      <span className="capitalize">{v.replace("-", " ")}</span>
                      <X className="h-3 w-3" />
                    </button>
                  );
                })
              )}
            </div>
          )}

          <div className="ml-auto flex items-center gap-2 shrink-0">
            {totalFilters > 0 && (
              <button onClick={clearAll} className="text-xs text-muted-foreground hover:text-destructive flex items-center gap-1">
                <X className="w-3 h-3" /> Clear all
              </button>
            )}
            <Button size="sm" className="rounded-full text-xs" onClick={scrollToResults}>
              View {filtered.length} result{filtered.length !== 1 ? "s" : ""}
            </Button>
          </div>
        </div>
      </div>

      {/* ── FILTER SECTIONS — All visible, no hiding ── */}
      <div className="max-w-7xl mx-auto px-4 py-10 space-y-16">

        {/* 1. SHAPE — Large image cards */}
        <FilterSection id="filter-shape">
          <SectionHeader step={1} title="What shape carpet do you want?" subtitle="Select one or more shapes" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {SHAPES.map((s) => {
              const selected = filters.shape.includes(s.id);
              return (
                <button
                  key={s.id}
                  onClick={() => toggle("shape", s.id)}
                  className={`relative group rounded-2xl overflow-hidden aspect-[4/5] border-3 transition-all duration-300 ${
                    selected
                      ? "border-primary ring-4 ring-primary/20 shadow-warm scale-[1.02]"
                      : "border-transparent hover:shadow-elevated hover:scale-[1.01]"
                  }`}
                >
                  <img src={s.image} alt={s.label} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                    <span className="text-white font-semibold text-lg md:text-xl block">{s.label}</span>
                    <span className="text-white/60 text-xs md:text-sm">{s.desc}</span>
                  </div>
                  {selected && <SelectedCheck />}
                </button>
              );
            })}
          </div>
        </FilterSection>

        {/* 2. COLOR — The most important fix. BIG swatches with names always visible */}
        <FilterSection id="filter-color">
          <SectionHeader step={2} title="What colour are you looking for?" subtitle="This is the main colour of the carpet — select one or more" />
          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-5 gap-3 md:gap-4">
            {COLORS.map((c) => {
              const selected = filters.color.includes(c.id);
              const isGradient = c.hex.includes("gradient");
              return (
                <button
                  key={c.id}
                  onClick={() => toggle("color", c.id)}
                  className={`group relative flex flex-col items-center rounded-2xl p-3 md:p-4 border-2 transition-all duration-300 ${
                    selected
                      ? "border-primary bg-primary/5 shadow-warm scale-[1.03]"
                      : "border-border/60 bg-card hover:border-primary/30 hover:shadow-soft"
                  }`}
                >
                  {/* Large swatch */}
                  <div
                    className={`w-14 h-14 md:w-20 md:h-20 rounded-xl mb-2.5 transition-transform duration-300 group-hover:scale-105 relative ${
                      c.light ? "border-2 border-border shadow-sm" : ""
                    } ${selected ? "ring-3 ring-primary/30" : ""}`}
                    style={{ background: c.hex }}
                  >
                    {selected && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-7 h-7 bg-primary rounded-full flex items-center justify-center shadow-md">
                          <svg className="w-4 h-4 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                  {/* Label always visible and large */}
                  <span className={`text-sm font-semibold transition-colors ${
                    selected ? "text-primary" : "text-foreground"
                  }`}>
                    {c.label}
                  </span>
                </button>
              );
            })}
          </div>
        </FilterSection>

        {/* 3. SIZE — Visual proportional boxes */}
        <FilterSection id="filter-size">
          <SectionHeader step={3} title="What size do you need?" subtitle="Don't worry — you can always adjust later" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
            {SIZES.map((s) => {
              const selected = filters.size.includes(s.id);
              return (
                <button
                  key={s.id}
                  onClick={() => toggle("size", s.id)}
                  className={`relative p-5 rounded-2xl border-2 text-center transition-all duration-300 group ${
                    selected
                      ? "border-primary bg-primary/5 shadow-warm scale-[1.02]"
                      : "border-border bg-card hover:border-primary/30 hover:shadow-soft"
                  }`}
                >
                  {/* Visual size indicator */}
                  <div className="flex items-center justify-center mb-3 h-14">
                    {s.scale > 0 ? (
                      <div
                        className={`rounded-md border-2 transition-colors ${
                          selected ? "border-primary bg-primary/10" : "border-border bg-muted/50 group-hover:border-primary/30"
                        }`}
                        style={{
                          width: `${Math.max(24, s.scale * 56)}px`,
                          height: `${Math.max(24, s.scale * 48)}px`,
                        }}
                      />
                    ) : (
                      <Sparkles className={`w-7 h-7 ${selected ? "text-primary" : "text-muted-foreground group-hover:text-primary/60"}`} />
                    )}
                  </div>
                  <div className={`font-semibold text-sm ${selected ? "text-primary" : "text-foreground"}`}>
                    {s.label}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">{s.dim}</div>
                  {selected && <SelectedCheck size="sm" />}
                </button>
              );
            })}
          </div>
        </FilterSection>

        {/* 4. COLLECTION — Lifestyle image cards */}
        <FilterSection id="filter-collection">
          <SectionHeader step={4} title="Which style speaks to you?" subtitle="Browse our curated collections" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {COLLECTIONS.map((c) => {
              const selected = filters.collection.includes(c.id);
              return (
                <button
                  key={c.id}
                  onClick={() => toggle("collection", c.id)}
                  className={`relative group rounded-2xl overflow-hidden aspect-[3/4] border-3 transition-all duration-300 ${
                    selected
                      ? "border-primary ring-4 ring-primary/20 shadow-warm scale-[1.02]"
                      : "border-transparent hover:shadow-elevated hover:scale-[1.01]"
                  }`}
                >
                  <img src={c.image} alt={c.label} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                    <span className="text-white font-semibold text-sm md:text-base">{c.label}</span>
                  </div>
                  {selected && <SelectedCheck size="sm" />}
                </button>
              );
            })}
          </div>
        </FilterSection>

        {/* 5. MATERIAL — Texture cards with descriptions */}
        <FilterSection id="filter-material">
          <SectionHeader step={5} title="Any material preference?" subtitle="Each material has unique qualities" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {MATERIALS.map((m) => {
              const selected = filters.material.includes(m.id);
              return (
                <button
                  key={m.id}
                  onClick={() => toggle("material", m.id)}
                  className={`relative group rounded-2xl overflow-hidden border-3 transition-all duration-300 ${
                    selected
                      ? "border-primary ring-4 ring-primary/20 shadow-warm scale-[1.02]"
                      : "border-transparent hover:shadow-elevated hover:scale-[1.01]"
                  }`}
                >
                  <div className="aspect-square overflow-hidden">
                    <img src={m.image} alt={m.label} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="text-white font-semibold text-base md:text-lg block">{m.label}</span>
                    <span className="text-white/60 text-xs">{m.desc}</span>
                  </div>
                  {selected && <SelectedCheck />}
                </button>
              );
            })}
          </div>
        </FilterSection>
      </div>

      {/* ── Results ── */}
      <div ref={resultsRef} className="scroll-mt-28 border-t border-border bg-card/50">
        <div className="max-w-7xl mx-auto px-4 py-10">
          {/* Toolbar */}
          <div className="flex items-center justify-between mb-8 gap-4">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-semibold text-foreground">
                {totalFilters > 0 ? `${filtered.length} Matching Carpet${filtered.length !== 1 ? "s" : ""}` : `All Carpets (${filtered.length})`}
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative w-56 hidden sm:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by name..."
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
            <div className="text-center py-24 bg-background rounded-3xl border border-border">
              <Search className="h-12 w-12 text-muted-foreground/30 mx-auto mb-4" />
              <p className="text-lg text-muted-foreground mb-2">No carpets match your selection</p>
              <p className="text-sm text-muted-foreground/70 mb-6">Try removing some filters</p>
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
                    className="group bg-background rounded-2xl overflow-hidden border border-border hover:shadow-elevated transition-all duration-300"
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
                        <span className="text-xs text-muted-foreground capitalize">{product.material} · {product.shape}</span>
                      </div>
                      <h3 className="font-semibold text-foreground text-base mb-3 group-hover:text-primary transition-colors leading-tight">
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
      </div>

      <Footer />
    </div>
  );
};

export default ShopCarpetsV3;

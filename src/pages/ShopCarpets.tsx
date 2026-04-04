import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, SlidersHorizontal, ChevronRight, Search } from "lucide-react";
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

// Filter data
const SHAPES = [
  { id: "rectangular", label: "Rectangular", image: shapeRectangular },
  { id: "round", label: "Round", image: shapeRound },
  { id: "square", label: "Square", image: shapeSquare },
  { id: "runner", label: "Runner", image: shapeRunner },
];

const SIZES = [
  { id: "small", label: "Small", subtitle: "Up to 120×170 cm", icon: "◻" },
  { id: "medium", label: "Medium", subtitle: "160×230 cm", icon: "◻" },
  { id: "large", label: "Large", subtitle: "200×290 cm", icon: "⬜" },
  { id: "xlarge", label: "Extra Large", subtitle: "250×350 cm", icon: "⬜" },
  { id: "oversized", label: "Oversized", subtitle: "300×400 cm+", icon: "⬛" },
  { id: "custom", label: "Custom Size", subtitle: "Made to order", icon: "✦" },
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
  { id: "multicolor", label: "Multi", hex: "linear-gradient(135deg, #E74C3C, #F1C40F, #2ECC71, #3498DB)" },
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
  { id: "wool", label: "Wool", image: materialWool, desc: "Soft & durable" },
  { id: "silk", label: "Silk", image: materialSilk, desc: "Luxurious sheen" },
  { id: "cotton", label: "Cotton", image: materialCotton, desc: "Light & easy care" },
  { id: "jute", label: "Jute", image: materialJute, desc: "Natural & eco" },
  { id: "synthetic", label: "Synthetic", image: materialSynthetic, desc: "Stain resistant" },
];

// Demo product data
const DEMO_PRODUCTS = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  name: `Handpicked ${["Persian", "Modern", "Bohemian", "Minimalist", "Traditional", "Luxury"][i % 6]} Carpet`,
  price: [1299, 899, 1599, 749, 2199, 1899, 999, 1449, 679, 1799, 1099, 2499][i],
  shape: SHAPES[i % 4].id,
  size: SIZES[i % 6].id,
  color: COLORS[i % 12].id,
  collection: COLLECTIONS[i % 6].id,
  material: MATERIALS[i % 5].id,
  image: COLLECTIONS[i % 6].image,
}));

type FilterCategory = "shape" | "size" | "color" | "collection" | "material";

const ShopCarpets = () => {
  const [activeFilters, setActiveFilters] = useState<Record<FilterCategory, string[]>>({
    shape: [],
    size: [],
    color: [],
    collection: [],
    material: [],
  });
  const [expandedFilter, setExpandedFilter] = useState<FilterCategory | null>("shape");
  const [searchQuery, setSearchQuery] = useState("");

  const toggleFilter = (category: FilterCategory, value: string) => {
    setActiveFilters((prev) => {
      const current = prev[category];
      return {
        ...prev,
        [category]: current.includes(value)
          ? current.filter((v) => v !== value)
          : [...current, value],
      };
    });
  };

  const clearAllFilters = () => {
    setActiveFilters({ shape: [], size: [], color: [], collection: [], material: [] });
    setSearchQuery("");
  };

  const totalActiveFilters = Object.values(activeFilters).flat().length;

  const filteredProducts = useMemo(() => {
    return DEMO_PRODUCTS.filter((product) => {
      const matchesSearch = !searchQuery || product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesShape = activeFilters.shape.length === 0 || activeFilters.shape.includes(product.shape);
      const matchesSize = activeFilters.size.length === 0 || activeFilters.size.includes(product.size);
      const matchesColor = activeFilters.color.length === 0 || activeFilters.color.includes(product.color);
      const matchesCollection = activeFilters.collection.length === 0 || activeFilters.collection.includes(product.collection);
      const matchesMaterial = activeFilters.material.length === 0 || activeFilters.material.includes(product.material);
      return matchesSearch && matchesShape && matchesSize && matchesColor && matchesCollection && matchesMaterial;
    });
  }, [activeFilters, searchQuery]);

  const filterSections: { key: FilterCategory; label: string }[] = [
    { key: "shape", label: "Shape" },
    { key: "size", label: "Size" },
    { key: "color", label: "Color" },
    { key: "collection", label: "Collection" },
    { key: "material", label: "Material" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Banner */}
      <section className="relative h-[280px] bg-gradient-to-r from-foreground/90 to-foreground/70 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={collectionLuxury} alt="" className="w-full h-full object-cover opacity-30" />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="font-heading text-4xl md:text-5xl text-white font-semibold mb-3">
            Shop All Carpets
          </h1>
          <p className="text-white/80 text-lg font-body max-w-xl mx-auto">
            Find your perfect carpet with our easy visual filters
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <div className="max-w-7xl mx-auto px-4 -mt-6 relative z-20">
        <div className="bg-background rounded-2xl shadow-lg border border-border p-3 flex items-center gap-3">
          <Search className="h-5 w-5 text-muted-foreground ml-2" />
          <Input
            placeholder="Search carpets by name, style, or keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border-0 shadow-none focus-visible:ring-0 text-base"
          />
          {totalActiveFilters > 0 && (
            <Button variant="ghost" size="sm" onClick={clearAllFilters} className="whitespace-nowrap text-muted-foreground">
              <X className="h-4 w-4 mr-1" /> Clear all ({totalActiveFilters})
            </Button>
          )}
        </div>
      </div>

      {/* Active Filter Tags */}
      <AnimatePresence>
        {totalActiveFilters > 0 && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="max-w-7xl mx-auto px-4 mt-4 overflow-hidden"
          >
            <div className="flex flex-wrap gap-2">
              {Object.entries(activeFilters).map(([category, values]) =>
                values.map((value) => (
                  <motion.button
                    key={`${category}-${value}`}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    onClick={() => toggleFilter(category as FilterCategory, value)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors"
                  >
                    <span className="capitalize">{value.replace("-", " ")}</span>
                    <X className="h-3 w-3" />
                  </motion.button>
                ))
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar */}
          <aside className="lg:w-[380px] shrink-0">
            <div className="sticky top-24 space-y-2">
              <div className="flex items-center gap-2 mb-4">
                <SlidersHorizontal className="h-5 w-5 text-primary" />
                <h2 className="font-heading text-xl font-semibold text-foreground">Filters</h2>
              </div>

              {filterSections.map(({ key, label }) => (
                <div key={key} className="border border-border rounded-xl overflow-hidden bg-card">
                  <button
                    onClick={() => setExpandedFilter(expandedFilter === key ? null : key)}
                    className="w-full flex items-center justify-between p-4 hover:bg-muted/50 transition-colors"
                  >
                    <span className="font-medium text-foreground flex items-center gap-2">
                      {label}
                      {activeFilters[key].length > 0 && (
                        <span className="text-xs bg-primary text-primary-foreground rounded-full px-2 py-0.5">
                          {activeFilters[key].length}
                        </span>
                      )}
                    </span>
                    <ChevronRight
                      className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${
                        expandedFilter === key ? "rotate-90" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {expandedFilter === key && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="p-4 pt-0">
                          {/* Shape Filter - Image Cards */}
                          {key === "shape" && (
                            <div className="grid grid-cols-2 gap-3">
                              {SHAPES.map((shape) => (
                                <button
                                  key={shape.id}
                                  onClick={() => toggleFilter("shape", shape.id)}
                                  className={`group relative rounded-xl overflow-hidden aspect-square border-2 transition-all duration-200 ${
                                    activeFilters.shape.includes(shape.id)
                                      ? "border-primary shadow-md ring-2 ring-primary/20"
                                      : "border-transparent hover:border-primary/30"
                                  }`}
                                >
                                  <img
                                    src={shape.image}
                                    alt={shape.label}
                                    loading="lazy"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                  <span className="absolute bottom-2 left-0 right-0 text-center text-white font-medium text-sm">
                                    {shape.label}
                                  </span>
                                  {activeFilters.shape.includes(shape.id) && (
                                    <div className="absolute top-2 right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                                      <svg className="w-3.5 h-3.5 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                      </svg>
                                    </div>
                                  )}
                                </button>
                              ))}
                            </div>
                          )}

                          {/* Size Filter - Clean Cards */}
                          {key === "size" && (
                            <div className="grid grid-cols-2 gap-2">
                              {SIZES.map((size) => (
                                <button
                                  key={size.id}
                                  onClick={() => toggleFilter("size", size.id)}
                                  className={`p-3 rounded-xl border-2 text-left transition-all duration-200 ${
                                    activeFilters.size.includes(size.id)
                                      ? "border-primary bg-primary/5 shadow-sm"
                                      : "border-border hover:border-primary/30 bg-background"
                                  }`}
                                >
                                  <div className="text-2xl mb-1">{size.icon}</div>
                                  <div className="font-medium text-sm text-foreground">{size.label}</div>
                                  <div className="text-xs text-muted-foreground">{size.subtitle}</div>
                                </button>
                              ))}
                            </div>
                          )}

                          {/* Color Filter - Large Swatches */}
                          {key === "color" && (
                            <div className="grid grid-cols-4 gap-3">
                              {COLORS.map((color) => (
                                <button
                                  key={color.id}
                                  onClick={() => toggleFilter("color", color.id)}
                                  className="flex flex-col items-center gap-1.5 group"
                                >
                                  <div
                                    className={`w-14 h-14 rounded-full border-2 transition-all duration-200 relative ${
                                      activeFilters.color.includes(color.id)
                                        ? "border-primary scale-110 shadow-lg"
                                        : "border-border hover:border-primary/40 hover:scale-105"
                                    }`}
                                    style={{
                                      background: color.hex.startsWith("linear") ? color.hex : color.hex,
                                      boxShadow: activeFilters.color.includes(color.id)
                                        ? `0 4px 14px ${color.hex}40`
                                        : undefined,
                                    }}
                                  >
                                    {activeFilters.color.includes(color.id) && (
                                      <div className="absolute inset-0 flex items-center justify-center">
                                        <svg className="w-5 h-5 text-white drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                      </div>
                                    )}
                                  </div>
                                  <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                                    {color.label}
                                  </span>
                                </button>
                              ))}
                            </div>
                          )}

                          {/* Collection Filter - Image Cards */}
                          {key === "collection" && (
                            <div className="grid grid-cols-2 gap-3">
                              {COLLECTIONS.map((col) => (
                                <button
                                  key={col.id}
                                  onClick={() => toggleFilter("collection", col.id)}
                                  className={`group relative rounded-xl overflow-hidden aspect-[4/3] border-2 transition-all duration-200 ${
                                    activeFilters.collection.includes(col.id)
                                      ? "border-primary shadow-md ring-2 ring-primary/20"
                                      : "border-transparent hover:border-primary/30"
                                  }`}
                                >
                                  <img
                                    src={col.image}
                                    alt={col.label}
                                    loading="lazy"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                  <span className="absolute bottom-2 left-0 right-0 text-center text-white font-medium text-sm">
                                    {col.label}
                                  </span>
                                  {activeFilters.collection.includes(col.id) && (
                                    <div className="absolute top-2 right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                                      <svg className="w-3.5 h-3.5 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                      </svg>
                                    </div>
                                  )}
                                </button>
                              ))}
                            </div>
                          )}

                          {/* Material Filter - Image + Description Cards */}
                          {key === "material" && (
                            <div className="space-y-2">
                              {MATERIALS.map((mat) => (
                                <button
                                  key={mat.id}
                                  onClick={() => toggleFilter("material", mat.id)}
                                  className={`w-full flex items-center gap-3 p-2 rounded-xl border-2 transition-all duration-200 ${
                                    activeFilters.material.includes(mat.id)
                                      ? "border-primary bg-primary/5 shadow-sm"
                                      : "border-border hover:border-primary/30 bg-background"
                                  }`}
                                >
                                  <img
                                    src={mat.image}
                                    alt={mat.label}
                                    loading="lazy"
                                    className="w-16 h-16 rounded-lg object-cover"
                                  />
                                  <div className="text-left">
                                    <div className="font-medium text-foreground">{mat.label}</div>
                                    <div className="text-xs text-muted-foreground">{mat.desc}</div>
                                  </div>
                                  {activeFilters.material.includes(mat.id) && (
                                    <div className="ml-auto mr-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center shrink-0">
                                      <svg className="w-3.5 h-3.5 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                      </svg>
                                    </div>
                                  )}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </aside>

          {/* Product Grid */}
          <main className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">{filteredProducts.length}</span> carpets found
              </p>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-xl text-muted-foreground mb-4">No carpets match your filters</p>
                <Button variant="outline" onClick={clearAllFilters}>
                  Clear all filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product, i) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300"
                  >
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 bg-background/90 backdrop-blur-sm rounded-full text-xs font-medium text-foreground capitalize">
                          {product.collection}
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-heading font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                        <span className="capitalize">{product.shape}</span>
                        <span>•</span>
                        <span className="capitalize">{product.material}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-foreground">
                          AED {product.price.toLocaleString()}
                        </span>
                        <Button size="sm" variant="outline" className="rounded-full text-xs">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ShopCarpets;

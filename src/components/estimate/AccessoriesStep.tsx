import { motion } from "framer-motion";
import { Plus, Minus, Package } from "lucide-react";
import { Accessory } from "./types";

interface AccessoriesStepProps {
  accessories: Accessory[];
  selected: Record<string, number>;
  onToggle: (id: string, qty: number) => void;
  isDoubleLayer: boolean;
  isBlinds: boolean;
}

const AccessoriesStep = ({
  accessories,
  selected,
  onToggle,
  isDoubleLayer,
  isBlinds,
}: AccessoriesStepProps) => {
  const filtered = accessories.filter((a) => {
    if (a.onlyFor === "curtain" && isBlinds) return false;
    if (a.onlyFor === "blind" && !isBlinds) return false;
    return true;
  });

  const priceLabel = (acc: Accessory) => {
    const displayPrice =
      acc.priceType === "fixed" && isDoubleLayer && acc.priceDouble
        ? acc.priceDouble
        : acc.price;
    const suffix = {
      fixed: "",
      "per-meter-width": " per meter",
      "per-unit": " each",
      "per-curtain": " per curtain",
      "per-side": " per side",
      "blind-area": " per m²",
    }[acc.priceType];
    return `AED ${displayPrice}${suffix}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="max-w-2xl mx-auto"
    >
      <h2 className="font-serif text-3xl md:text-4xl text-center mb-2">
        Optional Accessories
      </h2>
      <p className="text-muted-foreground text-center mb-10 font-sans">
        Enhance your setup with premium add-ons
      </p>

      <div className="space-y-3">
        {filtered.map((acc) => {
          const qty = selected[acc.id] || 0;
          const isActive = qty > 0;
          const max = acc.maxQty ?? 1;

          return (
            <div
              key={acc.id}
              className={`rounded-xl border-2 p-4 transition-all duration-200 ${
                isActive ? "border-primary bg-primary/5" : "border-border bg-card"
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <Package className="w-4 h-4 text-primary shrink-0" />
                    <h4 className="font-sans font-medium text-sm truncate">{acc.name}</h4>
                  </div>
                  <p className="text-[11px] text-muted-foreground font-sans mt-0.5 ml-6">
                    {acc.description}
                  </p>
                  <p className="text-xs text-primary font-sans mt-1 ml-6">
                    {priceLabel(acc)}
                  </p>
                </div>
                <div className="shrink-0">
                  {max > 1 ? (
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onToggle(acc.id, Math.max(0, qty - 1))}
                        className="w-8 h-8 rounded-lg border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-medium w-6 text-center font-sans">
                        {qty}
                      </span>
                      <button
                        onClick={() => onToggle(acc.id, Math.min(max, qty + 1))}
                        className="w-8 h-8 rounded-lg border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => onToggle(acc.id, isActive ? 0 : 1)}
                      className={`w-12 h-7 rounded-full transition-colors duration-200 relative ${
                        isActive ? "bg-primary" : "bg-muted"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-full bg-white shadow-sm absolute top-1 transition-transform duration-200 ${
                          isActive ? "translate-x-6" : "translate-x-1"
                        }`}
                      />
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <p className="text-xs text-center text-muted-foreground font-sans mt-6">
        All accessories are optional — skip if not needed
      </p>
    </motion.div>
  );
};

export default AccessoriesStep;

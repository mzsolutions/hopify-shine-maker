import { motion } from "framer-motion";
import { MapPin, Info } from "lucide-react";
import { Category, Subcategory, Accessory } from "./types";
import { calculateBasePrice, calculateAccessoryPrice } from "./pricing";

interface EstimateResultProps {
  category: Category;
  subcategory: Subcategory;
  width: string;
  height: string;
  selectedAccessories: Record<string, number>;
  accessories: Accessory[];
}

const EstimateResult = ({
  category,
  subcategory,
  width,
  height,
  selectedAccessories,
  accessories,
}: EstimateResultProps) => {
  const wCm = parseFloat(width) || 100;
  const hCm = parseFloat(height) || 100;
  const isQuote = subcategory.formula === "quote";
  const isDoubleLayer = !!subcategory.isDoubleLayer;

  const basePrice = isQuote ? null : calculateBasePrice(subcategory, wCm, hCm);

  const accessoryItems = Object.entries(selectedAccessories)
    .filter(([, qty]) => qty > 0)
    .map(([id, qty]) => {
      const acc = accessories.find((a) => a.id === id)!;
      const total = calculateAccessoryPrice(acc, qty, wCm, hCm, isDoubleLayer);
      return { ...acc, qty, total };
    });

  const accessoriesTotal = accessoryItems.reduce((sum, a) => sum + a.total, 0);
  const grandTotal = basePrice != null ? basePrice + accessoriesTotal : null;

  const whatsappText = isQuote
    ? `Hi! I'd like a quote for ${category.name} ${subcategory.name}. Window size: ${width || "TBD"}×${height || "TBD"} cm.`
    : `Hi! I'd like to book a free home visit. Product: ${category.name} ${subcategory.name}, Size: ${width}×${height} cm, Estimated: AED ${grandTotal?.toLocaleString()}.`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="max-w-3xl mx-auto"
    >
      <h2 className="font-serif text-3xl md:text-4xl text-center mb-10">
        {isQuote ? "Request a Quote" : "Your Estimate"}
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Product Card */}
        <div className="rounded-2xl overflow-hidden border border-border shadow-soft">
          <img
            src={subcategory.image}
            alt={subcategory.name}
            className="w-full aspect-[4/3] object-cover"
          />
          <div className="p-5 bg-card">
            <p className="text-xs text-primary font-medium uppercase tracking-wider font-sans mb-1">
              {category.name} Style
            </p>
            <h3 className="font-serif text-xl">{subcategory.name}</h3>
            <p className="text-sm text-muted-foreground mt-1 font-sans">
              {subcategory.description}
            </p>
            {!isQuote && (
              <div className="flex items-center gap-3 mt-3 text-sm text-muted-foreground font-sans">
                <span>
                  {width} × {height} cm
                </span>
                <span>•</span>
                <span>{((wCm / 100) * (hCm / 100)).toFixed(2)} m²</span>
              </div>
            )}
          </div>
        </div>

        {/* Pricing Panel */}
        <div className="space-y-4">
          {isQuote ? (
            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <div className="flex items-center gap-2 mb-4">
                <Info className="w-5 h-5 text-primary" />
                <span className="font-serif text-lg">Custom Pricing</span>
              </div>
              <p className="text-sm text-muted-foreground font-sans">
                This product requires a custom quote based on your specific
                requirements. Our team will provide detailed pricing after a
                complimentary site visit.
              </p>
            </div>
          ) : (
            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <span className="font-serif text-lg block mb-4">Price Breakdown</span>
              <div className="space-y-2 font-sans text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{subcategory.name}</span>
                  <span>AED {basePrice!.toLocaleString()}</span>
                </div>
                {accessoryItems.map((a) => (
                  <div key={a.id} className="flex justify-between">
                    <span className="text-muted-foreground">
                      {a.name}
                      {a.qty > 1 && ` ×${a.qty}`}
                    </span>
                    <span>AED {a.total.toLocaleString()}</span>
                  </div>
                ))}
                <div className="border-t border-border pt-3 flex justify-between items-end mt-2">
                  <span className="font-medium">Estimated Total</span>
                  <span className="text-2xl font-serif text-primary">
                    AED {grandTotal!.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Book Visit CTA */}
          <motion.a
            href={`https://wa.me/971501234567?text=${encodeURIComponent(whatsappText)}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-primary text-primary-foreground font-medium text-base shadow-warm hover:shadow-elevated transition-all font-sans"
          >
            <MapPin className="w-5 h-5" />
            Book a Free Home Visit
          </motion.a>

          <div className="space-y-2 text-[11px] text-muted-foreground font-sans">
            <p className="flex items-start gap-1.5">
              <span className="text-primary mt-0.5">*</span>
              Estimate is indicative. Final price confirmed after site
              measurement by our team.
            </p>
            <p className="flex items-start gap-1.5">
              <span className="text-primary mt-0.5">*</span>
              Minimum 1 meter width applies for pricing.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EstimateResult;

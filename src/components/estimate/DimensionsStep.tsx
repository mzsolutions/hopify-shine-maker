import { motion } from "framer-motion";
import { Ruler } from "lucide-react";

interface DimensionsStepProps {
  width: string;
  height: string;
  onWidthChange: (v: string) => void;
  onHeightChange: (v: string) => void;
}

const DimensionsStep = ({ width, height, onWidthChange, onHeightChange }: DimensionsStepProps) => {
  const w = parseFloat(width);
  const h = parseFloat(height);
  const valid = !isNaN(w) && !isNaN(h) && w > 0 && h > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="max-w-xl mx-auto"
    >
      <h2 className="font-serif text-3xl md:text-4xl text-center mb-2">Enter Dimensions</h2>
      <p className="text-muted-foreground text-center mb-10 font-sans">
        Measure your window width and height in centimeters
      </p>

      <div className="bg-card rounded-2xl border border-border p-8 shadow-soft">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center">
            <Ruler className="w-4 h-4 text-primary" />
          </div>
          <span className="font-serif text-lg">Window Size</span>
        </div>

        <div className="flex items-end gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-muted-foreground mb-2 font-sans">
              Width
            </label>
            <div className="relative">
              <input
                type="number"
                value={width}
                onChange={(e) => onWidthChange(e.target.value)}
                placeholder="200"
                min="1"
                className="w-full h-14 rounded-xl border border-input bg-background px-4 pr-12 text-lg font-sans focus:outline-none focus:ring-2 focus:ring-ring transition-all"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-muted-foreground font-sans">
                cm
              </span>
            </div>
          </div>
          <span className="text-2xl text-muted-foreground mb-3 font-sans">×</span>
          <div className="flex-1">
            <label className="block text-sm font-medium text-muted-foreground mb-2 font-sans">
              Height
            </label>
            <div className="relative">
              <input
                type="number"
                value={height}
                onChange={(e) => onHeightChange(e.target.value)}
                placeholder="300"
                min="1"
                className="w-full h-14 rounded-xl border border-input bg-background px-4 pr-12 text-lg font-sans focus:outline-none focus:ring-2 focus:ring-ring transition-all"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-muted-foreground font-sans">
                cm
              </span>
            </div>
          </div>
        </div>

        {valid && (
          <div className="mt-4 space-y-1">
            <p className="text-sm text-muted-foreground font-sans">
              Area: {((w / 100) * (h / 100)).toFixed(2)} m²
            </p>
            {w < 100 && (
              <p className="text-xs text-primary font-sans">
                * Minimum width of 1m will be applied for pricing
              </p>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default DimensionsStep;

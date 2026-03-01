import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Category } from "./types";

interface SubcategoryStepProps {
  category: Category;
  selected: string | null;
  onSelect: (id: string) => void;
}

const SubcategoryStep = ({ category, selected, onSelect }: SubcategoryStepProps) => {
  const isBlinds = category.id === "blinds";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="font-serif text-3xl md:text-4xl text-center mb-2">
        Select {category.name} Type
      </h2>
      <p className="text-muted-foreground text-center mb-10 font-sans">
        {isBlinds
          ? "Choose from our range of blind styles"
          : `Pick the fabric type for your ${category.name.toLowerCase()} curtains`}
      </p>
      <div
        className={`grid gap-4 max-w-4xl mx-auto ${
          isBlinds
            ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            : "md:grid-cols-3"
        }`}
      >
        {category.subcategories.map((sub) => (
          <button
            key={sub.id}
            onClick={() => onSelect(sub.id)}
            className={`group relative rounded-xl overflow-hidden border-2 transition-all duration-300 text-left hover:-translate-y-1 ${
              selected === sub.id
                ? "border-primary shadow-warm"
                : "border-border hover:border-primary/40"
            }`}
          >
            <div
              className={`overflow-hidden ${isBlinds ? "aspect-square" : "aspect-[4/3]"}`}
            >
              <img
                src={sub.image}
                alt={sub.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-4 bg-card">
              <h3 className="font-serif text-sm md:text-base">{sub.name}</h3>
              <p className="text-[11px] text-muted-foreground font-sans mt-0.5 line-clamp-2">
                {sub.description}
              </p>
              {sub.subOptions && (
                <div className="flex flex-wrap gap-1 mt-2">
                  {sub.subOptions.map((opt) => (
                    <span
                      key={opt}
                      className="text-[9px] px-1.5 py-0.5 rounded-full bg-secondary text-secondary-foreground font-sans"
                    >
                      {opt}
                    </span>
                  ))}
                </div>
              )}
              {sub.formula !== "quote" && sub.rate && (
                <p className="text-xs font-medium text-primary mt-2 font-sans">
                  From AED {sub.rate}
                  {sub.formula === "curtain" ? "/m" : "/m²"}
                </p>
              )}
              {sub.formula === "quote" && (
                <p className="text-[11px] font-medium text-muted-foreground mt-2 font-sans italic">
                  Request quote
                </p>
              )}
            </div>
            {selected === sub.id && (
              <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-primary-foreground" />
              </div>
            )}
          </button>
        ))}
      </div>
    </motion.div>
  );
};

export default SubcategoryStep;

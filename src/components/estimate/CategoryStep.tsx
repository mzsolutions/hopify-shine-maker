import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Category } from "./types";

interface CategoryStepProps {
  categories: Category[];
  selected: string | null;
  onSelect: (id: string) => void;
}

const CategoryStep = ({ categories, selected, onSelect }: CategoryStepProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
  >
    <h2 className="font-serif text-3xl md:text-4xl text-center mb-2">Choose Your Style</h2>
    <p className="text-muted-foreground text-center mb-10 font-sans">
      Select the curtain or blind category
    </p>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onSelect(cat.id)}
          className={`group relative rounded-xl overflow-hidden border-2 transition-all duration-300 text-left hover:-translate-y-1 ${
            selected === cat.id
              ? "border-primary shadow-warm"
              : "border-border hover:border-primary/40"
          }`}
        >
          <div className="aspect-square overflow-hidden">
            <img
              src={cat.subcategories[0].image}
              alt={cat.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-4 bg-card">
            <h3 className="font-serif text-base md:text-lg">{cat.name}</h3>
            <p className="text-xs text-muted-foreground font-sans mt-0.5 line-clamp-2">
              {cat.description}
            </p>
          </div>
          {selected === cat.id && (
            <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-primary flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4 text-primary-foreground" />
            </div>
          )}
        </button>
      ))}
    </div>
  </motion.div>
);

export default CategoryStep;

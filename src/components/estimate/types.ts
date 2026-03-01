export type PriceFormula = "curtain" | "blind-area" | "quote";

export interface Subcategory {
  id: string;
  name: string;
  image: string;
  description: string;
  formula: PriceFormula;
  rate?: number;
  minPrice?: number;
  isDoubleLayer?: boolean;
  subOptions?: string[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  subcategories: Subcategory[];
}

export interface Accessory {
  id: string;
  name: string;
  description: string;
  priceType: "fixed" | "per-meter-width" | "per-unit" | "per-curtain" | "per-side" | "blind-area";
  price: number;
  priceDouble?: number;
  onlyFor?: "curtain" | "blind";
  maxQty?: number;
}

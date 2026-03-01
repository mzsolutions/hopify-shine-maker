import { Subcategory, Accessory } from "./types";

/**
 * Calculate base price for a curtain or blind.
 *
 * Curtain formula:
 *   height ≤ 300 cm → rate × widthM
 *   height > 300 cm → rate × widthM × heightCm / 300
 *   Minimum 1m width applied.
 *
 * Blind-area formula:
 *   rate × widthM × heightM
 *   Minimum 1m width applied.
 */
export function calculateBasePrice(
  sub: Subcategory,
  widthCm: number,
  heightCm: number
): number | null {
  if (sub.formula === "quote" || sub.rate == null) return null;

  const widthM = Math.max(widthCm / 100, 1);

  if (sub.formula === "curtain") {
    let price: number;
    if (heightCm <= 300) {
      price = sub.rate * widthM;
    } else {
      price = (sub.rate * widthM * heightCm) / 300;
    }
    return Math.max(Math.round(price), sub.minPrice ?? 0);
  }

  if (sub.formula === "blind-area") {
    const heightM = Math.max(heightCm / 100, 1);
    return Math.round(sub.rate * widthM * heightM);
  }

  return null;
}

export function calculateAccessoryPrice(
  accessory: Accessory,
  qty: number,
  widthCm: number,
  heightCm: number,
  isDoubleLayer: boolean
): number {
  const widthM = Math.max(widthCm / 100, 1);
  const heightM = Math.max(heightCm / 100, 1);

  switch (accessory.priceType) {
    case "fixed":
      return (isDoubleLayer && accessory.priceDouble ? accessory.priceDouble : accessory.price) * qty;
    case "per-meter-width":
      return Math.round(accessory.price * widthM) * qty;
    case "per-unit":
    case "per-curtain":
    case "per-side":
      return accessory.price * qty;
    case "blind-area":
      return Math.round(accessory.price * widthM * heightM) * qty;
    default:
      return 0;
  }
}

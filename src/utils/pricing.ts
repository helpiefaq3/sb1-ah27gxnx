// Base price per resume
const BASE_PRICE = 25;

// Volume discount tiers
const VOLUME_DISCOUNTS = [
  { min: 3, discount: 0.15 }, // 15% off for 3+ resumes
  { min: 5, discount: 0.25 }, // 25% off for 5+ resumes
  { min: 10, discount: 0.35 }, // 35% off for 10+ resumes
];

export function getPrice(quantity: number): number {
  // Find the applicable discount
  const discount = VOLUME_DISCOUNTS
    .reverse()
    .find(tier => quantity >= tier.min)?.discount || 0;

  // Calculate price with discount
  return Math.round(BASE_PRICE * (1 - discount));
}

export function getSavings(quantity: number): number {
  const regularPrice = BASE_PRICE * quantity;
  const discountedPrice = getPrice(quantity) * quantity;
  return regularPrice - discountedPrice;
}
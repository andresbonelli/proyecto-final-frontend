// round difference between price and old_price
// into a fixed percentage, eg:5%, 10%, 15%, etc..
export function calculateDiscountPerc(
  old_price: number,
  price: number
): number {
  const discountPercentage = ((old_price - price) / old_price) * 100;

  const roundedDiscount = Math.round(discountPercentage / 5) * 5;

  return roundedDiscount;
}

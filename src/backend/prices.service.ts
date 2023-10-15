import { Price } from "./types.ts";

export const calculatePricePer100g = (
  unit: "g" | "kg",
  amount: number,
  price: number,
) => {
  const gramsAmount = unit === "g" ? amount / 100 : amount * 10;
  return price / gramsAmount;
};

export const findCheapest = (prices: Price[]) => {
  if (prices.length === 0) {
    // Handle the case when there are no prices.
    return undefined;
  }

  const { cheapestPricePer100g, cheapestShopLink, total } = prices.reduce(
    (acc, { amount, link, unit, price }) => {
      const pricePer100g = calculatePricePer100g(unit, amount, price);

      if (pricePer100g < acc.cheapestPricePer100g) {
        return {
          cheapestPricePer100g: pricePer100g,
          cheapestShopLink: link,
          total: acc.total + pricePer100g,
        };
      }

      return { ...acc, total: acc.total + pricePer100g };
    },
    { cheapestPricePer100g: Infinity, cheapestShopLink: "", total: 0 },
  );

  return {
    cheapestPricePer100g,
    cheapestShopLink,
    averagePricePer100g: total / prices.length,
  };
};

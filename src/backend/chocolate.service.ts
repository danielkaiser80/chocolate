import { chocolateData } from "./chocolate-data.ts";
import { findCheapest } from "./prices.service.ts";

export const findChocolate = (id: string) => {
  const filtered = chocolateData.data.filter((c) => c.id === id);
  if (filtered.length === 0) return undefined;

  // according to the spec, there should be no duplicated IDs
  const chocolate = filtered[0];

  const cheapestPricePer100g = findCheapest(chocolate.prices)
    ?.cheapestPricePer100g;

  return { ...chocolate, cheapestPricePer100g };
};

import { Chocolate, Price } from "./types.ts";

/**
 * We 'enhance' an array of chocolate elements, so that we can show it in our app on the starting page.
 * @param data the chocolate input
 */
export const getChocolatesWithInfo = (data: Chocolate[]) =>
  data.map(({ brand, id, name, prices }) => ({
    id: id,
    name: name,
    brand: brand,
    priceInfo: findCheapest(prices),
  }));

const findCheapest = (prices: Price[]) => {
  if (prices.length === 0) {
    // Handle the case when there are no prices.
    return undefined;
  }

  const { cheapestPricePer100g, cheapestShopLink, total } = prices.reduce(
    (acc, { amount, link, unit, price }) => {
      const gramsAmount = unit === "g" ? amount / 100 : amount * 10;
      const pricePer100g = price / gramsAmount;

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

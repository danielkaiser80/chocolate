import { Chocolate } from "./types.ts";
import { findCheapest } from "./prices.service.ts";

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

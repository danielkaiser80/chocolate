import { getChocolatesWithInfo } from "./chocolates.service";
import { describe, expect } from "vitest";

describe("Calculate chocolate information correctly", () => {
  it("should calculate the cheapest & average prices correctly", () => {
    const chocolatesWithInfo = getChocolatesWithInfo([
      {
        id: "1",
        name: "Sesam",
        brand: "Ritter-Sport",
        currency: "EUR",
        prices: [
          {
            price: 2,
            shop: "REWE",
            link: "https://example.com/rs-sesam-re",
            unit: "g",
            amount: 200,
          },
          {
            price: 1,
            shop: "REWE",
            link: "https://example.com/rs-sesam-xx",
            unit: "g",
            amount: 100,
          },
        ],
        nutrition: {
          fat: {
            total: 38,
            saturated: 19,
          },
          carbohydrates: {
            total: 42,
            sugar: 40,
          },
          protein: 11,
          salt: 1,
        },
      },
      {
        id: "2",
        name: "Marzipan",
        brand: "Ritter-Sport",
        currency: "EUR",
        prices: [
          {
            price: 1.19,
            shop: "Ritter-Sport",
            link: "https://example.com/rs-marzipan-rs",
            unit: "g",
            amount: 100,
          },
          {
            price: 1.19,
            shop: "Amazon",
            link: "https://example.com/rs-marzipan-am",
            unit: "g",
            amount: 100,
          },
          {
            price: 2.19,
            shop: "REWE",
            link: "https://example.com/rs-marzipan-re",
            unit: "g",
            amount: 200,
          },
          {
            price: 2,
            shop: "Edeka",
            link: "https://example.com/rs-marzipan-ed",
            unit: "kg",
            amount: 0.2,
          },
        ],
        nutrition: {
          fat: {
            total: 28,
            saturated: 13,
          },
          carbohydrates: {
            total: 53,
            sugar: 52,
          },
          protein: 6,
          salt: 2,
        },
      },
    ]);
    expect(chocolatesWithInfo.length).toEqual(2);
    expect(chocolatesWithInfo).toEqual([
      {
        id: "1",
        name: "Sesam",
        brand: "Ritter-Sport",
        priceInfo: {
          cheapestPricePer100g: 1,
          cheapestShopLink: "https://example.com/rs-sesam-re",
          averagePricePer100g: 1,
        },
      },
      {
        id: "2",
        name: "Marzipan",
        brand: "Ritter-Sport",
        priceInfo: {
          cheapestPricePer100g: 1,
          cheapestShopLink: "https://example.com/rs-marzipan-ed",
          averagePricePer100g: 1.11875,
        },
      },
    ]);
  });

  it("should calculate the cheapest & average prices correctly", () => {
    const chocolatesWithInfo = getChocolatesWithInfo([
      {
        id: "1",
        name: "Sesam",
        brand: "Ritter-Sport",
        currency: "EUR",
        prices: [],
        nutrition: {
          fat: {
            total: 38,
            saturated: 19,
          },
          carbohydrates: {
            total: 42,
            sugar: 40,
          },
          protein: 11,
          salt: 1,
        },
      },
    ]);
    expect(chocolatesWithInfo).toEqual([
      {
        id: "1",
        name: "Sesam",
        brand: "Ritter-Sport",
        priceInfo: undefined,
      },
    ]);
  });
});

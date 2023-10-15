import { describe, expect } from "vitest";
import { findChocolate } from "./chocolate.service.ts";

describe("Retrieve chocolate information correctly", () => {
  it("find a specific chocolate", () => {
    const chocolate = findChocolate("1");
    expect(chocolate?.name).toEqual("Sesam");
    expect(chocolate?.cheapestPricePer100g).toEqual(1.745);
  });

  it("should not find non existing chocolate", () => {
    const chocolate = findChocolate("XYZ");
    expect(chocolate).not.toBeDefined();
  });
});

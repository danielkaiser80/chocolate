import ChocolateCard from "./ChocolateCard.tsx";
import { render } from "@testing-library/react";
import { describe } from "vitest";

describe(ChocolateCard, () => {
  it("should render non available chocolate", () => {
    const result = render(
      <ChocolateCard brand={"Ritter Sport"} name={"Alpenmilch"} />,
    );
    expect(result).toMatchSnapshot();
  });

  it("should render available chocolate", () => {
    const result = render(
      <ChocolateCard
        brand={"Ritter Sport"}
        name={"Alpenmilch"}
        priceInfo={{
          averagePricePer100g: 1.01,
          cheapestShopLink: "http://example.com/test",
          cheapestPricePer100g: 0.99,
        }}
      />,
    );
    expect(result).toMatchSnapshot();
  });
});

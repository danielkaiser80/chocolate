import { render } from "@testing-library/react";
import PriceCard from "./PriceCard.tsx";

describe(PriceCard, () => {
  const price = {
    price: 2.09,
    shop: "Ritter-Sport",
    link: "https://example.com/rs-sesam-rs",
    unit: "g" as const,
    amount: 100,
  };

  it("should highlight correctly", () => {
    const result = render(
      <PriceCard price={price} cheapestPricePer100g={2.09} />,
    );
    expect(result).toMatchSnapshot();
  });

  it("should not highlight correctly", () => {
    const result = render(<PriceCard price={price} />);
    expect(result).toMatchSnapshot();
  });
});

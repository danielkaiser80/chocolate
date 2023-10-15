import { render } from "@testing-library/react";
import ChocolateDetail from "./ChocolateDetail.tsx";

describe(ChocolateDetail, () => {
  it("should render the detail view correctly", () => {
    const result = render(<ChocolateDetail id="1" />);
    expect(result).toMatchSnapshot();
  });

  it("should render the detail view correctly for not found", () => {
    const result = render(<ChocolateDetail id="XYZ" />);
    expect(result).toMatchSnapshot();
  });
});

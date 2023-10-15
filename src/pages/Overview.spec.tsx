import { render } from "@testing-library/react";
import Overview from "./Overview.tsx";

describe(Overview, () => {
  it("should render the overview correctly", () => {
    const result = render(<Overview />);
    expect(result).toMatchSnapshot();
  });
});

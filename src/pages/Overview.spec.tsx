import { render } from "@testing-library/react";
import Overview from "./Overview.tsx";

describe(Overview, () => {
  it("should render the header correctly", () => {
    const result = render(<Overview />);
    expect(result).toMatchSnapshot();
  });
});

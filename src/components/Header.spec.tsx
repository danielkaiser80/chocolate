import { render } from "@testing-library/react";
import { describe } from "vitest";
import Header from "./Header.tsx";

describe(Header, () => {
  it("should render the header correctly", () => {
    const result = render(<Header />);
    expect(result).toMatchSnapshot();
  });
});

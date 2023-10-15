import { describe, expect } from "vitest";
import { chocolateData } from "./chocolate-data.ts";

const EXPECTED_AMOUNT = 10;
describe("Verify the mock data for chocolate", () => {
  it("should count chocolate types correctly", () => {
    expect(chocolateData.pagination.total).toEqual(EXPECTED_AMOUNT);
    expect(chocolateData.data.length).toEqual(EXPECTED_AMOUNT);
  });
});

import { chocolateData } from "./chocolate-data.ts";

export const findChocolate = (id: string) => {
  const filtered = chocolateData.data.filter((c) => c.id === id);
  if (filtered.length === 0) return undefined;

  // according to the spec, there should be no duplicated IDs
  return filtered[0];
};

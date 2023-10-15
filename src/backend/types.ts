export interface Price {
  price: number;
  shop: string;
  link: string;
  unit: "g" | "kg";
  amount: number;
}

export interface Chocolate {
  id: string;
  name: string;
  brand: string;
  currency: "EUR";
  prices: Price[];
  nutrition: {
    fat: {
      total: number;
      saturated: number;
    };
    carbohydrates: {
      total: number;
      sugar: number;
    };
    protein: number;
    salt: number;
  };
}

export interface Pagination {
  offset: number;
  limit: number;
  total: number;
}

export interface ChocolateData {
  pagination: Pagination;
  data: Chocolate[];
}

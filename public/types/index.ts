export interface Product  {
  key: string;
  value: string;
};

export interface Price {
  key: string;
  value: number;
};

export interface CategoryProducts {
  ATK: Product[];
  FURNITURE: Product[];
};

export interface CategoryPrices {
  ATK: Price[];
  FURNITURE: Price[];
};

export type Category = 'All' | 'Office Equipment' | 'Furniture';

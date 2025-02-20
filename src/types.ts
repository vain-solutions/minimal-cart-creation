
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export type ProductSize = 'S' | 'M' | 'L' | 'XL';

export interface CartItem extends Product {
  size: ProductSize;
  quantity: number;
}

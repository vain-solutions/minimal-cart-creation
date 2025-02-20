
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  video: string;  // Changed from image to video
}

export type ProductSize = 'S' | 'M' | 'L' | 'XL';

export interface CartItem extends Product {
  size: ProductSize;
  quantity: number;
}

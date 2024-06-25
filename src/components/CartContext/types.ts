import { Product } from '@components/CardService/types';

export interface CartContextValue {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
}
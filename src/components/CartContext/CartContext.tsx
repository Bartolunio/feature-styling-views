import { createContext, useState, useContext, ReactNode } from 'react';
import { Product } from '../CardService/types';
import { CartContextValue } from './types';

const CartContext = createContext<CartContextValue>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateCartItemQuantity: () => {},
  totalAmount: 0,
  quantities: {},
});

export const useCart = () => useContext(CartContext);

type CartProviderProps = {
  children: ReactNode;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (item) => item.id === product.id
      );
      if (existingProductIndex >= 0) {
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += 1;
        return updatedCart;
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });

    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [product.id]: (prevQuantities[product.id] || 0) + 1,
    }));
  };

  const updateCartItemQuantity = (productId: number, delta: number) => {
    setCart((prevCart) => {
      const updatedCart = prevCart
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + delta }
            : item
        )
        .filter((item) => item.quantity > 0); // Remove item if quantity is 0
      return updatedCart;
    });

    setQuantities((prevQuantities) => {
      const newQuantity = (prevQuantities[productId] || 0) + delta;
      if (newQuantity > 0) {
        return { ...prevQuantities, [productId]: newQuantity };
      } else {
        const { [productId]: removedValue, ...rest } = prevQuantities;
        return rest;
      }
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== id));
    setQuantities((prevQuantities) => {
      const { [id]: removedValue, ...rest } = prevQuantities;
      return rest;
    });
  };

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateCartItemQuantity,
        totalAmount,
        quantities,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

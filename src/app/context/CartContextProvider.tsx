import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { OrderProduct } from "../utils/interfaces";

const CartContext = createContext<any>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("cart");
      return storedCart ? JSON.parse(storedCart) : [];
    }
    return [];
  });

  useEffect(() => {
    // Update LocalStorage whenever cart changes
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const addToCart = (product: OrderProduct) => {
    setCart((prevCart: OrderProduct[]) => {
      const existingProduct = prevCart.find(
        (item) => item.product_id === product.product_id
      );
      if (existingProduct) {
        return prevCart.map((item) =>
          item.product_id === product.product_id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      }
      return [...prevCart, product];
    });
  };

  const removeFromCart = (product_id: string) => {
    setCart((prevCart: OrderProduct[]) =>
      prevCart.filter((item) => item.product_id !== product_id)
    );
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

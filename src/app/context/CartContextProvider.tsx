import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { ProductFromCart } from "../utils/interfaces";

const CartContext = createContext<any>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<ProductFromCart[]>(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("cart");
      return storedCart ? JSON.parse(storedCart) : [];
    }
    return [];
  });
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    // Update LocalStorage whenever cart changes
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(cart));
      setTotalItems(getTotalQuantity());
    }
  }, [cart]);

  const addToCart = (product: ProductFromCart) => {
    setCart((prevCart: ProductFromCart[]) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      }
      return [...prevCart, product];
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prevCart: ProductFromCart[]) =>
      prevCart.filter((item) => item.id !== id)
    );
  };

  const substractOneFromCart = (product_id: string) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product_id);
      if (existingProduct) {
        if (existingProduct.quantity > 1) {
          return prevCart.map((item) =>
            item.id === product_id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          );
        } else {
          return prevCart.filter((item) => item.id !== product_id);
        }
      }
      return prevCart;
    });
  };

  const clearCart = () => setCart([]);

  const getTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        substractOneFromCart,
        removeFromCart,
        clearCart,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

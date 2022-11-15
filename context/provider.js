import { createContext, useState } from "react";

export const cartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [favoritos, setFavoritos] = useState([]);

  return (
    <cartContext.Provider value={{ cart, setCart, favoritos, setFavoritos }}>
      {children}
    </cartContext.Provider>
  );
}

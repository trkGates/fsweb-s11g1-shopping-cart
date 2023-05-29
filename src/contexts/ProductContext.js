import { createContext, useState } from "react";
import { data } from "../data";

export const ListeUrunler = createContext();

const Urunler = ({ children }) => {
  const [products, setProducts] = useState(data);

  const contextState = {
    Urunler: products,
    setUrunler: setProducts,
  };

  return (
    <ListeUrunler.Provider value={contextState}>
      {children}
    </ListeUrunler.Provider>
  );
};

export default Urunler;
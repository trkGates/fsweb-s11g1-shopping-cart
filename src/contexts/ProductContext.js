import { createContext, useState } from "react";

export const Proplarim = createContext();

const ProplarimSayfam = ({ children }) => {
  const [cart, setCart] = useState([]);

  const contextState    = {
    cart: cart,
    setCart: setCart,
    };
    
  return (
    <Proplarim.Provider value={contextState}>
      {children}
    </Proplarim.Provider>
  );
};

export default ProplarimSayfam;

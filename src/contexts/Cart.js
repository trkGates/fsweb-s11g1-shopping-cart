import { createContext, useEffect, useState } from "react";

export const Cart = createContext();

const ProplarimSayfam = ({ children }) => {


  // localestoreden eski veriyi çeker ve card a yazdırır 
  const getCartData = () => {
    const cartData = localStorage.getItem("cartData");
    return JSON.parse(cartData);
  };

  const [cart, setCart] = useState(getCartData() || []);

  const addItem = (item) => {
    // verilen itemi sepete ekleyin
    //ürün sepette varsa ekleme yapma
    if (cart.find((cartItem) => cartItem.id === item.id)) {
      return;
    }
    setCart([...cart, item]);
  };

// güncel veriyi localestroeye ekler
  useEffect(() => {
    localStorage.setItem("cartData", JSON.stringify(cart));
  }, [cart]);



  const contextState = {
    cart: cart,
    setCart: setCart,
    addItem,
  };
  return <Cart.Provider value={contextState}>{children}</Cart.Provider>;
};

export default ProplarimSayfam;

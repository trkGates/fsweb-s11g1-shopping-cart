import React, { useState } from "react";
import { Route } from "react-router-dom";
import { data } from "./data";

// Bileşenler
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import { useContext } from "react";
import { Proplarim } from "./contexts/ProductContext";

function App() {
  const { cart, setCart } = useContext(Proplarim);
  const [products, setProducts] = useState(data);
  // const [cart, setCart] = useState([]);


  
  const addItem = (item) => {
    // verilen itemi sepete ekleyin
    //ürün sepette varsa ekleme yapma
    if (cart.find((cartItem) => cartItem.id === item.id)) {
      return;
    }
    setCart([...cart, item]);
  };

  return (
    <div className="App">
      <Navigation cart={cart} />

      {/* Routelar */}
      <main className="content">
        <Route exact path="/">
          <Products products={products} addItem={addItem} />
        </Route>

        <Route path="/cart">
          <ShoppingCart/>
        </Route>
      </main>
    </div>
  );
}

export default App;

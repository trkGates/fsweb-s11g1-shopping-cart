import React, { useState } from "react";
import { Route } from "react-router-dom";
import { data } from "./data";

// Bileşenler
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import { useContext } from "react";
import { Cart } from "./contexts/Cart";
function App() {
  const { cart, setCart, addItem } = useContext(Cart);
  // const [products, setProducts] = useState(data);
  // const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <Navigation cart={cart} />

      {/* Routelar */}
      <main className="content">
        <Route exact path="/">
          <Products />
        </Route>

        <Route path="/cart">
          <ShoppingCart />
        </Route>
      </main>
    </div>
  );
}

export default App;

import React, { useContext } from "react";
import { ScCartItem, ScCartItemDetails } from "./scParts";
import { Cart } from "../contexts/Cart";
const Item = (props) => {
  const { cart, setCart } = useContext(Cart);
  const ListedenSil = () => {
    console.log("ListedenSil çalıştı", props.id);

    // seçilen ürünü listeden kaldırın
    setCart(cart.filter((item) => item.id !== props.id));
  };

  return (
    <ScCartItem>
      <img src={props.image} alt={`${props.title} book`} />

      <ScCartItemDetails>
        <h2>{props.title}</h2>
        <p>$ {props.price}</p>
        <button onClick={ListedenSil}>Remove from cart</button>
      </ScCartItemDetails>
    </ScCartItem>
  );
};

export default Item;

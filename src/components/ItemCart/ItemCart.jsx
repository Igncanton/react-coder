import React from "react";
import { useCartContext } from "../../context/CartContext";
import "./ItemCart.css";

export default function ItemCart({ product }) {
  const { removeItem } = useCartContext();

  return (
    <div className="itemCart">
      <img src={product.img} alt={product.game} />
      <div>
        <p>Game: {product.game}</p>
        <p>Amount: {product.quantity}</p>
        <p>Price x1: {product.price}</p>
        <p>Subtotal: ${product.quantity * product.price}</p>
        <button onClick={() => removeItem(product.id)}>Remove Game</button>
      </div>
    </div>
  );
}

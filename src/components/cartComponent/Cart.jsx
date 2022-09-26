import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart/ItemCart";
import "./Cart.css";

const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  if (cart.length === 0) {
    return (
      <div className="cart__container">
        <p className="cart__emptyText">No games added yet.</p>
        <Link to="/" className="cart__shopping--btn">
          Add some!
        </Link>
      </div>
    );
  } else {
    return (
      <div className="cart__items__container">
        {cart.map((product) => (
          <ItemCart key={product.id} product={product} />
        ))}
        <p className="cart__totalPrice">Total: ${totalPrice()}</p>
      </div>
    );
  }
};

export default Cart;

import React from "react";
import { Link } from "react-router-dom";
import cartWidgetIcon from "./cartNav.svg";
import "./cartWidget.css";
import { useCartContext } from "../../../context/CartContext";

//CartWidget component
const CartWidget = () => {
  const { totalProducts } = useCartContext();

  return (
    <Link to="/cart">
      <div className="cartWidtget__container">
        <img
          className="cartWidget__icon"
          src={cartWidgetIcon}
          alt="navbar shopping cart"
          style={{ width: "20px" }}
        />
        <p className="cartWidget_itemsAmount">{totalProducts() || ""}</p>
      </div>
    </Link>
  );
};

export default CartWidget;

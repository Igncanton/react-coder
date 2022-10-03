import React, { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { addDoc, getFirestore, collection } from "firebase/firestore";
import "./CheckOut.css";

function CheckOut() {
  const { cart, totalPrice, setCart } = useCartContext();
  const [checkOutFinished, setCheckOutFinished] = useState(false);

  const handleOrder = (order) => {
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then(({ id }) => console.log(id));
    setCart([]);
    setCheckOutFinished(true);
  };

  const [nameInput, setNameInput] = useState();
  const [emailInput, setEmailInput] = useState();
  const [phoneInput, setPhoneInput] = useState();
  const [addressInput, setAddressInput] = useState();

  const handleCheckOut = (event) => {
    event.preventDefault();

    const order = {
      buyer: {
        name: nameInput,
        email: emailInput,
        phone: phoneInput,
        address: addressInput,
      },
      items: cart.map((product) => ({
        id: product.id,
        game: product.game,
        price: product.price,
        quantity: product.quantity,
      })),
      total: totalPrice(),
    };

    handleOrder(order);
  };

  if (checkOutFinished === false) {
    return (
      <div className="checkOut__container">
        <h2>CHECKOUT</h2>
        <div className="checkOut__products">
          {cart.map((item, index) => (
            <div key={index}>
              <p>{item.quantity} X</p>
              <p>{item.game}</p>
            </div>
          ))}
          <h3>Total: ${totalPrice()}</h3>
        </div>
        <form className="checkOut__form" onSubmit={(e) => handleCheckOut(e)}>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="off"
            onChange={(e) => setNameInput(e.target.value)}
            required
          ></input>
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            id="email"
            name="email"
            autoComplete="off"
            onChange={(e) => setEmailInput(e.target.value)}
            required
          ></input>
          <label htmlFor="phone">Phone: </label>
          <input
            type="text"
            id="phone"
            name="phone"
            autoComplete="off"
            onChange={(e) => setPhoneInput(e.target.value)}
            required
          ></input>
          <label htmlFor="address">Address: </label>
          <input
            type="text"
            id="address"
            name="address"
            autoComplete="off"
            onChange={(e) => setAddressInput(e.target.value)}
            required
          ></input>
          <button type="submit">Finish Order</button>
        </form>
      </div>
    );
  }
  if (checkOutFinished === true) {
    return (
      <div className="checkOut__finished__container">
        <h3>
          Thanks <span className="checkOut__span--italics">{nameInput} </span>
          for your purchase!
        </h3>
        <p>We'll ship your package</p>
        <p>
          to: <span className="checkOut__span--italics">{addressInput} </span>
        </p>
        <p>We'll be contacting you</p>
        <p>
          to: <span className="checkOut__span--italics">{emailInput} </span>
        </p>
        <Link to="/" className="checkOut__finished__btn">
          Keep shopping
        </Link>
      </div>
    );
  }
}

export default CheckOut;

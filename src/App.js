import ItemDetailContainer from "./components/itemDetailContainer/itemDetailContainer";
import ItemListContainer from "./components/itemListContainer/itemListContainer";
import Navbar from "./components/navbar/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/cartComponent/Cart";
import React from "react";
import CartProvider from "./context/CartContext";
import CheckOut from "./components/checkOut/CheckOut";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <Navbar />

          <Routes>
            <Route
              exact
              path="/"
              element={<ItemListContainer greeting="Welcome to our store" />}
            />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer greeting="- Retro is back -" />}
            />
            <Route
              path="/itemDetail/:itemId"
              element={<ItemDetailContainer />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckOut />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

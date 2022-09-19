import './App.css';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import Navbar from './components/navbar/navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/cartComponent/Cart';
import React from 'react';
import CartProvider from './context/CartContext';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<ItemListContainer greeting='Welcome to our store' />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/itemDetail/:itemId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

import './App.css';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import Navbar from './components/navbar/navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/cartComponent/Cart';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<ItemListContainer greeting='Welcome to our store' />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/itemDetail/:itemId' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

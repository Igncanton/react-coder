import './App.css';
import Itemlistcontainer from './components/itemListContainer/itemListContainer';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Itemlistcontainer greeting='Welcome to our store' />
    </div>
  );
}

export default App;

import './App.css';
import Itemdetailcontainer from './components/itemDetailContainer/itemDetailContainer';
import Itemlistcontainer from './components/itemListContainer/itemListContainer';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Itemlistcontainer greeting='Welcome to our store' /> */}
      <Itemdetailcontainer />
    </div>
  );
}

export default App;

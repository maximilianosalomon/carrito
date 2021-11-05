// Original
import "./App.css";

// a
import Navbar from "./components/navbar/Navbar";
// import ItemListContainer from "./components/itemlistcontainer/ItemListContainer";

//navbar
export default App;

function App() {
  return (
    <header>
      <div className="App">
        <Navbar />
      </div>
      <div>
        <ItemListContainer />
      </div>
    </header>
  );
}

function ItemListContainer() {
  return (
    <div>
      <p align="center">Item List Container</p>
    </div>
  );
}

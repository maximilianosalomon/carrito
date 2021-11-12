import "./App.css";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";

export default App;

function App() {
  return (
    <header>
      <div className="App">
        <Navbar />
      </div>
      <div>
        <ItemListContainer greeting="Bienvenidos" />
      </div>
    </header>
  );
}

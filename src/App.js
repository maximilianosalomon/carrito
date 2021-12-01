import "./App.css";
//  Routes
import { Routes, Route } from "react-router-dom";
//Mis componentes
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<ItemListContainer greeting="Bienvenidos" />}
        />
        <Route path="item/:id" element={<ItemDetailContainer />} />
        <Route />
      </Routes>
    </div>
  );
}

export default App;

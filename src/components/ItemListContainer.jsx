// import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import getProducts from "../services/MyPromise";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
// import ItemDetailContainer from "./ItemDetailContainer";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts
      .then((res) => {
        setProducts(res);
      })
      .catch((error) => alert("Error:", error));
  }, []);

  return (
    <div align="center">
      <h1>{greeting}</h1>
      <h2>Soy Item List Container</h2>
      <Link to="about">
        <h4>About</h4>
      </Link>
      <ItemCount stock={5} initial={1} />
      {/* <ItemDetailContainer /> */}
      <ItemList products={products} />
    </div>
  );
};
export default ItemListContainer;

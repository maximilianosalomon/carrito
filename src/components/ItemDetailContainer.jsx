//React
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//Mis componentes
import getProducts from "../services/MyPromise";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getProducts.then((res) => {
      // console.log(res);
      const auxRes = res.find((prod) => prod.id === parseInt(id));
      // console.log(myRes);
      setItem(auxRes);
    });
  }, [id]);

  return (
    <div>
      <hr />
      <h3>Soy ItemDetailContainer</h3>
      <ItemDetail item={item} />
      <button onClick={() => console.log("res con item", item)} />
      <hr />
    </div>
  );
};
export default ItemDetailContainer;

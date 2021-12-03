import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//Mis componentes
import getProducts from "../services/MyPromise";
// import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  console.log("Soy Item:", item);
  // console.log(useParams);
  const { id } = useParams();
  // console.log("Soy ID:", id);

  useEffect(() => {
    getProducts.then((res) => {
      console.log(res);
      setItem(res.find((prod) => prod.id === parseInt(id)));
    });
  }, [id]);
  console.log(item);

  return (
    <div>
      <hr />
      <h3>Soy ItemDetailContainer</h3>
      {/* <ItemDetail item={item} /> */}
      <button onClick={() => console.log("res con item", item)} />
      <hr />
    </div>
  );
};
export default ItemDetailContainer;

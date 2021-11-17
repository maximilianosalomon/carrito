//import { Alert } from "@mui/material";
import { useState } from "react";

const ItemCount = ({ stock, initial }) => {
  const [count, setCount] = useState(initial);

  //función suma item según stock
  const sumaItem = () => {
    const newValue = count + 1;
    if (newValue <= stock) {
      setCount(newValue);
    }
  };
  //función resta item según valor inicial
  const restaItem = () => {
    const newValue = count - 1;
    if (newValue >= initial) {
      setCount(newValue);
    }
  };
  const addCarrito = () => {
    if (count <= stock) {
      onAdd();
    } else {
      alert("No hay stock");
    }
  };

  //función agrega item al carrito
  const onAdd = () => {
    if (count <= 1) {
      alert(`Se agrego ${count} producto al carrito`);
    } else {
      alert(`Se agregaron ${count} productos al carrito`);
    }
    stock = stock - count;
    // console.log(`stock: ${stock}`);
  };

  return (
    <div align="center">
      <h3>ItemCount</h3>
      <button onClick={sumaItem}>+</button>
      <button onClick={restaItem}>-</button>
      <p>{count}</p>
      <button onClick={addCarrito}>Agregar al carrito</button>
    </div>
  );
};
export default ItemCount;

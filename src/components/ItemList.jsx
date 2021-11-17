import Item from "./Item";

const ItemList = ({ productos }) => {
  return (
    <div>
      {productos.map((producto) => {
        return (
          <Item
            key={producto.id}
            titulo={producto.title}
            descripcion={producto.descripcion}
            precio={producto.price}
            stock={producto.stock}
          />
        );
      })}
    </div>
  );
};
export default ItemList;

import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <div>
      {products.map((product) => {
        return (
          <Item
            id={product.id}
            key={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            stock={product.stock}
          />
        );
      })}
    </div>
  );
};
export default ItemList;

import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
const ItemListContainer = ({ greeting }) => {
  console.log("soy props de item list container", greeting);
  return (
    <div>
      <p align="center">Item List Container</p>
      <p align="center">{greeting}</p>
      <ItemCount stock={5} initial={1} />
      <ItemList/>
    </div>
  );
};
export default ItemListContainer;

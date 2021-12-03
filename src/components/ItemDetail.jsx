const ItemDetail = (props) => {
  const { title, price, description, stock, id, image } = props.item;
  return (
    <div>
      <h2>Soy ItemDetail</h2>
      <h3>{title}</h3>
      <p>{description}</p>
      <h2>${price}</h2>
      <p>Stock:{stock}</p>
      <p>ID:{id}</p>
      <img src={`${image}`} alt={`${image}`}></img>
    </div>
  );
};
export default ItemDetail;

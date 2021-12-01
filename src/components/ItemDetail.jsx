const ItemDetail = (props) => {
  const { title, price, description, stock, id } = props.prod;
  return (
    <div>
      <h3>Soy ItemDetail</h3>
      <h3>{title}</h3>
      <p>{description}</p>
      <h2>{price}</h2>
      <p>{stock}</p>
      <p>{id}</p>
    </div>
  );
};
export default ItemDetail;

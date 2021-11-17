const Item = ({ titulo, descripcion, precio, stock }) => (
  <div>
    <h5>Titulo:{titulo}</h5>
    <h6>Descripción:{descripcion}</h6>
    <h5>Precio:{precio}</h5>
    <h5>Stock:{stock}</h5>
  </div>
);
export default Item;

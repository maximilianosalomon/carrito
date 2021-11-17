import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const Item = ({ titulo, descripcion, precio, stock }) => (
  <div>
    <Card variant="outlined" sx={{ maxWidth: 275, mt: 2 }}>
      <CardContent>
        <h5>Titulo:{titulo}</h5>
        <h6>Descripción:{descripcion}</h6>
        <p>Precio:{precio}</p>
        <p>Stock:{stock}</p>
      </CardContent>
    </Card>
  </div>
);
export default Item;

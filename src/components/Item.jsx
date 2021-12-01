//Estilos
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Link } from "react-router-dom";

const Item = ({ title, description, price, stock, id }) => {
  return (
    <div>
      <Link to={`/item/${id}`}>
        <Card variant="outlined" sx={{ maxWidth: 275, mt: 2 }}>
          <CardContent>
            <h5>Titulo:{title}</h5>
            <h6>Descripción:{description}</h6>
            <p>Precio:{price}</p>
            <p>Stock:{stock}</p>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
};
export default Item;

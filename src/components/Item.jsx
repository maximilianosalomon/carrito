import { Link } from "react-router-dom";
//MUI
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
//Mis imports
import ItemCount from "./ItemCount";

const Item = ({ title, description, price, stock, id }) => {
  return (
    <div>
      <Card variant="outlined" sx={{ maxWidth: 275, mt: 2 }}>
        <CardContent>
          <Link to={`/item/${id}`}>
            <h5>Titulo:{title}</h5>
            <h6>Descripción:{description}</h6>
          </Link>
          <p>Precio:{price}</p>
          <p>Stock:{stock}</p>
          <ItemCount stock={stock} initial={1} />
        </CardContent>
      </Card>
    </div>
  );
};
export default Item;

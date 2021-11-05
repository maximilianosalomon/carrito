import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListaCategorias from "../list/Lista";
import CartWidget from "../cartwidget/CartWidget";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            align="left"
            sx={{ flexGrow: 1 }}
          >
            Mi Tienda
          </Typography>
          {/* boton de categorias */}
          <ListaCategorias />

          {/* boton carro */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="cart"
            align="center"
            sx={{ ml: 1 }}
          >
            <CartWidget />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

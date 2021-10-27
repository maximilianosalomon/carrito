import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <div>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Typography variant="h6">Masi</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;

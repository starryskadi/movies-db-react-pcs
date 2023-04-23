import React, { useState, createContext, useContext } from "react";
import AuthContext from "../../context/authContext";
import { AppBar, Toolbar } from "@mui/material";
import Login from "./Buttons/Login";
import Logout from "./Buttons/Logout";

const Navbar = () => {
  const context = useContext(AuthContext);
  return (
    <>
      <AppBar>
        <Toolbar>
          <div style={{ flexGrow: 1 }}>MovieDB</div>
          {context.user ? <Logout></Logout> : <Login></Login>}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;

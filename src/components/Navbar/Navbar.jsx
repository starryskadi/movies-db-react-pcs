import React, { useState, createContext, useContext } from "react";
import AuthContext from "../../context/authContext";
import { AppBar, Button, Toolbar, Box } from "@mui/material";
import Login from "./Buttons/Login";
import Logout from "./Buttons/Logout";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const context = useContext(AuthContext);
  return (
    <>
      <AppBar>
        <Toolbar>
          <div style={{ flexGrow: 1 }}>
            <Box
              sx={{
                "> a": {
                  color: "white",
                  textDecoration: "none",
                  marginLeft: "15px",
                },
              }}
            >
              <NavLink to="/">MovieDB</NavLink>
            </Box>
          </div>
          <Box
            sx={{
              "> a": {
                color: "white",
                textDecoration: "none",
                marginLeft: "15px",
              },
            }}
          >
            <NavLink
              to="/register"
              style={({ isActive }) => {
                return isActive ? { color: "red" } : { color: "white" };
              }}
            >
              Register
              {/* <Button variant="contained">Register</Button> */}
            </NavLink>
          </Box>
          {context.user ? <Logout></Logout> : <Login></Login>}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;

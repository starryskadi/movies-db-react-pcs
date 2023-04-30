import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";
import { Box } from "@mui/material";

const Layout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Box pt={8}>
        <Outlet></Outlet>
      </Box>
    </div>
  );
};

export default Layout;

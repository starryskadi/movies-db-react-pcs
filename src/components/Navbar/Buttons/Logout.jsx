import React, { useContext } from "react";
import { Context } from "../Navbar";
import { Button } from "@mui/material";
import AuthContext from "../../../context/authContext";

const Logout = () => {
  const context = useContext(AuthContext);

  return (
    <Button color="inherit" onClick={context.onLogout}>
      Logout
    </Button>
  );
};

export default Logout;

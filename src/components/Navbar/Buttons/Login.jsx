import React, { useContext } from "react";
import { Button } from "@mui/material";
import AuthContext from "../../../context/authContext";

const Login = () => {
  // const context = useContext(AuthContext);

  return (
    <AuthContext.Consumer>
      {(value) => {
        return (
          <Button color="inherit" onClick={value.onLogin}>
            Login
          </Button>
        );
      }}
    </AuthContext.Consumer>
    // <Button color="inherit" onClick={context.onLogin}>
    //   Login
    // </Button>
  );
};

export default Login;

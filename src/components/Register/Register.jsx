import { Link } from "react-router-dom";
import { Button, Box } from "@mui/material";
import React from "react";

const Register = () => {
  return (
    <div>
      <Box mt={10}>
        <Link to="/">
          <Button> Return To Home </Button>
        </Link>
      </Box>
    </div>
  );
};

export default Register;

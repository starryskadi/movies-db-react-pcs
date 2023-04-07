import React from "react";
import { Button, Typography } from "@mui/material";
import useToggle from "../../hooks/useToggle";

const Toggle = () => {
  const [toggle, onToggle] = useToggle();

  return (
    <div>
      {toggle ? <></> : <Typography>Toggle Time</Typography>}
      <Button onClick={onToggle} variant="contained">
        Toggle
      </Button>
    </div>
  );
};

export default Toggle;

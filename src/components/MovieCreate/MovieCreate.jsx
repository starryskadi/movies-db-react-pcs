import React, { useRef } from "react";
import { Paper, Box, TextField, Typography, Button } from "@mui/material";

const MovieCreate = () => {
  const onSubmitHandler = (ev) => {
    ev.preventDefault();

    const formData = new FormData(ev.target);
    const formObject = Object.fromEntries(formData.entries());

    ev.target.reset();
  };

  return (
    <Paper sx={{ maxWidth: "500px", marginLeft: "auto", marginRight: "auto" }}>
      <Box px={1} py={2}>
        <Typography variant="h5" gutterBottom>
          Create Movie
        </Typography>
        <form onSubmit={onSubmitHandler}>
          <TextField name="title" fullWidth label="Title" required />
          <Box my={2}>
            <input type="file" name="image" />
          </Box>
          <Button type="submit" variant="contained">
            Create
          </Button>
        </form>
      </Box>
    </Paper>
  );
};

export default MovieCreate;

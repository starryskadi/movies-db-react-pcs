import React, { useReducer } from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import useAxiosMovieGenres from "../../hooks/useAxiosMovieGenres";
import Search from "../Search/Search";

import { Outlet, Link } from "react-router-dom";

const Movies = () => {
  const ref = React.useRef(null);
  const { genres } = useAxiosMovieGenres();
  return (
    <Container maxWidth="xl">
      <Box mt={4}>
        <Typography variant="h3" align="center" sx={{ fontWeight: "bold" }}>
          MoviesDB
        </Typography>
      </Box>
      <Box mb={2}>{/* <Search refer={ref} onClick={onSearchHandler} /> */}</Box>

      {genres.map((each) => {
        return (
          <Link to={`/movies/genre/${each.id}`}>
            <Button key={each.id} variant="contained">
              {each.name}
            </Button>
          </Link>
        );
      })}
      <Outlet></Outlet>
    </Container>
  );
};

export default Movies;

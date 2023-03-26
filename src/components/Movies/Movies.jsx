import React from "react";
import MovieCard from "./MovieCard/MovieCard";
import Search from "../Search/Search";
import moviePosterImg from "./movie-poster-1.jpg";
import { Container, Grid, Box, Typography } from "@mui/material";

const Movies = () => {
  const ref = React.useRef(null);

  const [state, setState] = React.useState({
    search: "",
  });

  const movies = [
    {
      image: "/movie-poster-1.jpg",
      title: "Prizefighter: The Life of Jem Belcher",
      id: "123",
    },
    {
      image: "/movie-poster-2.jpg",
      title: "Puss in Boots: The Last Wish",
      id: "ab123",
    },
    {
      image: "/movie-poster-1.jpg",
      title: "Prizefighter: The Life of Jem Belcher",
      id: "ab123a",
    },
    {
      image: "/movie-poster-1.jpg",
      title: "Prizefighter: The Life of Jem Belcher",
      id: "ab123b",
    },
  ];

  const onSearchHandler = (ev) => {
    // console.log(ref.current.value);
    // Handle Search Function
    setState({
      ...state,
      search: ref.current.value,
    });
  };

  const onChangeHandler = (ev) => {
    setState({
      ...state,
      [ev.target.name]: ev.target.value,
    });
  };

  return (
    <Container maxWidth="xl">
      <Box mt={4}>
        <Typography variant="h3" align="center" sx={{ fontWeight: "bold" }}>
          MoviesDB
        </Typography>
      </Box>
      <Box mb={2}>
        <Search refer={ref} onClick={onSearchHandler} />
      </Box>
      <Grid container spacing={2}>
        {movies
          .filter(({ image, title, id }) => {
            return title.includes(state.search);
          })
          .map(({ image, title, id }) => {
            return (
              <Grid item xs={4}>
                <MovieCard key={id} image={image} title={title} />
              </Grid>
            );
          })}
      </Grid>
    </Container>
  );
};

export default Movies;

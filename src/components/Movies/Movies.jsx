import React, { useEffect, useReducer } from "react";
import MovieCard from "./MovieCard/MovieCard";
import Search from "../Search/Search";

import {
  Container,
  Grid,
  Box,
  Typography,
  Pagination,
  Stack,
  CircularProgress,
  Button,
} from "@mui/material";
import useAxiosMovies from "../../hooks/useAxiosMovies";
import Navbar from "../Navbar/Navbar";

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        name: action.payload.user.username,
      };
    case "RANDOMNUMBER":
      return {
        ...state,
        name: action.payload.number,
      };
    default:
      return state;
  }
};

const Movies = () => {
  const ref = React.useRef(null);

  const [state, setState] = React.useState({
    search: "",
    name: "",
  });

  const [newState, dispatch] = useReducer(reducer, {
    search: "Test",
    name: "",
  });

  console.log(newState);

  const { movies, page, setPage, totalPages, isLoading, error } =
    useAxiosMovies();

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

  const onPageChangeHandler = (ev, value) => {
    setPage(value);
  };

  const renderMovies = () => {
    if (error) {
      return <Typography> {error} </Typography>;
    }

    if (isLoading) {
      return (
        <Grid item xs={12}>
          <Box display="flex" justifyContent="center">
            <CircularProgress />
          </Box>
        </Grid>
      );
    }

    return movies
      .filter(({ image, title, id }) => {
        return title.includes(state.search);
      })
      .map(({ image, title, id }) => {
        return (
          <Grid item xs={4} key={id}>
            <MovieCard image={image} title={title} />
          </Grid>
        );
      });
  };

  return (
    <>
      <Button
        onClick={() =>
          dispatch({
            type: "RANDOMNUMBER",
            payload: {
              number: Math.random() * 256,
            },
          })
        }
        variant="contained"
      >
        Random Numbers
      </Button>

      <Button
        onClick={() =>
          dispatch({
            type: "LOGIN",
            payload: {
              user: {
                username: "John",
              },
            },
          })
        }
        variant="contained"
      >
        Login
      </Button>
      {/* <Navbar></Navbar> */}
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
          {renderMovies()}
        </Grid>
        <Box mt={4} mb={4}>
          <Stack spacing={2} direction="row" justifyContent="center">
            <Pagination
              count={totalPages}
              page={page}
              onChange={onPageChangeHandler}
            />
          </Stack>
        </Box>
      </Container>
    </>
  );
};

export default Movies;

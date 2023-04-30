import React, { useEffect, useReducer } from "react";
import MovieCard from "./MovieCard/MovieCard";
import Search from "../Search/Search";
import { Link, useParams, useNavigate, Navigate } from "react-router-dom";

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
import MovieReducer from "../../reducers/movies";
import useAxiosMovieGenres from "../../hooks/useAxiosMovieGenres";

const Movies = () => {
  const ref = React.useRef(null);
  const params = useParams();
  const navigate = useNavigate();

  const page = Number(params.page) || 1;

  // const [state, setState] = React.useState({
  //   search: "",
  //   name: "",
  // });

  const [state, dispatch] = useReducer(MovieReducer, {
    search: "",
    name: "",
  });

  const { movies, totalPages, isLoading, error } = useAxiosMovies({ page });
  const { genres } = useAxiosMovieGenres();

  if (params.page && isNaN(Number(params.page))) {
    return <Navigate to="/error" />;
  }

  const onSearchHandler = (ev) => {
    // console.log(ref.current.value);
    // Handle Search Function
    dispatch({
      type: "SEARCH",
      payload: {
        search: ref.current.value,
      },
    });
  };

  // const onChangeHandler = (ev) => {
  //   setState({
  //     ...state,
  //     [ev.target.name]: ev.target.value,
  //   });
  // };

  const onPageChangeHandler = (ev, value) => {
    // setPage(value);
    navigate(`/${value}`);
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
            <Link to={`/movie/${id}`}>
              <MovieCard image={image} title={title} />
            </Link>
          </Grid>
        );
      });
  };

  return (
    <>
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

        {/* <Stack direction="row" spacing={0.5}> */}
        {genres.map((each) => {
          return <Button variant="contained"> {each.name} </Button>;
        })}
        {/* </Stack> */}

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

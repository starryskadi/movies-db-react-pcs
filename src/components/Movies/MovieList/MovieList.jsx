import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import { Link, useNavigate, Navigate } from "react-router-dom";
import {
  Grid,
  Box,
  Typography,
  Pagination,
  Stack,
  CircularProgress,
} from "@mui/material";

const MovieList = (props) => {
  const navigate = useNavigate();
  const { page, error, isLoading, movies, totalPages, parentRoute } = props;

  if (page && isNaN(Number(page))) {
    return <Navigate to="/error" />;
  }

  const onPageChangeHandler = (ev, value) => {
    navigate(`${parentRoute}/${value}`);
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

    return (
      movies
        // .filter(({ image, title, id }) => {
        //   return title.includes(search);
        // })
        .map(({ image, title, id }) => {
          return (
            <Grid item xs={4} key={id}>
              <Link to={`/movie/${id}`}>
                <MovieCard image={image} title={title} />
              </Link>
            </Grid>
          );
        })
    );
  };

  return (
    <>
      {/* <Navbar></Navbar> */}

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
    </>
  );
};

export default MovieList;

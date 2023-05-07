import React from "react";
import useAxiosMovies from "../../../hooks/useAxiosMovies";
import { useParams } from "react-router-dom";
import MovieList from "../MovieList/MovieList";

const PopularMovieList = () => {
  const params = useParams();
  const page = Number(params.page) || 1;

  const { movies, totalPages, isLoading, error } = useAxiosMovies({ page });

  return (
    <MovieList
      page={page}
      error={error}
      isLoading={isLoading}
      movies={movies}
      totalPages={totalPages}
      parentRoute={"/movies"}
    ></MovieList>
  );
};

export default PopularMovieList;

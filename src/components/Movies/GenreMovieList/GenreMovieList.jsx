import React from "react";
import { useParams } from "react-router-dom";
import MovieList from "../MovieList/MovieList";
import useAxiosGenreMoviesList from "../../../hooks/useAxiosGenreMoviesList";

const GenreMovieList = () => {
  const params = useParams();
  const genreID = params.id;

  const page = Number(params.page) || 1;

  const { movies, error, isLoading, totalPages } = useAxiosGenreMoviesList({
    id: genreID,
    page,
  });

  return (
    <MovieList
      page={page}
      error={error}
      isLoading={isLoading}
      movies={movies}
      totalPages={totalPages}
      parentRoute={`/movies/genre/${genreID}`}
    ></MovieList>
  );
};

export default GenreMovieList;

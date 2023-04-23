import { useState, useEffect } from "react";
import axios from "../utils/axios";
import useAxios from "./useAxios";

const useFetchMovies = () => {
  const [page, setPage] = useState(1);
  const { response, isLoading, error } = useAxios(
    `/3/movie/popular?api_key=70699365be27b444e89363dd68f8397a&page=${page}`,
    [page]
  );

  if (!response) {
    return {
      movies: [],
      page,
      setPage,
      totalPages: 10,
      isLoading,
      error,
    };
  }

  // movies, page, setPage, totalPages, isLoading, error

  const movies = response.data.results.map((movie) => {
    return {
      image: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
      title: movie.title,
      id: movie.id,
    };
  });

  const totalPages = response.data.total_pages;

  return {
    movies,
    page,
    setPage,
    totalPages,
    isLoading,
    error,
  };
};

export default useFetchMovies;

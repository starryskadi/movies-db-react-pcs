import { useState, useEffect } from "react";
import axios from "../utils/axios";
import useAxios from "./useAxios";

const useFetchMovieDetails = (options) => {
  const { id } = options;
  if (!id) {
    throw Error("Please provide the movie id");
  }

  const { response, isLoading, error } = useAxios(
    `/3/movie/${id}?api_key=70699365be27b444e89363dd68f8397a`,
    []
  );

  if (!response) {
    return {
      movie: null,
      isLoading,
      error,
    };
  }

  const movie = response.data;
  movie.image = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  return {
    movie: response.data,
    isLoading,
    error,
  };

  // const movies = response.data.results.map((movie) => {
  //   return {
  //     image: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
  //     title: movie.title,
  //     id: movie.id,
  //   };
  // });

  // const totalPages = response.data.total_pages;

  // return {
  //   movies,
  //   page,
  //   setPage,
  //   totalPages,
  //   isLoading,
  //   error,
  // };
};

export default useFetchMovieDetails;

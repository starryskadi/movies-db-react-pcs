import { useState, useEffect } from "react";
import axios from "../utils/axios";
import useAxios from "./useAxios";

const useAxiosMovieGenres = () => {
  const { response, isLoading, error } = useAxios(
    `/3/genre/movie/list?api_key=70699365be27b444e89363dd68f8397a`,
    []
  );

  if (!response) {
    return {
      genres: [],
      isLoading,
      error,
    };
  }

  return {
    genres: response.data.genres,
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

export default useAxiosMovieGenres;

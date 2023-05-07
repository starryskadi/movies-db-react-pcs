import { useState, useEffect } from "react";
import axios from "../utils/axios";
import useAxios from "./useAxios";

const useAxiosGenreMoviesList = ({ id, page }) => {
  const { response, isLoading, error } = useAxios(
    `/3/discover/movie?with_genres=${id}&page=${page}&api_key=70699365be27b444e89363dd68f8397a`,
    [id, page]
  );

  if (!response) {
    return {
      movies: [],
      isLoading,
      error,
      totalPage: 0,
    };
  }

  // console.log(response);

  const movies = response.data.results.map((movie) => {
    return {
      image: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
      title: movie.title,
      id: movie.id,
    };
  });

  const totalPages = response.data.total_pages;
  console.log(totalPages);
  return {
    movies: movies,
    totalPages: totalPages,
    isLoading,
    error,
  };

  // return {
  //   movies,
  //   page,
  //   setPage,
  //   totalPages,
  //   isLoading,
  //   error,
  // };
};

export default useAxiosGenreMoviesList;

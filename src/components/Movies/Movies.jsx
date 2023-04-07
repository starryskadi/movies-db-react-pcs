import React, { useEffect } from "react";
import MovieCard from "./MovieCard/MovieCard";
import Search from "../Search/Search";
import axios from "../../utils/axios";
import {
  Container,
  Grid,
  Box,
  Typography,
  Pagination,
  Stack,
  CircularProgress,
} from "@mui/material";

const Movies = () => {
  const ref = React.useRef(null);

  const [state, setState] = React.useState({
    search: "",
    name: "",
  });
  const [movies, setMovies] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(10);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  useEffect(() => {
    // Promise Hell -> Async Await
    // Using Axios
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `/3/movie/popular?api_key=70699365be27b444e89363dd68f8397a&page=${page}`
        );

        const fetchedMovies = response.data.results.map((movie) => {
          return {
            image: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
            title: movie.title,
            id: movie.id,
          };
        });
        setMovies(fetchedMovies);
        setIsLoading(false);
      } catch (e) {
        setError(e.message);
      }
    };

    fetchMovies();

    // Using Javascript Fetch
    // const fetchPost = async () => {
    //   setIsLoading(true);
    //   const response = await fetch(
    //     `/3/movie/upcoming?api_key=70699365be27b444e89363dd68f8397a&page=${page}`,
    //     {}
    //   );
    //   const data = await response.json();
    //   if (!response.ok) {
    //     setError("There is an error");
    //   }
    //   setTotalPages(data.total_pages);
    //   const fetchedMovies = data.results.map((movie) => {
    //     return {
    //       image: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
    //       title: movie.title,
    //       id: movie.id,
    //     };
    //   });

    //   setMovies(fetchedMovies);
    //   setIsLoading(false);
    // };
    // fetchPost();
  }, [page]);

  // const movies = [
  //   {
  //     image: "/movie-poster-1.jpg",
  //     title: "Prizefighter: The Life of Jem Belcher",
  //     id: "123",
  //   },
  //   // {
  //   //   image: "/movie-poster-2.jpg",
  //   //   title: "Puss in Boots: The Last Wish",
  //   //   id: "ab123",
  //   // },
  //   // {
  //   //   image: "/movie-poster-1.jpg",
  //   //   title: "Prizefighter: The Life of Jem Belcher",
  //   //   id: "ab123a",
  //   // },
  //   // {
  //   //   image: "/movie-poster-1.jpg",
  //   //   title: "Prizefighter: The Life of Jem Belcher",
  //   //   id: "ab123b",
  //   // },
  // ];

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
  );
};

export default Movies;

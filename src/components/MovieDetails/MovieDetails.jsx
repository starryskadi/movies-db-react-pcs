import React from "react";
import { useParams } from "react-router";
import useFetchMovieDetails from "../../hooks/useAxiosMovieDetails";
import {
  CircularProgress,
  Container,
  Grid,
  Typography,
  Box,
  Rating,
  Chip,
  Stack,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const MovieDetails = () => {
  const params = useParams();
  const { movie, isLoading, error } = useFetchMovieDetails({ id: params.id });

  if (!movie || isLoading) {
    return <CircularProgress></CircularProgress>;
  }

  const starRating = movie.vote_average / 2;

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <img src={movie?.image} style={{ width: "100%" }} />
        </Grid>

        <Grid item xs={6}>
          <Stack direction="row" spacing={0.5}>
            {movie?.genres.map((genre) => {
              return <Chip key={genre.id} label={genre.name} color="primary" />;
            })}
          </Stack>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            {movie?.title}
          </Typography>

          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", color: "#1976d2" }}
          >
            {movie?.tagline}
          </Typography>

          <Box>
            <Rating value={starRating} readOnly></Rating>
          </Box>

          <Typography variant="body1">{movie?.overview}</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MovieDetails;

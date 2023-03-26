import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const MovieCard = (props) => {
  return (
    <React.Fragment>
      <Card>
        <CardContent>
          <img src={props.image} />
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            {props.title}
          </Typography>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

export default MovieCard;

import React, { useEffect } from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const MovieCard = (props) => {
  // useEffect(() => {
  //   // console.log("Hello from Movie Card");
  //   // const timer = setInterval(() => {
  //   //   console.log("Running from Timer");
  //   // }, 1000);

  //   // return () => {
  //   //   clearInterval(timer);
  //   // };

  //   const onScroll = () => {
  //     console.log("Calling from Scroll");
  //   };

  //   window.addEventListener("scroll", onScroll);

  //   return () => {
  //     window.removeEventListener("scroll", onScroll);
  //   };
  // }, []);

  return (
    <React.Fragment>
      <Card>
        <CardContent>
          <img src={props.image} style={{ width: "100%" }} />
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            {props.title}
          </Typography>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

export default MovieCard;

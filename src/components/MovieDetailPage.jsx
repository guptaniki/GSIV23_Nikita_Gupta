import React from "react";
import { Grid, Typography } from "@mui/material";
import { IMAGE_PATH, COVER_PLACEHOLDER } from "../config";
import { styled } from "@mui/system";
import { onlyYear,getDirectorName ,getCast,runtimeValue} from "../lib/helper";

const GridStyled = styled(Grid)(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));
const ImagStyled = styled("img")({
  width: "100%",
});
const MovieDetailPage = ({ movie, genres,cast }) => {
  console.log("release_date", movie,cast);
  return (
    <GridStyled container={true} spacing={2}>
      <Grid item={true} md={3}>
        {movie.poster_path ? (
          <ImagStyled
            src={`${IMAGE_PATH}/w300${movie.poster_path}`}
            alt={movie.title}
          />
        ) : (
          <ImagStyled src={COVER_PLACEHOLDER} alt={movie.title} />
        )}{" "}
      </Grid>
      <Grid item={true} md={9}>
        <Typography component="h1" variant="h3" gutterBottom={true}>
          {movie.title}
          ({movie.popularity})
        </Typography>
        <Typography component="h5" variant="h5" gutterBottom={true}>
          {onlyYear(movie?.release_date)} |   {runtimeValue(movie?.runtime)} | {getDirectorName(movie?.production_companies)}
        </Typography>
        <Typography component="h5" variant="h5" gutterBottom={true}>
          Cast : {getCast(cast)}
        </Typography>
        <Typography component="h5" variant="h5" gutterBottom={true}>
          Description : {movie.overview}
        </Typography>
      </Grid>
    </GridStyled>
  );
};
export default MovieDetailPage;

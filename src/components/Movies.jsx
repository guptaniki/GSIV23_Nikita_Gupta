import React from "react";
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Rating,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";
import { IMAGE_PATH } from "../config";
import { mapGenres } from "../lib/helper";
import { styled } from "@mui/system";
const ImageStyled = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",

  paddingBottom: 10,
});
const DivStyled = styled("div")({
  padding: 10,
  position: "relative",
  bottom: 80,
  height:1500
});
const ImageListStyled = styled(ImageList)({
  overflow: "hidden",
  paddingTop: 40,
});
const ImageListItemStyled = styled(ImageListItem)({
  overflow: "hidden",
  position: "relative",
  top: 40,
  border: "solid 5px black",
  borderRadius: 10,
});
const ImageListItemBarStyled = styled(ImageListItemBar)({
  bottom: 22,
  paddingBottom: 20,

});
const RatingStyled = styled(Rating)({
  position: "relative",
  bottom: 134,
  left: 149,
});
const Movies = ({ movies, genres }) => {
  return (
    <DivStyled>
      <ImageListStyled cols={5} rowHeight={365} gap={10} padding={10}>
        {movies.results.map((movie) => (
          <ImageListItemStyled key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              {movie.poster_path && (
                <ImageStyled
                  src={`${IMAGE_PATH}/w300${movie.poster_path}`}
                  alt={movie.title}
                />
              )}
            </Link>
              <ImageListItemBarStyled
                title={movie.title}
                subtitle={<span>{mapGenres(movie.genre_ids, genres)}</span>}
              />
              <RatingStyled
                name="read-only"
                value={movie.vote_average}
                readOnly
              />
          </ImageListItemStyled>
        ))}
      </ImageListStyled>
    </DivStyled>
  );
};
export default Movies;

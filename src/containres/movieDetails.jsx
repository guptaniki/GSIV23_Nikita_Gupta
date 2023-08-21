import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovie, resetState } from "../redux/movie";
import { getCast } from "../redux/cast";

import Loader from "../components/loader";
import MovieDetailPage from "../components/MovieDetailPage";
import { styled } from "@mui/system";
const DivStyled = styled("div")({
  position: "relative",
  left: 10,
  right: 10,
  width:'100%'
});
const MovieDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { moviePage } = useSelector((store) => store);
  const { genres } = useSelector((store) => store.genres);
  const { cast } = useSelector((store) => store);

  useEffect(() => {
    dispatch(getMovie(id ? parseInt(id, 10) : 0));
    dispatch(getCast(id ? parseInt(id, 10) : 0));

    return () => {
      dispatch(resetState());
    };
  }, [dispatch]);
  useEffect(() => {
    if (id !== moviePage.id?.toString()) {
      dispatch(getMovie(id ? parseInt(id, 10) : 0));
    }
    if (id !== cast.id?.toString()) {
      dispatch(getCast(id ? parseInt(id, 10) : 0));
    }
  }, [id, moviePage?.id,cast?.id]);
  return moviePage.isFetching ? (
    <Loader />
  ) : (
    <DivStyled>
      {" "}
      <h1>Movie Details </h1>{" "}
      <MovieDetailPage movie={moviePage} genres={genres} cast={cast} />
    </DivStyled>
  );
};
export default MovieDetails;

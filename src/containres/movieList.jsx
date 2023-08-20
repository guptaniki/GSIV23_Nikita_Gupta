import React from "react";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies, resetState } from "../redux/movies";
import Loader from "../components/loader";
import Movies from "../components/Movies";
import InfiniteScroll from "react-infinite-scroll-component";
const MovieList = () => {
  const dispatch = useDispatch();
  const { movies } = useSelector((store) => store);
  const { genres } = useSelector((store) => store.genres);

  useEffect(() => {
    dispatch(getMovies());
    return () => {
      dispatch(resetState());
    };
  }, [dispatch]);
  const loadMore = () => {
    if (movies.hasMore) {
      dispatch(getMovies(movies.page + 1));
    }
  };
  return movies.page === 0 && movies.isFetching ? (
    <Loader />
  ) : (
    <InfiniteScroll
      dataLength={movies.totalResults}
      next={loadMore}
      hasMore={movies.hasMore}
      loader={<Loader />}
      style={{ overflow: "hidden" }}
      endMessage={<p>Yay! you have seen it all</p>}
    >
      <Movies movies={movies} genres={genres} />
    </InfiniteScroll>
  );
};
export default MovieList;

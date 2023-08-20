import React from "react";
import Suggestion from "../components/Suggestion";
import { useSelector } from "react-redux";

const SearchMovie = () => {
  const { search } = useSelector((store) => store);
  const { genres } = useSelector((store) => store.genres);

  console.log("search123",search.isFetching)
  return <Suggestion  movies={search} genres={genres}/>;
};
export default SearchMovie;

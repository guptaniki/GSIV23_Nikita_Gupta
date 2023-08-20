import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  results: [],
  hasMore: false,
  totalResults: 0,
  page: 0,
  totalPage: 0,
  isFetching: false,
};
const moviesSlice = createSlice({
  name: "moviesSlice",
  initialState,
  reducers: {
    getMovies: (state) => {
      return {
        ...state,
        isFetching: true,
      };
    },
    fetchMovies: (state, action) => {
      return {
        ...state,
        results: [...state.results, ...action.payload.results],
        hasMore: action.payload.page < action.payload.total_pages,
        totalResults: action.payload.total_results,
        page: action.payload.page,
        totalPage: action.payload.totalPage,
        isFetching: false,
      };
    },
    resetState: (state) => {
      return initialState;
    },
  },
});

export const { getMovies, fetchMovies, resetState } = moviesSlice.actions;
export default moviesSlice.reducer;

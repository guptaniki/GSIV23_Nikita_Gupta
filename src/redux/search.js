import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  results: [],
  totalResults: 0,
  page: 0,
  totalPage: 0,
  isFetching: false,
};
const searchSlice = createSlice({
  name: "searchSlice",
  initialState,
  reducers: {
    searchMovie: (state) => {
      return {
        ...state,
        isFetching: true,
      };
    },
    fetchSearchMovie: (state, action) => {
      return {
        ...state,
        isFetching: false,
        results: action.payload.results,
        totalResults: action.payload.total_results,
        page: action.payload.page,
        totalPage: action.payload.total_pages,
      };
    },
    resetState: (state) => {
      return initialState;
    },
  },
});

export const { searchMovie, fetchSearchMovie, resetState } =
  searchSlice.actions;
export default searchSlice.reducer;

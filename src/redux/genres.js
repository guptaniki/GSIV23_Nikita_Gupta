import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  genres: [],
  isFetching: false,
};
const genresSlice = createSlice({
  name: "genresSlice",
  initialState,
  reducers: {
    getGenres: (state) => {
      return {
        ...state,
        isFetching: true,
      };
    },
    fetchGenres: (state, action) => {
      return {
        ...state,
        genres:action.payload.genres,
        isFetching: false,
      };
    },
    resetState: (state) => {
      return initialState;
    },
  },
});

export const { getGenres, fetchGenres, resetState } =
  genresSlice.actions;
export default genresSlice.reducer;

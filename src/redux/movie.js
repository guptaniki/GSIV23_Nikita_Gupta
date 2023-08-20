import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recommendations: {
    results: [],
    hasMore: false,
    totalResults: 0,
    page: 0,
    totalPage: 0,
    isFetching: false,
  },
};
const movieSlice = createSlice({
  name: "movieSlice",
  initialState,
  reducers: {
    getMoviewithID: (state) => {
      return {
        ...state,
        isFetching: true,
      };
    },
    fetchMovie: (state, action) => {
      return {
        ...state,
        ...action.payload,
        recommendations: {
          ...action.payload.recommendations,
          results: action.payload.recommendations.results.slice(0, 10),
        },
        isFetching: false,
      };
    },
    resetState: (state) => {
      return initialState;
    },
  },
});

export const { getMoviewithID, fetchMovie, resetState } = movieSlice.actions;
export default movieSlice.reducer;

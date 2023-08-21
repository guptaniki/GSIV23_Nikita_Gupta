import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cast: [],
  isFetching: false,
};
const castsSlice = createSlice({
  name: "castsSlice",
  initialState,
  reducers: {
    getCast: (state) => {
      return {
        ...state,
        isFetching: true,
      };
    },
    fetchCast: (state, action) => {
      return {
        ...state,
        cast: action.payload.cast,
        isFetching: false,
      };
    },
    resetState: (state) => {
      return initialState;
    },
  },
});

export const { getCast, fetchCast, resetState } = castsSlice.actions;
export default castsSlice.reducer;

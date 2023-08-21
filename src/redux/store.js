import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import searchReducers from "./search";
import watcherSaga from "../sagas";
import genresReducers from "./genres";
import moviesReducers from "./movies";
import moviePageReducers from "./movie";
import castReducers from "./cast";
import createSagaMiddleware from "@redux-saga/core";
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    search: searchReducers,
    genres: genresReducers,
    movies: moviesReducers,
    moviePage: moviePageReducers,
    cast: castReducers,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ think: false }).prepend(sagaMiddleware);
  },
});
sagaMiddleware.run(watcherSaga);
export default store;

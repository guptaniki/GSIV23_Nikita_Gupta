import {
  delay,
  all,
  call,
  put,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";
import { fetchSearchMovie, searchMovie } from "../redux/search";
import { getMovies, fetchMovies } from "../redux/movies";
import { API_KEY } from "../config";
import TheMovieDBApi from "../lib/api";
import { fetchGenres, getGenres } from "../redux/genres";
import { getMoviewithID, fetchMovie } from "../redux/movie";
const api = new TheMovieDBApi(API_KEY);

function* fetchSearchMovies(action) {
  yield delay(500);

  yield put(fetchSearchMovie(yield call(api.searchMovies, action.payload)));
}
function* fetchedGenres() {
  yield put(fetchGenres(yield call(api.getGenres)));
}
function* fetchedMovies(action) {
  yield put(fetchMovies(yield call(api.getMovies, action.payload)));
}
function* fetchedMovie(action) {
  yield put(fetchMovie(yield call(api.getMoviewithID, action.payload)));
}
export default function* watcherSaga() {
  yield all([
    yield takeEvery(getMoviewithID.type, fetchedMovie),
    yield takeEvery(getMovies.type, fetchedMovies),
    yield takeEvery(getGenres.type, fetchedGenres),
    yield takeLatest(searchMovie.type, fetchSearchMovies),
  ]);
}

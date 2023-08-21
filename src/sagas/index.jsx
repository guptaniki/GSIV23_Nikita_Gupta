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
import { fetchMovie, getMovie } from "../redux/movie";
import { fetchCast, getCast } from "../redux/cast";
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
  yield put(fetchMovie(yield call(api.getMovie, action.payload)));
}
function* fetchedCast(action) {
  yield put(fetchCast(yield call(api.getCast, action.payload)));
}
export default function* watcherSaga() {
  yield all([
    yield takeEvery(getMovie.type, fetchedMovie),
    yield takeEvery(getCast.type, fetchedCast),
    yield takeEvery(getMovies.type, fetchedMovies),
    yield takeEvery(getGenres.type, fetchedGenres),
    yield takeLatest(searchMovie.type, fetchSearchMovies),
  ]);
}

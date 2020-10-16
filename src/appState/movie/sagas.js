import api from '../../api';
import { takeLeading, put } from '@redux-saga/core/effects';
import {
  FETCH_MOVIES,
  SET_MOVIES
} from './constants';
import {
  fetchMoviesAction,
  setMoviesAction
} from './actions';

function* fetchMovies(action) {
  try {
    const resp = yield api.movie.fetchMovies();
    console.log("Fetch Saga: ")
    console.log(resp.data.results)
    yield put(setMoviesAction(resp.data.results));
  } catch (e) {
    yield put(setMoviesAction([]));
    if (action.onFailure) {
      action.onFailure();
    }
  }
}

function* watchFetchMovies() {
  yield takeLeading(FETCH_MOVIES, fetchMovies);
}

export const movieSagas = [
  watchFetchMovies()
];

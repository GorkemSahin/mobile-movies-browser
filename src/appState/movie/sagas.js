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
    console.log(resp)
    yield put(setMoviesAction(resp.data.items));
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

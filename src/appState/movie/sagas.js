import api from '../../api';
import { takeEvery, takeLeading, put } from '@redux-saga/core/effects';
import {
  FETCH_MOVIES
} from './constants';
import {
  setMoviesAction
} from './actions';

function* fetchMovies(action) {
  try {
    const resp = yield api.movie.fetchMovies(action.genreId);
    yield put(setMoviesAction(resp.data.results));
  } catch (e) {
    yield put(setMoviesAction([]));
  }
}

function* watchFetchMovies() {
  yield takeLeading(FETCH_MOVIES, fetchMovies);
}

export const movieSagas = [
  watchFetchMovies()
];

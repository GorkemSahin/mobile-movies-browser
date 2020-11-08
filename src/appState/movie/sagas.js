import api from '../../api';
import { takeEvery, put } from '@redux-saga/core/effects';
import {
  FETCH_MOVIES
} from './constants';
import {
  setMoviesAction
} from './actions';

function* fetchMovies(action) {
  try {
    const resp = yield api.movie.fetchMovies(action.genreId);
    yield put(setMoviesAction(resp.data.results, action.genreId));
  } catch (e) {
    yield put(setMoviesAction([], action.genreId));
  }
}

function* watchFetchMovies() {
  yield takeEvery(FETCH_MOVIES, fetchMovies);
}

export const movieSagas = [
  watchFetchMovies()
];

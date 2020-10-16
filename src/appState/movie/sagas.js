import api from '../../api';
import { takeLeading, put } from '@redux-saga/core/effects';
import {
  FETCH_POPULAR_MOVIES,
  FETCH_MOVIES_BY_GENRE
} from './constants';
import {
  setPopularMoviesAction,
  setMoviesByGenreAction
} from './actions';

function* fetchPopularMovies(action) {
  try {
    const resp = yield api.movie.fetchPopularMovies();
    yield put(setPopularMoviesAction(resp.data.results));
  } catch (e) {
    yield put(setPopularMoviesAction([]));
    if (action.onFailure) {
      action.onFailure();
    }
  }
}

function* watchFetchPopularMovies() {
  yield takeLeading(FETCH_POPULAR_MOVIES, fetchPopularMovies);
}

function* fetchMoviesByGenre(action) {
  try {
    const resp = yield api.movie.fetchMoviesByGenre(action.genreId);
    yield put(setMoviesByGenreAction(resp.data.results));
  } catch (e) {
    yield put(setMoviesByGenreAction([]));
    if (action.onFailure) {
      action.onFailure();
    }
  }
}

function* watchFetchMoviesByGenre() {
  yield takeLeading(FETCH_MOVIES_BY_GENRE, fetchMoviesByGenre);
}

export const movieSagas = [
  watchFetchPopularMovies(),
  watchFetchMoviesByGenre()
];

import api from '../../api';
import { takeLeading, put } from '@redux-saga/core/effects';
import {
  FETCH_GENRES,
} from './constants';
import {
  setGenresAction
} from './actions';

function* fetchGenres(action) {
  try {
    const resp = yield api.genre.fetchGenres();
    yield put(setGenresAction(resp.data.genres));
  } catch (e) {
    yield put(setGenresAction([]));
    if (action.onFailure) {
      action.onFailure();
    }
  }
}

function* watchFetchGenres() {
  yield takeLeading(FETCH_GENRES, fetchGenres);
}

export const genreSagas = [
  watchFetchGenres()
];

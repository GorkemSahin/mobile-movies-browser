import api from '../../api';
import { takeEvery, takeLeading, put } from '@redux-saga/core/effects';
import {
  FETCH_MEDIA,
  SEARCH_MEDIA
} from './constants';
import { setMediaAction } from './actions';

function* fetchMedia(action) {
  try {
    const resp = yield api.media.fetchMedia(action.mediaType, action.genreId);
    yield put(setMediaAction(action.mediaType, action.genreId, resp.data.results));
  } catch (e) {
    if (action.onFail) action.onFail();
    yield put(setMediaAction(action.mediaType, action.genreId, []));
  }
}

function* watchFetchMedia() {
  yield takeEvery(FETCH_MEDIA, fetchMedia);
}

function* searchMedia(action) {
  try {
    const resp = yield api.media.searchMedia(action.mediaType, action.query);
    if (action.onSuccess) action.onSuccess(resp.data.results);
  } catch (e) {
    if (action.onFail) action.onFail();
  }
}

function* watchSearchMedia() {
  yield takeLeading(SEARCH_MEDIA, searchMedia);
}

export const mediaSagas = [
  watchFetchMedia(),
  watchSearchMedia()
];

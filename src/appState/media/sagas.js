import api from '../../api';
import { takeEvery, put } from '@redux-saga/core/effects';
import {
  FETCH_MEDIA
} from './constants';
import {
  setMediaAction
} from './actions';

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

export const mediaSagas = [
  watchFetchMedia()
];

import {
  FETCH_MEDIA,
  SET_MEDIA
} from './constants';

export const fetchMediaAction = (mediaType, genreId, onFail) => {
  return {
    type: FETCH_MEDIA,
    mediaType,
    genreId,
    onFail
  };
};

export const setMediaAction = (mediaType, genreId, media) => {
  return {
    type: SET_MEDIA,
    mediaType,
    media,
    genreId
  };
};
import {
  FETCH_MEDIA,
  SET_MEDIA,
  SEARCH_MEDIA
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

export const searchMediaAction = (mediaType, query, onSuccess, onFail) => {
  return {
    type: SEARCH_MEDIA,
    query,
    mediaType,
    onSuccess,
    onFail
  };
};
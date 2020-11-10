import {
    FETCH_GENRES,
    SET_GENRES
} from './constants';
  
export const fetchGenresAction = (onFail) => {
  return {
    type: FETCH_GENRES,
    onFail
  };
};

export const setGenresAction = (genres) => {
  return {
    type: SET_GENRES,
    genres
  };
};
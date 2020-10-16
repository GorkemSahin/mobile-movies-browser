import {
    FETCH_GENRES,
    SET_GENRES
} from './constants';
  
export const fetchGenresAction = (onFailure) => {
  return {
    type: FETCH_GENRES,
    onFailure
  };
};

export const setGenresAction = (genres) => {
  return {
    type: SET_GENRES,
    genres
  };
};
import {
    FETCH_GENRES,
    SET_GENRES
} from './constants';
  
export const fetchGenresAction = () => {
  return {
    type: FETCH_GENRES,
  };
};

export const setGenresAction = (genres) => {
  return {
    type: SET_GENRES,
    genres
  };
};
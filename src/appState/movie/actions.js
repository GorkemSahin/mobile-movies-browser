import {
    FETCH_MOVIES,
    SET_MOVIES
} from './constants';
  
export const fetchMoviesAction = (onFailure) => {
  return {
    type: FETCH_MOVIES,
    onFailure
  };
};

export const setMoviesAction = (movies) => {
  return {
    type: SET_MOVIES,
    movies
  };
};
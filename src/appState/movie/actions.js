import {
  FETCH_MOVIES,
  SET_MOVIES
} from './constants';
  
export const fetchMoviesAction = (genreId) => {
  return {
    type: FETCH_MOVIES,
    genreId
  };
};

export const setMoviesAction = (movies) => {
  return {
    type: SET_MOVIES,
    movies
  };
};
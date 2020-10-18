import {
  FETCH_MOVIES,
  SET_MOVIES
} from './constants';
  
export const fetchMoviesAction = (genreId, onFailure) => {
  return {
    type: FETCH_MOVIES,
    genreId,
    onFailure
  };
};

export const setMoviesAction = (movies) => {
  return {
    type: SET_MOVIES,
    movies
  };
};
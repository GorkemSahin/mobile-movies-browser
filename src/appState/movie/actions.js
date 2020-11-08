import {
  FETCH_MOVIES,
  SET_GENRE_MOVIES,
  SET_POPULAR_MOVIES
} from './constants';
  
export const fetchMoviesAction = (genreId) => {
  return {
    type: FETCH_MOVIES,
    genreId
  };
};

export const setMoviesAction = (movies, genreId) => {
  return {
    type: genreId ? SET_GENRE_MOVIES : SET_POPULAR_MOVIES,
    movies,
    genreId
  };
};
import {
  FETCH_POPULAR_MOVIES,
  FETCH_MOVIES_BY_GENRE,
  SET_MOVIES_BY_GENRE,
  SET_POPULAR_MOVIES
} from './constants';
  
export const fetchPopularMoviesAction = (onFailure) => {
  return {
    type: FETCH_POPULAR_MOVIES,
    onFailure
  };
};

export const fetchMoviesByGenreAction = (genreId, onFailure) => {
  return {
    type: FETCH_MOVIES_BY_GENRE,
    genreId,
    onFailure
  };
};

export const setPopularMoviesAction = (movies) => {
  return {
    type: SET_POPULAR_MOVIES,
    movies
  };
};

export const setMoviesByGenreAction = (movies) => {
  return {
    type: SET_MOVIES_BY_GENRE,
    movies
  };
};
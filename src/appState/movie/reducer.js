import {
  initialState,
  SET_POPULAR_MOVIES,
  SET_GENRE_MOVIES
} from './constants';

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POPULAR_MOVIES:
      return { ...state, popularMovies: action.movies };
    case SET_GENRE_MOVIES:
      return { ...state, [action.genreId]: action.movies };
    default:
      return state;
  }
};
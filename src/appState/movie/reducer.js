import {
  initialState,
  SET_POPULAR_MOVIES,
  SET_MOVIES_BY_GENRE
} from './constants';

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POPULAR_MOVIES:
      return { ...state, popularMovies: action.movies };
    case SET_MOVIES_BY_GENRE:
        return { ...state, moviesByGenre: action.movies };
    default:
      return state;
  }
};
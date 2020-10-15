import {
  initialState,
  SET_MOVIES
} from './constants';

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return {...state, movies: action.movies};
  }
  return state;
};

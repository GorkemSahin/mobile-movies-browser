import {
  initialState,
  SET_MOVIES
} from './constants';
import update from 'immutability-helper';

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return update(state, {movies: {$set: action.movies}});
    default:
      return state;
  }
};
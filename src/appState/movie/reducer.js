import {
  initialState,
  SET_MOVIES
} from './constants';

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return state.concat(action.movies.filter(({ id }) => !state.find(movie => movie.id == id) ));
    default:
      return state;
  }
};
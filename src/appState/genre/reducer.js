import {
  initialState,
  SET_GENRES
} from './constants';

export const genreReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GENRES:
      return [ ...state, ...action.genres ];
    default:
      return state;
  }
};
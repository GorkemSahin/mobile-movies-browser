import {
  initialState,
  SET_TVS
} from './constants';

export const tvReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TVS:
      return [ ...state, ...action.tvs ];
    default:
      return state;
  }
};
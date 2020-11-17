import {
  initialState,
  SET_MEDIA
} from './constants';

export const mediaReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MEDIA:
      return { ...state, [action.mediaType]: { ...state[action.mediaType], [action.genreId]: action.media }};
    default:
      return state;
  }
};
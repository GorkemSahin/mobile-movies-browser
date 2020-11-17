import {
  initialState,
  SET_MEDIA
} from './constants';

/* Please see the initialState in the media constants file for a
brief explanation of the store structure. */
export const mediaReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MEDIA:
      return { ...state, [action.mediaType]: { ...state[action.mediaType], [action.genreId]: action.media }};
    default:
      return state;
  }
};
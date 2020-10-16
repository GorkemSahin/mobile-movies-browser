import {createSelector} from 'reselect';

export const genreSelector = createSelector(
  (state) => state.genres,
  (genres) => genres
)
import {createSelector} from 'reselect';

export const movieSelector = createSelector(
  (state) => state.movies,
  (movies) => movies,
);
import {createSelector} from 'reselect';

export const moviesSelector = createSelector(
  (state) => state.movie.movies,
  (movies) => movies
);
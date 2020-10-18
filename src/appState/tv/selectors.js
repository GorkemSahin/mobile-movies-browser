import {createSelector} from 'reselect';

export const threePopularTvsSelector = createSelector(
  (state) => state.tvs,
  (tvs) => tvs ? tvs : []
);

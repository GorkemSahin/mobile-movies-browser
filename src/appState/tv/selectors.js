import {createSelector} from 'reselect';

export const tvsSelector = createSelector(
  (state) => state.tvs,
  (tvs) => tvs ? tvs : []
);

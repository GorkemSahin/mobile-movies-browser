import {createSelector} from 'reselect';

export const genresSelector = createSelector(
  (state) => state.genres,
  (genres) => genres
)

export const genreSelector = (genreId) => {
  return createSelector(
    (state) => state.genres,
    (genres) => genres ? genres.find(genre => genre.id == genreId) : null
  );
}
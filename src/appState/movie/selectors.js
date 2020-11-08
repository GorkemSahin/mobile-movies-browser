import {createSelector} from 'reselect';

export const featuredMovieSelector = createSelector(
  (state) => state.movies.popularMovies,
  (movies) => movies ? movies.sort((a, b) => (b.popularity - a.popularity))[0] : null
);

export const popularMoviesSelector = createSelector(
  (state) => state.movies.popularMovies,
  (movies) => movies ? movies.sort((a, b) => (b.popularity - a.popularity)) : []
);

export const moviesSelectorByGenre = (genreId) => {
  return createSelector(
    (state) => state.movies,
    (movies) => (movies && genreId) ?  movies[genreId] : []
  );
}
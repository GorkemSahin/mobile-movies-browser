import {createSelector} from 'reselect';

export const featuredMovieSelector = createSelector(
  (state) => state.movies,
  (movies) => movies ? movies.sort((a, b) => (b.popularity - a.popularity))[0] : null
);

export const popularMoviesSelector = createSelector(
  (state) => state.movies,
  (movies) => movies ? movies.sort((a, b) => (b.popularity - a.popularity)).slice(1, 20) : []
);

export const familyMoviesSelector = createSelector(
  (state) => state.movies,
  (state) => state.genres ? state.genres.find(genre => genre.name == "Family") ? state.genres.find(genre => genre.name == "Family").id : null : null,
  (movies, genreId) => (movies && genreId) ? movies.filter(movie => movie.genre_ids.some(id => id == genreId)) : []
);

export const documentaryMoviesSelector = createSelector(
  (state) => state.movies,
  (state) => state.genres ? state.genres.find(genre => genre.name == "Documentary") ? state.genres.find(genre => genre.name == "Documentary").id : null : null,
  (movies, genreId) => (movies && genreId) ? movies.filter(movie => movie.genre_ids.some(id => id == genreId)) : []
);
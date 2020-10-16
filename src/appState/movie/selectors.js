import {createSelector} from 'reselect';

export const featuredMovieSelector = createSelector(
  (state) => state.movie.popularMovies,
  (movies) => movies ? movies.sort((a, b) => (b.popularity - a.popularity))[0] : null
);

export const threePopularMoviesSelector = createSelector(
  (state) => state.movie.popularMovies,
  (movies) => movies ? movies.sort((a, b) => (b.popularity - a.popularity)).slice(1, 4) : []
);

export const threeFamilyMoviesSelector = createSelector(
  (state) => state.movie.moviesByGenre,
  (state) => state.genres ? state.genres.find(genre => genre.name == "Family") ? state.genres.find(genre => genre.name == "Family").id : null : null,
  (movies, genreId) => (movies && genreId) ? movies.filter(movie => movie.genre_ids.some(id => id == genreId)).slice(0, 3) : []
);

export const threeDocumentaryMoviesSelector = createSelector(
  (state) => state.movie.moviesByGenre,
  (state) => state.genres ? state.genres.find(genre => genre.name == "Documentary") ? state.genres.find(genre => genre.name == "Documentary").id : null : null,
  (movies, genreId) => (movies && genreId) ? movies.filter(movie => movie.genre_ids.some(id => id == genreId)).slice(0, 3) : []
);

export const moviesSelector = createSelector(
  (state) => state.movie.movies,
  (movies) => movies
)
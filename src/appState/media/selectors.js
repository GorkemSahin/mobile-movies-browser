import {createSelector} from 'reselect';
import { memoize } from "lodash";

export const featuredMovieSelector = createSelector(
  (state) => state.media.movie.popular,
  (movies) => movies ? movies.sort((a, b) => (b.popularity - a.popularity))[0] : null
);

// Please see the media contants file for a brief explanation of the appstate structure.
export const mediaSelector = createSelector(
  (state) => state.media,
  (media) =>
    memoize((mediaType, genreId) => {
      return media[mediaType] ? media[mediaType][genreId] : [];
    },
    (mediaType, genreId) => mediaType + genreId)
);
/* An example of what the state will look like once it is populated:
{
  movie: {
    popular: [],
    1: [],
    2: [],
    ...
  },
  tv: {
    popular: [],
    1: [],
    2: [],
    ...
  },
}
(The numbers 1, 2... represent genre IDs.)
*/

export const initialState = {
  movie: {
    popular: []
  },
  tv: {
    popular: []
  },
};

export const MOVIE = "movie";
export const TV = "tv";
export const POPULAR = "popular";
export const FETCH_MEDIA = '@MEDIA_FETCH';
export const SET_MEDIA = '@MEDIA_SET';
export const SEARCH_MEDIA = '@MEDIA_SEARCH';

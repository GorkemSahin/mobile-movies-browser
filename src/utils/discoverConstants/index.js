import { MOVIE, TV, POPULAR } from '../../appState/media/constants';

/* Genre IDs to be displayed on the discover screen.
Null genreId means popular movies regardless of their genres. */
export default [
  {
    name: "Popular Movies",
    mediaType: MOVIE,
    genreId: POPULAR,
    description: "Most popular movies"
  },
  {
    name: "Popular TV Shows",
    mediaType: TV,
    genreId: POPULAR,
    description: "Most popular TV shows"
  },
  {
    name: "Family Movies",
    mediaType: MOVIE,
    genreId: 10751,
    description: "Movies to watch with your family"
  },
  {
    name: "Documentaries",
    mediaType: MOVIE,
    genreId: 99,
    description: "Most interesting documentaries"
  }
];
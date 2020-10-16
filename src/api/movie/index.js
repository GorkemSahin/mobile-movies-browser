import axios from '../../utils/axios';

const fetchPopularMovies = async () => {
  return await axios.get(`movie/popular`);
};

const fetchMoviesByGenre = async (genreId) => {
  return await axios.get(`discover/movie`, { params: { with_genres: genreId } })
}

export default {fetchPopularMovies, fetchMoviesByGenre};
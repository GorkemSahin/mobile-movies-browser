import axios from '../../utils/axios';

const fetchMovies = async (genreId) => {
  return genreId ? fetchWithGenre(genreId) : fetchWithoutGenre();
};

const searchMovies = async (query) => {
  return axios.get('/search/movie', { params: { query: query }})
}

const fetchWithGenre = async (genreId) => await axios.get(`discover/movie`, { params: { with_genres: genreId } });
const fetchWithoutGenre = async () => await axios.get(`movie/popular`);

export default { fetchMovies, searchMovies };
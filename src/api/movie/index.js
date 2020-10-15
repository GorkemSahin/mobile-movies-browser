import axios from '../../utils/axios';

const fetchMovies = async () => {
  return await axios.get(`discover/movie?sort_by=popularity.desc`);
};

export default {fetchMovies};
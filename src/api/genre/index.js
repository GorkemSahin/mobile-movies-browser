import axios from '../../utils/axios';

const fetchGenres = async () => {
  return await axios.get(`/genre/movie/list`);
};

export default {fetchGenres};
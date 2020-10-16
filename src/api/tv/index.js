import axios from '../../utils/axios';

const fetchTvs = async () => {
  return await axios.get(`/tv/popular`);
};

export default {fetchTvs};
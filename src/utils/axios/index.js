import axios from 'axios';
import { BASE_URL, API_KEY } from '@env'

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {},
});

instance.interceptors.request.use(
  async (config) => {
    config.params = {api_key: API_KEY}
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default instance;

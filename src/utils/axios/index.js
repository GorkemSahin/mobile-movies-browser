import axios from 'axios';
import Config from 'react-native-config';

// TODO fix react-native-config and acquire these values from .env file
const BASE_URL = 'https://api.themoviedb.org/3/'
const API_KEY = '5c75e7e839cfa630ddd7d8ee2c2d47e6'

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
    console.log(error)
    return Promise.reject(error);
  },
);

export default instance;

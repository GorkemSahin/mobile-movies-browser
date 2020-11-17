import { POPULAR } from '../../appState/media/constants';
import axios from '../../utils/axios';

const fetchMedia = async (mediaType, genreId) => {
  return genreId === POPULAR ? fetchPopularMediaByType(mediaType) : fetchMediaByTypeAndGenre(mediaType, genreId);
};

const fetchPopularMediaByType = async (mediaType) => {
  return await axios.get(`${mediaType}/popular`);
};

const fetchMediaByTypeAndGenre = async (mediaType, with_genres) => {
  return await axios.get(`discover/${mediaType}`, { params: { with_genres }});
};

const searchMedia = async (mediaType, query) => {
  return axios.get(`search/${mediaType}`, { params: { query }})
}

export default { fetchMedia, searchMedia };
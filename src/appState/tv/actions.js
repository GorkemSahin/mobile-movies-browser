import {
    FETCH_TVS,
    SET_TVS
} from './constants';
  
export const fetchTvsAction = () => {
  return {
    type: FETCH_TVS
  };
};

export const setTvsAction = (tvs) => {
  return {
    type: SET_TVS,
    tvs
  };
};
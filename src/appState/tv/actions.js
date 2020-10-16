import {
    FETCH_TVS,
    SET_TVS
} from './constants';
  
export const fetchTvsAction = (onFailure) => {
  return {
    type: FETCH_TVS,
    onFailure
  };
};

export const setTvsAction = (tvs) => {
  return {
    type: SET_TVS,
    tvs
  };
};
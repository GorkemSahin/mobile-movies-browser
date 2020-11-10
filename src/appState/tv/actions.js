import {
    FETCH_TVS,
    SET_TVS
} from './constants';
  
export const fetchTvsAction = (onFail) => {
  return {
    type: FETCH_TVS,
    onFail
  };
};

export const setTvsAction = (tvs) => {
  return {
    type: SET_TVS,
    tvs
  };
};
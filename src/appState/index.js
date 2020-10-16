import {createStore, applyMiddleware, combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {all} from 'redux-saga/effects';
import { movieReducer } from './movie/reducer';
import { movieSagas } from './movie/sagas';
import { tvReducer } from './tv/reducer';
import { genreReducer } from './genre/reducer';
import { genreSagas } from './genre/sagas';
import { tvSagas } from './tv/sagas';

const reducer = combineReducers({
  movie: movieReducer,
  tvs: tvReducer,
  genres: genreReducer
});

function* allSagas() {
  yield all([
    ...movieSagas,
    ...tvSagas,
    ...genreSagas
  ]);
}

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
export const store = createStore(reducer, applyMiddleware(...middlewares));
sagaMiddleware.run(allSagas);
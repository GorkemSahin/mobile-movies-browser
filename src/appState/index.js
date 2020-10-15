import {createStore, applyMiddleware, combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {all} from 'redux-saga/effects';
import { movieReducer } from './movie/reducer';
import { movieSagas } from './movie/sagas';

const reducer = combineReducers({
  movie: movieReducer
});

function* allSagas() {
  yield all([
    ...movieSagas
  ]);
}

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
export const store = createStore(reducer, applyMiddleware(...middlewares));
sagaMiddleware.run(allSagas);
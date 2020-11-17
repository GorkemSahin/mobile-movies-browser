import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { mediaReducer } from './media/reducer';
import { mediaSagas } from './media/sagas';

const reducer = combineReducers({
  media: mediaReducer
});

function* allSagas() {
  yield all([
    ...mediaSagas
  ]);
}

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
export const store = createStore(reducer, applyMiddleware(...middlewares));
sagaMiddleware.run(allSagas);
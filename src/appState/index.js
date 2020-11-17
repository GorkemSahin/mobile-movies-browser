import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { mediaReducer } from './media/reducer';
import { mediaSagas } from './media/sagas';

/* If the app was to be extended with more features and new appstate sections  became
necessary, it'll be easy to add them and expand the app later on. For example, a new
module called genre with its own actions, constants, sagas and reducer could be added,
get combined with others and implemented as part of the middleware here. */

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
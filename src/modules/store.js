import { applyMiddleware, createStore } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
// import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './reducer';

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(),
  applyMiddleware(
    thunk,
    logger,
  ),
);

export default store;

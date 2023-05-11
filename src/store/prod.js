'use strict';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist'
import thunk from 'redux-thunk';
import reducer from '../reducer';

export function createNewStore() {
  const store = createStore(reducer, compose(
    applyMiddleware(thunk),
  ));

  persistStore(store);

  return store;
}

export default createNewStore();

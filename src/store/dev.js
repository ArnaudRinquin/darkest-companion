'use strict';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import reducer from '../reducer';
import devtools from '../components/devtools';

export function createNewStore(initialState) {
  const store = createStore(
    reducer,
    compose(
      applyMiddleware(thunk),
      devtools.instrument()
    )
  )

  if (module.hot) {
    module.hot.accept('../reducer', () =>
      store.replaceReducer(require('../reducer')).default
    );
  }

  persistStore(store);

  return store;
};

export default createNewStore();

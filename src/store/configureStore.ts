import { applyMiddleware, compose, createStore } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import rootReducers from './rootReducers';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

const middleware = [thunk];

export const configureStore = () => {
  const store = createStore(persistedReducer, compose(applyMiddleware(...middleware)));
  return store;
};

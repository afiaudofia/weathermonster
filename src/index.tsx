import React from 'react';
import ReactDOM from 'react-dom';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import './index.scss';
import { configureStore } from './store/configureStore';
import 'nprogress/nprogress.css';
import 'react-toastify/dist/ReactToastify.css';
import { WeatherMonster } from './screens/WeatherMonster';

const store = configureStore();
const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ToastContainer />
      <WeatherMonster />
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);

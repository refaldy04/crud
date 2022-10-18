import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk'; // untuk menghandle permintaan secara asynchronous
import { persistStore } from 'redux-persist';

import reducer from './reducers';

let middleware = [];
if (process.env.REACT_APP_NODE_ENV) {
  middleware = [thunk, logger];
} else {
  middleware = [thunk];
}

export const store = configureStore({
  reducer,
  middleware,
});

export const persistor = persistStore(store);

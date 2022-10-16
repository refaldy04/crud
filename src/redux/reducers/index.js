import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import auth from './user';
import product from './product';

const authConfig = {
  storage,
  key: 'auth',
};

const reducer = combineReducers({
  user: auth,
  product,
});

export default reducer;

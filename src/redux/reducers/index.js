import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import auth from './user';

const authConfig = {
  storage,
  key: 'auth',
};

const reducer = combineReducers({
  user: auth,
});

export default reducer;

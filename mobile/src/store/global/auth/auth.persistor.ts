import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {authReducers} from './auth.slice';

const authPersistConfig = {
  key: 'auth',
  storage,
};

export const authPersistReducer = persistReducer(
  authPersistConfig,
  authReducers,
);

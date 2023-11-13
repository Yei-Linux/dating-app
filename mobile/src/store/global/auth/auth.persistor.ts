import {persistReducer} from 'redux-persist';
import {authReducers} from './auth.slice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const authPersistConfig = {
  key: 'auth',
  storage: AsyncStorage,
};

export const authPersistReducer = persistReducer(
  authPersistConfig,
  authReducers,
);

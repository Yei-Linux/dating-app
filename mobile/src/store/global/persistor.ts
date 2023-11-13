import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';
import {rootReducers} from './reducers';
import {datingMatchApi} from '../../rtk-query';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  timeout: 0,
  blacklist: [datingMatchApi.reducerPath],
};
export const persistedReducer = persistReducer(persistConfig, rootReducers);

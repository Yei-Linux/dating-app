import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';
import {rootReducers} from './reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
export const persistedReducer = persistReducer(persistConfig, rootReducers);

import {combineReducers} from '@reduxjs/toolkit';
import {datingMatchApi} from '../../rtk-query';
import {authPersistReducer} from './auth';

export const rootReducers = combineReducers({
  auth: authPersistReducer,
  [datingMatchApi.reducerPath]: datingMatchApi.reducer,
});

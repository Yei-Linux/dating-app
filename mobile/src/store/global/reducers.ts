import {combineReducers} from '@reduxjs/toolkit';
import {datingMatchApi} from '../../rtk-query';

export const rootReducers = combineReducers({
  [datingMatchApi.reducerPath]: datingMatchApi.reducer,
});

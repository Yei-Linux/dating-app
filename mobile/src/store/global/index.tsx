import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {datingMatchApi} from '../../rtk-query';

export const store = configureStore({
  reducer: {
    [datingMatchApi.reducerPath]: datingMatchApi.reducer,
  },
  middleware: () => getDefaultMiddleware().concat(datingMatchApi.middleware),
});

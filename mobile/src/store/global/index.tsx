import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {datingMatchApi} from '../../rtk-query';
import {useDispatch} from 'react-redux';

export const store = configureStore({
  reducer: {
    [datingMatchApi.reducerPath]: datingMatchApi.reducer,
  },
  middleware: () => getDefaultMiddleware().concat(datingMatchApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

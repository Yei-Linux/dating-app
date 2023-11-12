import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {datingMatchApi} from '../../rtk-query';
import {useDispatch} from 'react-redux';
import {persistedReducer} from './persistor';
import {setupListeners} from '@reduxjs/toolkit/query';
import {persistStore} from 'redux-persist';

export const store = configureStore({
  reducer: persistedReducer,
  middleware: () => getDefaultMiddleware().concat(datingMatchApi.middleware),
});
setupListeners(store.dispatch);

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

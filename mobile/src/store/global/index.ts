import {configureStore} from '@reduxjs/toolkit';
import {datingMatchApi} from '../../rtk-query';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {persistedReducer} from './persistor';
import {setupListeners} from '@reduxjs/toolkit/query';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistStore,
} from 'redux-persist';

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(datingMatchApi.middleware),
});
setupListeners(store.dispatch);

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

/**
 * Selector integrated with rtk-query
 * E.g
  const signIn = useAppSelector(
    state => state.datingMatchApi.mutations.signIn?.data,
  );
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

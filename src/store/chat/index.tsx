import {configureStore} from '@reduxjs/toolkit';
import typerReducer from './slices/typer.slice';
import {atomWithStore} from 'jotai-redux';

const chatStore = configureStore({
  reducer: {
    typer: typerReducer,
  },
});

export const chatStoreAtom = atomWithStore(chatStore);

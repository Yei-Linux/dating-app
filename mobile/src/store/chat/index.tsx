import {configureStore} from '@reduxjs/toolkit';
import {atomWithStore} from 'jotai-redux';

import typerReducer from './slices/typer.slice';
import messageReducer from './slices/message.slice';

const chatStore = configureStore({
  reducer: {
    typer: typerReducer,
    messages: messageReducer,
  },
});

export const chatStoreAtom = atomWithStore(chatStore);

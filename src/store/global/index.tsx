import {configureStore} from '@reduxjs/toolkit';
import imboxReducer from './slices/imbox.slice';

export const store = configureStore({
  reducer: {chat: imboxReducer},
});

import {createSlice} from '@reduxjs/toolkit';
import {authReducer} from './auth.reducer';

export type TAuthInitialState = {
  id: number;
  email: string;
  name: string;
  lastName: string;
  age: number;
  profileImg: string | null;
  token: string;
} | null;

export const authInitialState: TAuthInitialState = null;

export const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: authReducer,
  extraReducers: {},
});

export const authActions = authSlice.actions;
export const authReducers = authSlice.reducer;

import {createSlice} from '@reduxjs/toolkit';
import {authReducer} from './auth.reducer';
import {datingMatchApi} from '../../../rtk-query';
import {jwtDecode} from 'jwt-decode';

export type TPayloadToken = {
  id: number;
  email: string;
  name: string;
  lastName: string;
  profileImg: string;
  description: string;
};

export type TAuthInitialState = {
  user: TPayloadToken;
  token: string;
} | null;

export const authInitialState: TAuthInitialState = null;

export const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: authReducer,
  extraReducers: builder => {
    builder.addMatcher(
      datingMatchApi.endpoints.signIn.matchFulfilled,
      (state: TAuthInitialState, {payload}) => {
        const res: TPayloadToken = jwtDecode(payload.token);
        const user = {
          id: res.id,
          email: res.email,
          name: res.name,
          lastName: res.lastName,
          profileImg: res.profileImg,
          description: res.description,
        };

        (state as any).user = user;
        (state as any).token = payload.token;
      },
    );
  },
});

export const authActions = authSlice.actions;
export const authReducers = authSlice.reducer;

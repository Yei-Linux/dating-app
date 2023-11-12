import {jwtDecode} from 'jwt-decode';
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/dist/query';
import {EndpointBuilder} from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import {TResponse} from '../../types';
import {
  TPayloadToken,
  TSignInRequest,
  TSignInResponse,
  TSignUpResponse,
} from '../../types/auth.type';

export const authApi = (
  builder: EndpointBuilder<
    BaseQueryFn<
      string | FetchArgs,
      unknown,
      FetchBaseQueryError,
      {},
      FetchBaseQueryMeta
    >,
    never,
    'datingMatchApi'
  >,
) => ({
  signIn: builder.mutation<TSignInResponse, unknown>({
    query: (body: TSignInRequest) => ({
      url: 'auth/sign-in',
      method: 'POST',
      body,
    }),
    transformResponse: (response: TResponse<TSignInResponse>) => {
      const payload: TPayloadToken = jwtDecode(response.data.token);
      return {
        id: payload.id,
        email: payload.email,
        name: payload.name,
        lastName: payload.lastName,
        profileImg: payload.profileImg,
        description: payload.description,
        token: response.data.token,
      };
    },
  }),

  signUp: builder.mutation<TSignUpResponse, unknown>({
    query: (body: TSignInRequest) => ({
      url: 'auth/sign-up',
      method: 'POST',
      body,
    }),
    transformResponse: (response: TResponse<TSignUpResponse>) => response.data,
  }),
});

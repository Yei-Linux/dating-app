import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/dist/query';
import {EndpointBuilder} from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import {TResponse} from '../../types';
import {
  TUpdateByUserIdRequest,
  TUpdateByUserIdResponse,
  TFindByUserIdResponse,
} from '../../types/profile.type';

export const profileApi = (
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
  findProfileByUserId: builder.query<TFindByUserIdResponse, unknown>({
    query: (params: Record<string, any>) => ({
      url: 'profile',
      method: 'GET',
      params,
    }),
    transformResponse: (response: TResponse<TFindByUserIdResponse>) =>
      response.data,
  }),
  updateProfile: builder.mutation({
    query: ({
      body,
      params,
    }: {
      body: TUpdateByUserIdRequest;
      params: Record<string, any>;
    }) => ({
      url: 'profile',
      method: 'PUT',
      body,
      params,
    }),
    transformResponse: (response: TResponse<TUpdateByUserIdResponse>) => {
      console.log('error: ', response.message);
      return response.data;
    },
  }),
});

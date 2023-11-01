import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/dist/query';
import {EndpointBuilder} from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import {TResponse, TFindChatById} from '../../types';

export const chatApi = (
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
  findChatById: builder.query<TFindChatById, unknown>({
    query: (params: Record<string, any>) => ({
      url: 'chat/private',
      method: 'GET',
      params,
    }),
    transformResponse: (response: TResponse<TFindChatById>) => response.data,
  }),
});

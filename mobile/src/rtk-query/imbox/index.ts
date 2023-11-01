import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/dist/query';
import {EndpointBuilder} from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import {IFindImboxByUserResponse, TResponse} from '../../types';

export const imboxApi = (
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
  findImboxByUser: builder.query<IFindImboxByUserResponse, unknown>({
    query: (params: Record<string, any>) => ({
      url: 'imbox',
      method: 'GET',
      params,
    }),
    transformResponse: (response: TResponse<IFindImboxByUserResponse>) =>
      response.data,
  }),
});

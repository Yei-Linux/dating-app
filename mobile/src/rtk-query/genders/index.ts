import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/dist/query';
import {EndpointBuilder} from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import {TGendersResponse, TResponse} from '../../types';

export const gendersApi = (
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
  findAllGenders: builder.query<TGendersResponse, unknown>({
    query: () => ({
      url: 'genders',
      method: 'GET',
    }),
    transformResponse: (response: TResponse<TGendersResponse>) => response.data,
  }),
});

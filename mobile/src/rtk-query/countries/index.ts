import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/dist/query';
import {EndpointBuilder} from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import {TCountriesResponse, TResponse} from '../../types';

export const countriesApi = (
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
  findAllCountries: builder.query<TCountriesResponse, unknown>({
    query: () => ({
      url: 'countries',
      method: 'GET',
    }),
    transformResponse: (response: TResponse<TCountriesResponse>) =>
      response.data,
  }),
});

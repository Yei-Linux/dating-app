import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/dist/query';
import {EndpointBuilder} from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import {
  TResponse,
  IDiscoverInteractionRequest,
  IDiscoverPeopleResponse,
} from '../../types';

export const discoverApi = (
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
  findPeople: builder.query<IDiscoverPeopleResponse, unknown>({
    query: (params: Record<string, any>) => ({
      url: 'discover',
      method: 'GET',
      params,
    }),
    transformResponse: (response: TResponse<IDiscoverPeopleResponse>) =>
      response.data,
  }),
  interactWithPeople: builder.mutation({
    query: (body: IDiscoverInteractionRequest) => ({
      url: 'discover',
      method: 'POST',
      body,
    }),
  }),
});

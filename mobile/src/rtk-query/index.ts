import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {chatApi} from './chat';
import {discoverApi} from './discover';
import {imboxApi} from './imbox';
import {profileApi} from './profile';

export const datingMatchApi = createApi({
  reducerPath: 'datingMatchApi',
  baseQuery: fetchBaseQuery({baseUrl: 'http://10.0.2.2:3001/'}),
  endpoints: builder => ({
    ...chatApi(builder),
    ...discoverApi(builder),
    ...imboxApi(builder),
    ...profileApi(builder),
  }),
});

export const {
  useFindChatByIdQuery,
  useFindPeopleQuery,
  useInteractWithPeopleMutation,
  useFindImboxByUserQuery,
  useFindProfileByUserIdQuery,
  useUpdateProfileMutation,
} = datingMatchApi;

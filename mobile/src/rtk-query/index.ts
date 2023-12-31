import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {chatApi} from './chat';
import {discoverApi} from './discover';
import {imboxApi} from './imbox';
import {profileApi} from './profile';
import {authApi} from './auth';
import {countriesApi} from './countries';
import {gendersApi} from './genders';
import {RootState} from '../store/global';
import {BASE_URL} from '../constants';

export const datingMatchApi = createApi({
  reducerPath: 'datingMatchApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL + '/',
    prepareHeaders: (headers, {getState}) => {
      const token = ((getState() as RootState).auth as any).token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
    },
  }),
  endpoints: builder => ({
    ...chatApi(builder),
    ...discoverApi(builder),
    ...imboxApi(builder),
    ...profileApi(builder),
    ...authApi(builder),
    ...countriesApi(builder),
    ...gendersApi(builder),
  }),
});

export const {
  useFindChatByIdQuery,
  useFindPeopleQuery,
  useInteractWithPeopleMutation,
  useFindImboxByUserQuery,
  useFindProfileByUserIdQuery,
  useUpdateProfileMutation,
  useSignUpMutation,
  useSignInMutation,
  useFindAllCountriesQuery,
  useFindAllGendersQuery,
} = datingMatchApi;

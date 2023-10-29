import React from 'react';
import {View} from 'react-native';
import {PeopleInteraction} from '../../shared';
import {useFetchImboxByUser} from './useFetchImboxByUser';

export const ContactsChat = () => {
  const {data} = useFetchImboxByUser();
  if (!data) {
    return null;
  }

  return (
    <View>
      {data?.map((imbox, index) => (
        <PeopleInteraction {...imbox} key={index} />
      ))}
    </View>
  );
};

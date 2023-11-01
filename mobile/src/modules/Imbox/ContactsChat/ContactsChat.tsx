import React from 'react';
import {View} from 'react-native';
import {PeopleInteraction} from '../../shared';
import {useFindImboxByUserQuery} from '../../../rtk-query';

export interface IContactsChat {
  onGoToChat: (id: number) => void;
}
export const ContactsChat = ({onGoToChat}: IContactsChat) => {
  const {data: imboxes} = useFindImboxByUserQuery({
    userId: '1',
  });

  return (
    <View>
      {imboxes?.map((imbox, index) => (
        <PeopleInteraction
          {...imbox}
          key={index}
          onGoToChat={() => onGoToChat(imbox.id)}
        />
      ))}
    </View>
  );
};

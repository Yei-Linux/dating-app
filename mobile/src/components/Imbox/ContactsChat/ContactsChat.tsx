import {atom, useAtom} from 'jotai';
import React from 'react';
import {View} from 'react-native';
import {ContactsChatMock} from './mock';
import {IPeopleInteractionComponent, PeopleInteraction} from '../../shared';

const chatImboxAtom =
  atom<Array<IPeopleInteractionComponent>>(ContactsChatMock);

export const ContactsChat = () => {
  const [chatImbox] = useAtom(chatImboxAtom);

  return (
    <View>
      {chatImbox.map((imbox, index) => (
        <PeopleInteraction {...imbox} key={index} />
      ))}
    </View>
  );
};

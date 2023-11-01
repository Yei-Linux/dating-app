import React from 'react';
import {ContactsHeader} from './ContacsHeader';
import {ContactsChat} from './ContactsChat';
import {BaseLayout} from '../../layouts';
import {ScrollView} from 'react-native';

export interface IImbox {
  onGoToChat: (id: number) => void;
}
export const Imbox = ({onGoToChat}: IImbox) => {
  return (
    <BaseLayout>
      <BaseLayout.Header>
        <ContactsHeader />
      </BaseLayout.Header>
      <BaseLayout.Body>
        <ScrollView>
          <ContactsChat onGoToChat={onGoToChat} />
        </ScrollView>
      </BaseLayout.Body>
    </BaseLayout>
  );
};

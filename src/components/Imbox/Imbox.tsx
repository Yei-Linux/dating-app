import React from 'react';
import {ContactsHeader} from './ContacsHeader';
import {ContactsChat} from './ContactsChat';
import {BaseLayout} from '../../layouts';
import {ScrollView} from 'react-native';

export const Imbox = () => {
  return (
    <BaseLayout>
      <BaseLayout.Header>
        <ContactsHeader />
      </BaseLayout.Header>
      <BaseLayout.Body>
        <ScrollView>
          <ContactsChat />
        </ScrollView>
      </BaseLayout.Body>
    </BaseLayout>
  );
};

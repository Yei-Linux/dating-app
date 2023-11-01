import React from 'react';
import {View} from 'react-native';
import {ContactsHeaderStyleSheet} from './styles';
import {Title} from '../../ui/Title/Title';

export const ContactsHeader = () => {
  return (
    <View style={[ContactsHeaderStyleSheet.wrapper]}>
      <Title
        text="Contacts"
        level="h3"
        style={ContactsHeaderStyleSheet.title}
      />
    </View>
  );
};

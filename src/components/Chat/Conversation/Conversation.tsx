import React, {FC} from 'react';
import {View} from 'react-native';
import {ConversationStyleSheet} from './styles';
import {FriendHeader} from '../FriendHeader/FriendHeader';
import {Message} from '../Message';
import {Typer} from '../Typer';

export interface IConversation {}
export const Conversation: FC<IConversation> = ({}) => {
  return (
    <View style={ConversationStyleSheet.wrapper}>
      <View style={ConversationStyleSheet.header}>
        <FriendHeader />
      </View>

      <View style={ConversationStyleSheet.body}>
        <View>
          <Message text="Hello!" />
        </View>
        <Typer />
      </View>
    </View>
  );
};

import React, {FC} from 'react';
import {View} from 'react-native';
import {ConversationStyleSheet} from './styles';
import {Friend} from '../../shared';
import {Messages} from '../Messages';
import {Typer} from '../Typer';
import {BaseLayout} from '../../../layouts';

export interface IConversation {}
export const Conversation: FC<IConversation> = ({}) => {
  return (
    <BaseLayout>
      <BaseLayout.Header>
        <Friend>
          <Friend.Avatar />
          <Friend.Information>
            <Friend.Title>Andrew Tate</Friend.Title>
            <Friend.Description>Online</Friend.Description>
          </Friend.Information>
        </Friend>
      </BaseLayout.Header>

      <BaseLayout.Body>
        <View style={ConversationStyleSheet.messagesWrapper}>
          <Messages />
        </View>
        <View style={ConversationStyleSheet.typerWrapper}>
          <Typer />
        </View>
      </BaseLayout.Body>
    </BaseLayout>
  );
};

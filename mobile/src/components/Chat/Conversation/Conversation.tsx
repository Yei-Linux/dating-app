import React, {FC} from 'react';
import {View} from 'react-native';
import {ConversationStyleSheet} from './styles';
import {Friend} from '../../shared';
import {Messages} from '../Messages';
import {Typer} from '../Typer';
import {BaseLayout} from '../../../layouts';
import {useFetchConversation} from './useFetchConversation';

export interface IConversation {}
export const Conversation: FC<IConversation> = ({}) => {
  const {data} = useFetchConversation();

  if (!data) {
    return null;
  }

  const userName = `${data.friend.name} ${data.friend.lastName}`;
  const status = 'Online';

  return (
    <BaseLayout>
      <BaseLayout.Header>
        <Friend>
          <Friend.Avatar />
          <Friend.Information>
            <Friend.Title>{userName}</Friend.Title>
            <Friend.Description>{status}</Friend.Description>
          </Friend.Information>
        </Friend>
      </BaseLayout.Header>

      <BaseLayout.Body>
        <View style={ConversationStyleSheet.messagesWrapper}>
          <Messages messages={data.messages} />
        </View>
        <View style={ConversationStyleSheet.typerWrapper}>
          <Typer />
        </View>
      </BaseLayout.Body>
    </BaseLayout>
  );
};

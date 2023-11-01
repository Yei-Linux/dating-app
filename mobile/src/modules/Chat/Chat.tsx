import React, {FC} from 'react';
import {View} from 'react-native';
import {ChatStyleSheet} from './styles';
import {Friend} from '../shared';
import {Messages} from './Messages';
import {Typer} from './Typer';
import {BaseLayout} from '../../layouts';
import {TFindChatById} from '../../types';

export interface IChat {
  chat: TFindChatById;
}
export const Chat: FC<IChat> = ({chat}) => {
  const avatar = chat.friend.profileImg;
  const userName = `${chat.friend?.name} ${chat.friend?.lastName}`;
  const status = 'Online';

  return (
    <BaseLayout>
      <BaseLayout.Header>
        <Friend>
          <Friend.Avatar src={avatar ?? ''} />
          <Friend.Information>
            <Friend.Title>{userName}</Friend.Title>
            <Friend.Description>{status}</Friend.Description>
          </Friend.Information>
        </Friend>
      </BaseLayout.Header>

      <BaseLayout.Body>
        <View style={ChatStyleSheet.messagesWrapper}>
          <Messages messages={chat.messages} chatId={chat.id} />
        </View>
        <View style={ChatStyleSheet.typerWrapper}>
          <Typer chatId={chat.id} />
        </View>
      </BaseLayout.Body>
    </BaseLayout>
  );
};

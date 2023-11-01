import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Chat} from '../../modules/Chat';
import {TScreenProp} from '../../types';
import {useFindChatByIdQuery} from '../../rtk-query';

export type IChatScreen = TScreenProp;
export const ChatScreen = ({route}: IChatScreen) => {
  const chatId = route.params?.chatId;
  const {data: chat} = useFindChatByIdQuery({userId: '1', chatId});

  return (
    <SafeAreaView>
      <View>{chat && <Chat chat={chat} />}</View>
    </SafeAreaView>
  );
};

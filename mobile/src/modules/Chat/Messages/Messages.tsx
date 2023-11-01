import React, {FC, useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import {MessageStyleSheet} from './styles';
import {Message} from './Message';
import {TMessage} from '../../../types/chat.type';
import {
  disconnectSocket,
  initiateSocket,
  subscribeToChat,
} from '../../../config/socket';

export interface IMessages {
  messages: TMessage[];
  chatId: number;
}
export const Messages: FC<IMessages> = ({messages, chatId}) => {
  const [messagesState, setMessagesState] = useState<TMessage[]>([]);

  useEffect(() => {
    if (chatId) {
      initiateSocket(chatId);
    }
    subscribeToChat((err, data) => {
      if (err) {
        return;
      }
      setMessagesState(prev => [...prev, data]);
    }, 1);

    return () => {
      disconnectSocket();
    };
  }, [chatId]);

  useEffect(() => {
    setMessagesState(messages);
  }, [messages]);

  return (
    <ScrollView>
      <View style={[MessageStyleSheet.wrapper]}>
        {messagesState?.map((message, index) => (
          <Message {...message} key={index} />
        ))}
      </View>
    </ScrollView>
  );
};

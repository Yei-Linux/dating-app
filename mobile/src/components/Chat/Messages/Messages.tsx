import React, {FC} from 'react';
import {ScrollView, View} from 'react-native';
import {MessageStyleSheet} from './styles';
import {Message} from './Message';
import {TMessage} from '../../../types/chat.type';

export interface IMessages {
  messages: TMessage[];
}
export const Messages: FC<IMessages> = ({messages}) => {
  return (
    <ScrollView>
      <View style={[MessageStyleSheet.wrapper]}>
        {messages.map((message, index) => (
          <Message {...message} key={index} />
        ))}
      </View>
    </ScrollView>
  );
};

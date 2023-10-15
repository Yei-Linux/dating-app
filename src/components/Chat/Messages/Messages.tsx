import React, {FC} from 'react';
import {View} from 'react-native';
import {MessageStyleSheet} from './styles';
import {useChatStore} from '../hooks/useChatStore';
import {Message} from './Message';

export interface IMessages {}
export const Messages: FC<IMessages> = ({}) => {
  const {state} = useChatStore();

  return (
    <View style={[MessageStyleSheet.wrapper]}>
      {state.messages.map((message, index) => (
        <Message {...message} key={index} />
      ))}
    </View>
  );
};

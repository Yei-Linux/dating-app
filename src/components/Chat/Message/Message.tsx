import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {MessageStyleSheet} from './styles';

export interface IMessage {
  text: string;
}
export const Message: FC<IMessage> = ({text}) => {
  return (
    <View style={[MessageStyleSheet.message]}>
      <Text>{text}</Text>
    </View>
  );
};

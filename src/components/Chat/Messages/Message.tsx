import React, {FC, useMemo} from 'react';
import {Text, View} from 'react-native';
import {MessageStyleSheet} from './styles';
import {IMessage} from '../../../store/chat/slices/message.slice';
import {fromTimestampToFormatDate} from '../../../helpers';

export const Message: FC<IMessage> = ({owner, text, timestamp}) => {
  const formatDate = useMemo(
    () => fromTimestampToFormatDate(timestamp),
    [timestamp],
  );

  return (
    <View style={[owner === 'mine' ? MessageStyleSheet.containerYours : {}]}>
      <View
        style={[
          MessageStyleSheet.message,
          MessageStyleSheet[owner === 'mine' ? 'mine' : 'yours'],
        ]}>
        <Text style={[MessageStyleSheet.text]}>{text}</Text>
        <Text style={[MessageStyleSheet.date]}>{formatDate}</Text>
      </View>
    </View>
  );
};

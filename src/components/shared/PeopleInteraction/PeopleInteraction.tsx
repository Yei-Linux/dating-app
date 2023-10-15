import React, {FC, useMemo} from 'react';
import {Text, View} from 'react-native';
import {Friend} from '../Friend';
import {ChatImboxStyleSheet} from './styles';
import {fromTimestampToFormatDate} from '../../../helpers';

export interface IPeopleInteractionComponent {
  avatar: string;
  title: string;
  description: string;
  timestamp: number;
  userIcon?: React.ReactNode;
}
export const PeopleInteraction: FC<IPeopleInteractionComponent> = ({
  avatar,
  title,
  description,
  userIcon,
  timestamp,
}) => {
  const formatDate = useMemo(
    () => fromTimestampToFormatDate(timestamp),
    [timestamp],
  );

  return (
    <View style={[ChatImboxStyleSheet.chatImbox]}>
      <Friend>
        <Friend.Avatar icon={userIcon} src={avatar} />
        <Friend.Information>
          <Friend.Title style={ChatImboxStyleSheet.chatUsername}>
            {title}
          </Friend.Title>
          <Friend.Description style={ChatImboxStyleSheet.chatDescription}>
            {description}
          </Friend.Description>
        </Friend.Information>
      </Friend>

      <View>
        <Text>{formatDate}</Text>
      </View>
    </View>
  );
};

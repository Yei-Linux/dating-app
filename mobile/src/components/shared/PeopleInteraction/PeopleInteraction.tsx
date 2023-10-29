import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {Friend} from '../Friend';
import {ChatImboxStyleSheet} from './styles';
import {IFindImboxByUserItem} from '../../../types/imbox.type';
import {FriendHeaderStyleSheet} from '../Friend/styles';

export interface IPeopleInteractionComponent {
  friend: IFindImboxByUserItem['friend'];
  lastMessage: IFindImboxByUserItem['lastMessage'];
}
export const PeopleInteraction: FC<IPeopleInteractionComponent> = ({
  friend,
  lastMessage,
}) => {
  const {name, lastName, profileImg} = friend;
  const message = lastMessage?.message ?? '';
  const formatDate = lastMessage?.createdAt;
  const userName = `${name} ${lastName}`;
  const userIcon = <View style={[FriendHeaderStyleSheet.online]} />;

  return (
    <View style={[ChatImboxStyleSheet.chatImbox]}>
      <Friend>
        <Friend.Avatar icon={userIcon} src={profileImg ?? ''} />
        <Friend.Information>
          <Friend.Title style={ChatImboxStyleSheet.chatUsername}>
            {userName}
          </Friend.Title>
          <Friend.Description style={ChatImboxStyleSheet.chatDescription}>
            {message}
          </Friend.Description>
        </Friend.Information>
      </Friend>

      <View>
        <Text>{formatDate}</Text>
      </View>
    </View>
  );
};

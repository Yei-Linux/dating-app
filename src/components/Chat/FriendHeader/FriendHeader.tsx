import React from 'react';
import {FriendHeaderStyleSheet} from './styles';
import {View, Image, Text} from 'react-native';

export const FriendHeader = () => {
  return (
    <View style={FriendHeaderStyleSheet.friendChatHeader}>
      <View style={FriendHeaderStyleSheet.avatarWrapper}>
        <Image
          style={FriendHeaderStyleSheet.avatar}
          source={{
            uri: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png',
          }}
        />
      </View>

      <View style={FriendHeaderStyleSheet.userInfoWrapper}>
        <Text style={FriendHeaderStyleSheet.userName}>Andrew Tate</Text>
        <Text style={FriendHeaderStyleSheet.userStatus}>Online</Text>
      </View>
    </View>
  );
};

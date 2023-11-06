import React from 'react';
import {FriendHeaderStyleSheet} from './styles';
import {View, Text} from 'react-native';
import {Avatar} from '../Avatar';

export interface ITitle {
  children: React.ReactNode;
  style?: Record<string, any>;
}
const Title = ({children, style}: ITitle) => (
  <Text style={[FriendHeaderStyleSheet.userName, style]}>{children}</Text>
);

export const Description = ({children, style}: ITitle) => (
  <Text style={[FriendHeaderStyleSheet.userStatus, style]}>{children}</Text>
);

export const Information = ({children, style}: ITitle) => (
  <View style={[FriendHeaderStyleSheet.userInfoWrapper, style]}>
    {children}
  </View>
);

export interface IFriend {
  children: React.ReactNode;
}
export const Friend = ({children}: IFriend) => {
  return (
    <View style={FriendHeaderStyleSheet.friendChatHeader}>{children}</View>
  );
};

Friend.Avatar = Avatar;
Friend.Information = Information;
Friend.Title = Title;
Friend.Description = Description;

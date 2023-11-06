import React from 'react';
import {AvatarStyleSheet} from './styles';
import {View, Image} from 'react-native';

export interface IAvatar {
  src?: string;
  isOnline?: boolean;
  icon?: React.ReactNode;
}
export const Avatar = ({icon, src}: IAvatar) => (
  <View style={AvatarStyleSheet.avatarWrapper}>
    <Image
      style={AvatarStyleSheet.avatar}
      source={{
        uri: src,
      }}
    />
    {icon && <View style={AvatarStyleSheet.onlineWrapper}>{icon}</View>}
  </View>
);

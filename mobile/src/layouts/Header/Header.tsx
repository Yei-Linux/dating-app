import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {HeaderStylesheet} from './styles';
import {Avatar} from '../../modules/shared';

export interface IHeader {
  gotoProfile: () => void;
}
export const Header = ({gotoProfile}: IHeader) => {
  return (
    <View style={HeaderStylesheet.container}>
      <View>
        <Text style={HeaderStylesheet.logoText}>Discoverying</Text>
      </View>
      <View>
        <TouchableOpacity onPress={gotoProfile}>
          <Avatar src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

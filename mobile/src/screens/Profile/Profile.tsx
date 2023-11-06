import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Text, TouchableOpacity, View} from 'react-native';
import {TScreenProp} from '../../types';
import {Avatar} from '../../modules/shared';
import {Title} from '../../modules/ui/Title/Title';
import {ProfileStyleSheet} from './styles';
import {ProfileForm} from '../../modules/Profile/Profile';

export type IProfileScreen = TScreenProp;
export const Profile = ({}: IProfileScreen) => {
  return (
    <View style={ProfileStyleSheet.container}>
      <View style={ProfileStyleSheet.avatarContainer}>
        <Avatar src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png" />
        <Title text="Batman Winston" level="h3" />
        <Text>18 years old</Text>
      </View>

      <View style={ProfileStyleSheet.menuContainer}>
        <ProfileForm />

        <TouchableOpacity>
          <View style={ProfileStyleSheet.menuItemContainer}>
            <Icon.Button
              color="#ad56ff"
              backgroundColor="transparent"
              name="sign-out"
            />
            <Text style={ProfileStyleSheet.menuItem}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

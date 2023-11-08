import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Text, TouchableOpacity, View} from 'react-native';
import {TScreenProp} from '../../types';
import {Avatar} from '../../modules/shared';
import {Title} from '../../modules/ui/Title/Title';
import {ProfileStyleSheet} from './styles';
import {ProfileForm} from '../../modules/Profile/Profile';
import {useFindProfileByUserIdQuery} from '../../rtk-query';

export type IProfileScreen = TScreenProp;
export const Profile = ({}: IProfileScreen) => {
  const {data} = useFindProfileByUserIdQuery({userId: 1});

  if (!data) {
    return null;
  }

  const fullName = `${data.name} ${data.lastName}`;

  return (
    <View style={ProfileStyleSheet.container}>
      <View style={ProfileStyleSheet.avatarContainer}>
        <Avatar src={data.profileImg ?? ''} />
        <Title text={fullName} level="h3" />
        <Text>{data.age} years old</Text>
      </View>

      <View style={ProfileStyleSheet.menuContainer}>
        <ProfileForm values={data} />

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

import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {HeaderStylesheet} from './styles';
import {Avatar} from '../../modules/shared';
import {useAppSelector} from '../../store/global';

export interface IHeader {
  gotoProfile: () => void;
}
export const Header = ({gotoProfile}: IHeader) => {
  const auth: any = useAppSelector(state => state.auth);
  const profileImg = auth?.user?.profileImg;
  return (
    <View style={HeaderStylesheet.container}>
      <View>
        <Text style={HeaderStylesheet.logoText}>Discoverying</Text>
      </View>
      <View>
        <TouchableOpacity onPress={gotoProfile}>
          <Avatar src={profileImg} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

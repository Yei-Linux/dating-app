import React from 'react';
import {View} from 'react-native';
import {TScreenProp} from '../../types';
import {SignUpStyleSheet} from './styles';
import {SignUp} from '../../modules/Auth/SignUp';

export type ISignUpScreen = TScreenProp;
export const SignUpScreen = ({}: ISignUpScreen) => {
  return (
    <View style={SignUpStyleSheet.wrapper}>
      <SignUp />
    </View>
  );
};

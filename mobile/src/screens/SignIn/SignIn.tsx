import React from 'react';
import {View} from 'react-native';
import {TScreenProp} from '../../types';
import {SignInStyleSheet} from './styles';
import {SignIn} from '../../modules/Auth/SignIn';

export type ISignInScreen = TScreenProp;
export const SignInScreen = ({navigation}: ISignInScreen) => {
  return (
    <View style={SignInStyleSheet.wrapper}>
      <SignIn
        goToSignUp={() => navigation.navigate('SignUp')}
        goToHome={() => navigation.navigate('Home')}
      />
    </View>
  );
};

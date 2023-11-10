import React from 'react';
import {Image, Text, View} from 'react-native';
import {TScreenProp} from '../../types';
import {SignInStyleSheet} from './styles';
import {Button} from '../../modules/ui/Button/Button';
import {Input} from '../../modules/ui/Input';

export type ISignInScreen = TScreenProp;
export const SignIn = ({navigation}: ISignInScreen) => {
  return (
    <View style={SignInStyleSheet.wrapper}>
      <View style={SignInStyleSheet.container}>
        <View style={SignInStyleSheet.logoContainer}>
          <Image
            style={SignInStyleSheet.logo}
            source={{
              uri: 'https://static.vecteezy.com/system/resources/previews/023/986/672/non_2x/tinder-app-logo-tinder-app-logo-transparent-tinder-app-icon-transparent-free-free-png.png',
            }}
          />
        </View>

        <View style={SignInStyleSheet.formField}>
          <Text style={SignInStyleSheet.label}>Email:</Text>
          <Input
            value=""
            placeholder="Insert your email"
            textContentType="emailAddress"
          />
        </View>
        <View style={SignInStyleSheet.formField}>
          <Text style={SignInStyleSheet.label}>Password</Text>
          <Input
            value=""
            placeholder="Insert your password"
            textContentType="password"
          />
        </View>

        <Button text="Login" />
        <Text
          onPress={() => navigation.navigate('SignUp')}
          style={SignInStyleSheet.anchor}>
          If you dont have account, please click to signUp
        </Text>
      </View>
    </View>
  );
};

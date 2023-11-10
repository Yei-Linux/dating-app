import React from 'react';
import {Text, View} from 'react-native';
import {TScreenProp} from '../../types';
import {SignUpStyleSheet} from './styles';
import {Input} from '../../modules/ui/Input';
import {Button} from '../../modules/ui/Button/Button';

export type ISignUpScreen = TScreenProp;
export const SignUp = ({}: ISignUpScreen) => {
  return (
    <View style={SignUpStyleSheet.wrapper}>
      <View style={SignUpStyleSheet.container}>
        <View style={SignUpStyleSheet.formField}>
          <Text style={SignUpStyleSheet.label}>Name:</Text>
          <Input value="" placeholder="Insert your name" />
        </View>
        <View style={SignUpStyleSheet.formField}>
          <Text style={SignUpStyleSheet.label}>LastName</Text>
          <Input value="" placeholder="Insert your lastname" />
        </View>
        <View style={SignUpStyleSheet.formField}>
          <Text style={SignUpStyleSheet.label}>Age</Text>
          <Input value="" placeholder="Insert your age" />
        </View>
        <View style={SignUpStyleSheet.formField}>
          <Text style={SignUpStyleSheet.label}>Email:</Text>
          <Input
            value=""
            placeholder="Insert your email"
            textContentType="emailAddress"
          />
        </View>
        <View style={SignUpStyleSheet.formField}>
          <Text style={SignUpStyleSheet.label}>Password</Text>
          <Input
            value=""
            placeholder="Insert your password"
            textContentType="password"
          />
        </View>

        <Button text="Register Now" />
      </View>
    </View>
  );
};

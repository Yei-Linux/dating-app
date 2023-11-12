import React from 'react';
import {SignUpStyleSheet} from './styles';
import {Button} from '../../ui/Button/Button';
import {View, Text} from 'react-native';
import {Input} from '../../ui/Input';

export const SignUp = () => {
  return (
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
  );
};

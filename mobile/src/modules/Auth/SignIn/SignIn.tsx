import React from 'react';
import {SignInStyleSheet} from './styles';
import {View, Image, Text} from 'react-native';
import {Input} from '../../ui/Input';
import {Button} from '../../ui/Button/Button';
import {Controller, useForm} from 'react-hook-form';
import {useSignInMutation} from '../../../rtk-query';

export interface ISignIn {
  goToSignUp: () => void;
  goToHome: () => void;
}
export const SignIn = ({goToSignUp, goToHome}: ISignIn) => {
  const [mutate] = useSignInMutation({
    fixedCacheKey: 'signIn',
  });
  const {
    control,
    handleSubmit,
    formState: {isValid},
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: any) => {
    if (!isValid) {
      return;
    }

    const body = data;
    const response = await mutate(body);

    if (!response) {
      return;
    }

    goToHome();
  };

  return (
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
        <Controller
          control={control}
          name="email"
          render={({field: {onChange, value, onBlur}}) => (
            <Input
              value={`${value}`}
              onChangeText={text => onChange(text)}
              onBlur={onBlur}
              textContentType="emailAddress"
              placeholder="Insert your email"
            />
          )}
        />
      </View>
      <View style={SignInStyleSheet.formField}>
        <Text style={SignInStyleSheet.label}>Password</Text>
        <Controller
          control={control}
          name="password"
          render={({field: {onChange, value, onBlur}}) => (
            <Input
              value={`${value}`}
              onChangeText={text => onChange(text)}
              onBlur={onBlur}
              textContentType="password"
              placeholder="Insert your password"
            />
          )}
        />
      </View>

      <Button text="Login" onPress={handleSubmit(onSubmit)} />
      <Text onPress={goToSignUp} style={SignInStyleSheet.anchor}>
        If you dont have account, please click to signUp
      </Text>
    </View>
  );
};

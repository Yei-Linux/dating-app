import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {isAuthGuard} from '../../guards/isAuth.guard';
import {RoleBasedView} from '../../modules/shared/RoleBasedView/RoleBasedView';
import {ChatScreen} from '../Chat';
import {Home} from '../Home';
import {Profile} from '../Profile';
import {SignInScreen} from '../SignIn';
import {SignUpScreen} from '../SignUp/SignUp';
import {useAuthStorage} from '../../hooks';

const Stack = createNativeStackNavigator();

export const Wrapper = () => {
  const {isAuth} = useAuthStorage();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="Home" options={{headerShown: false}}>
          {() => (
            <RoleBasedView guards={[isAuthGuard(!!isAuth)]} component={Home} />
          )}
        </Stack.Screen>
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="Profile" component={Profile} />

        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

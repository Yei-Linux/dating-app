import React from 'react';
import {Provider} from 'react-redux';
import {persistor, store} from './src/store/global';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ChatScreen} from './src/screens/Chat';
import {Home} from './src/screens/Home';
import {Profile} from './src/screens/Profile';
import {SignInScreen} from './src/screens/SignIn';
import {SignUpScreen} from './src/screens/SignUp/SignUp';
import {PersistGate} from 'redux-persist/integration/react';

import {decode, encode} from 'base-64';
import {RoleBasedView} from './src/modules/shared/RoleBasedView/RoleBasedView';
import {isAuthGuard} from './src/guards/isAuth.guard';

if (!global.btoa) {
  global.btoa = encode;
}
if (!global.atob) {
  global.atob = decode;
}

const Stack = createNativeStackNavigator();

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="SignIn">
            <Stack.Screen name="Home" options={{headerShown: false}}>
              {() => <RoleBasedView guards={[isAuthGuard]} component={Home} />}
            </Stack.Screen>
            <Stack.Screen name="Chat" component={ChatScreen} />
            <Stack.Screen name="Profile" component={Profile} />

            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

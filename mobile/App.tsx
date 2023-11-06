import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/store/global';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ChatScreen} from './src/screens/Chat';
import {Home} from './src/screens/Home';
import {Profile} from './src/screens/Profile';

const Stack = createNativeStackNavigator();

export const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Chat" component={ChatScreen} />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/store/global';
import {CommmentsPartyScreen} from './src/screens/CommentsParty/CommentsParty';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DiscoverScreen} from './src/screens/Discover';
import {ImboxScreen} from './src/screens/Imbox';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const DiscoverIcon = (
  <Icon.Button color="#ad56ff" backgroundColor="transparent" name="heart" />
);
const ImboxIcon = (
  <Icon.Button color="#ad56ff" backgroundColor="transparent" name="wechat" />
);
const CommentsIcon = (
  <Icon.Button color="#ad56ff" backgroundColor="transparent" name="comment" />
);

export const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Discover"
          screenOptions={{
            header: undefined,
          }}>
          <Tab.Screen
            name="Discover"
            component={DiscoverScreen}
            options={{
              tabBarLabel: () => '',
              tabBarIcon: () => DiscoverIcon,
            }}
          />
          <Tab.Screen
            name="Imbox"
            component={ImboxScreen}
            options={{
              tabBarLabel: () => '',
              tabBarIcon: () => ImboxIcon,
            }}
          />
          <Tab.Screen
            name="CommentsParty"
            component={CommmentsPartyScreen}
            options={{
              tabBarLabel: () => '',
              tabBarIcon: () => CommentsIcon,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

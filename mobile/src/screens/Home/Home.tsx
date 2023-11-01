import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DiscoverScreen} from '../Discover';
import {ImboxScreen} from '../Imbox';
import {DiscoverIcon, ImboxIcon} from './icons';

const Tab = createBottomTabNavigator();

export const Home = () => {
  return (
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
          tabBarIcon: DiscoverIcon,
        }}
      />
      <Tab.Screen
        name="Imbox"
        component={ImboxScreen}
        options={{
          tabBarLabel: () => '',
          tabBarIcon: ImboxIcon,
        }}
      />
    </Tab.Navigator>
  );
};

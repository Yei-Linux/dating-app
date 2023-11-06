/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DiscoverScreen} from '../Discover';
import {ImboxScreen} from '../Imbox';
import {DiscoverIcon, ImboxIcon} from './icons';
import {Header} from '../../layouts/Header';

const Tab = createBottomTabNavigator();

export const Home = () => {
  return (
    <Tab.Navigator
      initialRouteName="Discover"
      screenOptions={({navigation}) => ({
        header: undefined,
        headerTitle: () => (
          <Header gotoProfile={() => navigation.navigate('Profile')} />
        ),
      })}>
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

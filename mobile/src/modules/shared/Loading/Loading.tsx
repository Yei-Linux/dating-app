import React from 'react';
import {Text, View} from 'react-native';
import {LoadingStyleSheet} from './styles';

export interface ILoading {}

export const Loading = ({}: ILoading) => {
  return (
    <View style={LoadingStyleSheet.container}>
      <View style={LoadingStyleSheet.content}>
        <Text>Loading</Text>
      </View>
    </View>
  );
};

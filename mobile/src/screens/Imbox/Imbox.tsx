import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Imbox} from '../../components/Imbox';

export const ImboxScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Imbox />
      </View>
    </SafeAreaView>
  );
};

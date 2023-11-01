import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Matchs} from '../../modules/Matchs';
import {TScreenProp} from '../../types';

export type IMatchsScreen = TScreenProp;
export const MatchsScreen = ({}: IMatchsScreen) => {
  return (
    <SafeAreaView>
      <View>
        <Matchs />
      </View>
    </SafeAreaView>
  );
};

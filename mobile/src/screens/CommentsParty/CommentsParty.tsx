import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {CommentsParty} from '../../modules/CommentsParty';
import {TScreenProp} from '../../types';

export type ICommmentsPartyScreen = TScreenProp;
export const CommmentsPartyScreen = ({}: ICommmentsPartyScreen) => {
  return (
    <SafeAreaView>
      <View>
        <CommentsParty />
      </View>
    </SafeAreaView>
  );
};

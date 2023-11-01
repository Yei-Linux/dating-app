import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Imbox} from '../../modules/Imbox';
import {TScreenProp} from '../../types';

export type IImboxScreen = TScreenProp;
export const ImboxScreen = ({navigation}: IImboxScreen) => {
  return (
    <SafeAreaView>
      <View>
        <Imbox
          onGoToChat={chatId =>
            navigation?.navigate('Chat', {
              chatId,
            })
          }
        />
      </View>
    </SafeAreaView>
  );
};

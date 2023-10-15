import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Conversation} from '../../components/Chat';

export const Chat = () => {
  return (
    <SafeAreaView>
      <View>
        <Conversation />
      </View>
    </SafeAreaView>
  );
};

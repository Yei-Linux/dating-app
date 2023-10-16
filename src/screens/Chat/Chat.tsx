import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Conversation} from '../../components/Chat';

export const ChatScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Conversation />
      </View>
    </SafeAreaView>
  );
};

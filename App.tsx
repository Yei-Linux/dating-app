import React from 'react';
import {View} from 'react-native';
import {Chat} from './src/screens/Chat/Chat';
import {Provider} from 'react-redux';
import {store} from './src/store/global';

export const App = () => {
  return (
    <Provider store={store}>
      <View>
        <Chat />
      </View>
    </Provider>
  );
};

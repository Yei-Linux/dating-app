import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/store/global';
import {MatchsScreen} from './src/screens/Matchs/Matchs';

export const App = () => {
  return (
    <Provider store={store}>
      <View>
        <MatchsScreen />
      </View>
    </Provider>
  );
};

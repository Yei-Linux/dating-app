import React from 'react';
import {View} from 'react-native';
import {MatchHeaderStyleSheet} from './styles';
import {Title} from '../../ui/Title/Title';

export const MatchHeader = () => {
  return (
    <View style={[MatchHeaderStyleSheet.wrapper]}>
      <Title text="Matchs" level="h3" style={MatchHeaderStyleSheet.title} />
    </View>
  );
};

import React from 'react';
import {View} from 'react-native';
import {CommentsHeaderStyleSheet} from './styles';
import {Title} from '../../ui/Title/Title';

export const CommmentsHeader = () => {
  return (
    <View style={[CommentsHeaderStyleSheet.wrapper]}>
      <Title
        text="Comments Party"
        level="h3"
        style={CommentsHeaderStyleSheet.title}
      />
    </View>
  );
};

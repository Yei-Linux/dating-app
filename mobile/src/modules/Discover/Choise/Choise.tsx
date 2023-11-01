import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {ChoiseStyleSheet} from './styles';

const COLORS = {
  like: '#00eda6',
  nope: '#ff006f',
};

export interface IChoise {
  type: 'like' | 'nope';
}

const Choice: FC<IChoise> = ({type}) => {
  const color = COLORS[type];

  return (
    <View
      style={[
        {
          borderColor: color,
        },
        ChoiseStyleSheet.wrapper,
      ]}>
      <Text
        style={[
          {
            color: color,
          },
          ChoiseStyleSheet.container,
        ]}>
        {type}
      </Text>
    </View>
  );
};

export default Choice;

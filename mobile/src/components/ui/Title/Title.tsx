import React, {FC} from 'react';
import {Text} from 'react-native';
import {TitleStyleSheet} from './styles';

type TLevel = 1 | 2 | 3 | 4;
export interface ITitle {
  text: string;
  level: `h${TLevel}`;
  style?: Record<string, any>;
}
export const Title: FC<ITitle> = ({text, level, style = {}}) => {
  return (
    <Text style={[TitleStyleSheet[level], TitleStyleSheet.text, style]}>
      {text}
    </Text>
  );
};

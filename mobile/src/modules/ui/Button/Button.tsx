import React, {FC} from 'react';
import {GestureResponderEvent, Text, TouchableOpacity} from 'react-native';
import {LinearGradient} from 'react-native-linear-gradient';
import {ButtonStyleSheet} from './styles';

export interface IButton {
  styles?: Record<string, any>;
  maxWidth?: number;
  text: string;
  colors?: (string | number)[];
  onPress?: (event: GestureResponderEvent) => void;
  isDisable?: boolean;
}
export const Button: FC<IButton> = ({
  styles,
  maxWidth,
  text,
  onPress,
  colors = ['#ad56ff', '#ad56ff'],
  isDisable = false,
}) => {
  const buttonWrapper = {
    maxWidth,
    ...styles,
  };

  return (
    <TouchableOpacity onPress={onPress} disabled={isDisable}>
      <LinearGradient
        colors={colors}
        style={[ButtonStyleSheet.wrapper, buttonWrapper]}>
        <Text style={[ButtonStyleSheet.content]}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

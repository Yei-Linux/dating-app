import React from 'react';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputFocusEventData,
} from 'react-native';
import {InputStyleSheet} from './styles';
import {FC} from 'react';

export interface IInput {
  value?: string;
  textContentType?: 'emailAddress' | 'password';
  placeholder?: string;
  onChangeText?: (text: string) => void;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
}
export const Input: FC<IInput> = ({
  placeholder,
  value,
  onChangeText,
  onBlur,
  textContentType,
}) => {
  return (
    <TextInput
      style={InputStyleSheet.input}
      value={`${value}`}
      onChangeText={onChangeText}
      onBlur={onBlur}
      textContentType={textContentType}
      placeholder={placeholder}
    />
  );
};

import React from 'react';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputFocusEventData,
} from 'react-native';
import {InputStyleSheet} from './styles';
import {FC} from 'react';

export interface IInput {
  editable?: boolean;
  value?: string;
  textContentType?: 'emailAddress' | 'password';
  placeholder?: string;
  onChangeText?: (text: string) => void;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
}
export const Input: FC<IInput> = ({
  editable,
  placeholder,
  value,
  onChangeText,
  onBlur,
  textContentType,
}) => {
  return (
    <TextInput
      style={InputStyleSheet.input}
      editable={editable}
      value={`${value}`}
      onChangeText={onChangeText}
      onBlur={onBlur}
      textContentType={textContentType}
      placeholder={placeholder}
    />
  );
};

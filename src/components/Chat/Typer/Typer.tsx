import React from 'react';
import {TextInput} from 'react-native';
import {TyperStyleSheet} from './styles';

import {useChatStore} from '../hooks/useChatStore';

export const Typer = () => {
  const {state, updateTyper} = useChatStore();

  return (
    <TextInput
      value={state.typer}
      placeholder="Type Down you are thinking..."
      style={TyperStyleSheet.typer}
      onChangeText={updateTyper}
    />
  );
};

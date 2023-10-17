import React from 'react';
import {TextInput, View} from 'react-native';
import {TyperStyleSheet} from './styles';

import {useChatStore} from '../hooks/useChatStore';
import Icon from 'react-native-vector-icons/Ionicons';

export const Typer = () => {
  const {state, updateTyper, clearTyper, addMessage} = useChatStore();

  const handleSendMessage = () => {
    addMessage({
      text: state.typer,
      timestamp: new Date().getTime(),
      owner: 'mine',
    });
    clearTyper();
  };

  return (
    <View style={[TyperStyleSheet.wrapper]}>
      <TextInput
        value={state.typer}
        placeholder="Type Down you are thinking..."
        style={TyperStyleSheet.typer}
        onChangeText={updateTyper}
      />
      <View style={[]}>
        <Icon.Button
          color="black"
          backgroundColor="transparent"
          name="send"
          onPress={handleSendMessage}
        />
      </View>
    </View>
  );
};

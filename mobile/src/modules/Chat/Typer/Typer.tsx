import React from 'react';
import {TextInput, View} from 'react-native';
import {TyperStyleSheet} from './styles';

import {useChatStore} from '../hooks/useChatStore';
import Icon from 'react-native-vector-icons/Ionicons';
import {sendMessageService} from '../../../services';

export interface ITyper {
  chatId: number;
}
export const Typer = ({chatId}: ITyper) => {
  const {state, updateTyper, clearTyper} = useChatStore();

  const handleSendMessage = async () => {
    clearTyper();
    await sendMessageService({
      chatId,
      message: state.typer,
      userId: 1,
    });
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

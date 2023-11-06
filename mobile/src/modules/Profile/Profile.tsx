import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View, TextInput, Text} from 'react-native';
import {ProfileStyleSheet} from './styles';
import {Button} from '../ui/Button/Button';

export const ProfileForm = () => {
  return (
    <View style={ProfileStyleSheet.container}>
      <View style={ProfileStyleSheet.formItem}>
        <Text style={ProfileStyleSheet.label}>Name:</Text>
        <View style={ProfileStyleSheet.inputContainer}>
          <TextInput style={ProfileStyleSheet.input} editable={false}>
            Batman Winston
          </TextInput>
          <View style={ProfileStyleSheet.edit}>
            <Icon.Button
              color="#ad56ff"
              backgroundColor="transparent"
              name="edit"
            />
          </View>
        </View>
      </View>

      <View style={ProfileStyleSheet.formItem}>
        <Text style={ProfileStyleSheet.label}>Email:</Text>
        <View style={ProfileStyleSheet.inputContainer}>
          <TextInput style={ProfileStyleSheet.input} editable={false}>
            batman67@gmail.com
          </TextInput>
          <View style={ProfileStyleSheet.edit}>
            <Icon.Button
              color="#ad56ff"
              backgroundColor="transparent"
              name="edit"
            />
          </View>
        </View>
      </View>

      <View style={ProfileStyleSheet.formItem}>
        <Text style={ProfileStyleSheet.label}>Username:</Text>
        <View style={ProfileStyleSheet.inputContainer}>
          <TextInput style={ProfileStyleSheet.input} editable={false}>
            bati
          </TextInput>
          <View style={ProfileStyleSheet.edit}>
            <Icon.Button
              color="#ad56ff"
              backgroundColor="transparent"
              name="edit"
            />
          </View>
        </View>
      </View>

      <View style={ProfileStyleSheet.formItem}>
        <Text style={ProfileStyleSheet.label}>Age:</Text>
        <View style={ProfileStyleSheet.inputContainer}>
          <TextInput style={ProfileStyleSheet.input} editable={false}>
            56
          </TextInput>
          <View style={ProfileStyleSheet.edit}>
            <Icon.Button
              color="#ad56ff"
              backgroundColor="transparent"
              name="edit"
            />
          </View>
        </View>
      </View>

      <Button styles={ProfileStyleSheet.submit} text="Edit" isDisable />
    </View>
  );
};

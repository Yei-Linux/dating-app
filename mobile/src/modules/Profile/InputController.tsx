import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View} from 'react-native';
import {ProfileStyleSheet} from './styles';
import {Control, Controller} from 'react-hook-form';
import {TFormFlagger} from './Profile';
import {Input} from '../ui/Input';

export interface IInputController {
  formFlagger: TFormFlagger;
  handleAddFormFlagger: (key: string, value: boolean) => void;
  control: Control<
    {
      email: string;
      name: string;
      lastName: string;
      age: number;
      profileImg: string | null;
    },
    any
  >;
  name: 'name' | 'email' | 'lastName' | 'age' | 'profileImg';
}

export const InputController = ({
  formFlagger,
  handleAddFormFlagger,
  control,
  name,
}: IInputController) => {
  return (
    <View style={ProfileStyleSheet.inputContainer}>
      <Controller
        control={control}
        name={name}
        render={({field: {onChange, value, onBlur}}) => (
          <Input
            editable={formFlagger?.[name] ?? false}
            value={`${value}`}
            onChangeText={text => onChange(text)}
            onBlur={onBlur}
          />
        )}
      />
      {!formFlagger?.[name] && (
        <View style={ProfileStyleSheet.edit}>
          <Icon.Button
            color="#ad56ff"
            backgroundColor="transparent"
            name="edit"
            onPress={() => handleAddFormFlagger(name, true)}
          />
        </View>
      )}
    </View>
  );
};

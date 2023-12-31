import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {ProfileStyleSheet} from './styles';
import {Button} from '../ui/Button/Button';
import {useForm} from 'react-hook-form';
import {InputController} from './InputController';
import {datingMatchApi, useUpdateProfileMutation} from '../../rtk-query';
import {TFindByUserIdResponse} from '../../types/profile.type';
import {useAppDispatch} from '../../store/global';

export type TFormFlagger = Record<string, boolean>;

export interface IProfileForm {
  values: TFindByUserIdResponse;
}
export const ProfileForm = ({values: {id, ...defaultValues}}: IProfileForm) => {
  const [mutate] = useUpdateProfileMutation({
    fixedCacheKey: 'updateProfile',
  });
  const dispatch = useAppDispatch();

  const [formFlagger, setFormFlagger] = useState<TFormFlagger>({});
  const {
    control,
    handleSubmit,
    formState: {isValid},
  } = useForm({mode: 'onBlur', defaultValues});

  const onSubmit = async (data: any) => {
    if (!isValid) {
      return;
    }
    const body = {
      ...data,
      age: Number(data.age),
    };

    try {
      const response: any = await mutate({
        body,
        params: {userId: id},
      });
      if (!response.data) {
        return;
      }

      dispatch(
        datingMatchApi.util.updateQueryData(
          'findProfileByUserId',
          {userId: id},
          draft => {
            Object.assign(draft, response.data);
          },
        ),
      );
      setFormFlagger({});
    } catch (error) {}
  };

  const handleAddFormFlagger = (key: string, value: boolean) =>
    setFormFlagger(prev => ({...prev, [key]: value}));

  return (
    <View style={ProfileStyleSheet.container}>
      <View style={ProfileStyleSheet.formItem}>
        <Text style={ProfileStyleSheet.label}>Name:</Text>
        <InputController
          control={control}
          formFlagger={formFlagger}
          handleAddFormFlagger={handleAddFormFlagger}
          name="name"
        />
      </View>

      <View style={ProfileStyleSheet.formItem}>
        <Text style={ProfileStyleSheet.label}>Last Name:</Text>
        <InputController
          control={control}
          formFlagger={formFlagger}
          handleAddFormFlagger={handleAddFormFlagger}
          name="lastName"
        />
      </View>

      <View style={ProfileStyleSheet.formItem}>
        <Text style={ProfileStyleSheet.label}>Email:</Text>
        <InputController
          control={control}
          formFlagger={formFlagger}
          handleAddFormFlagger={handleAddFormFlagger}
          name="email"
        />
      </View>

      <View style={ProfileStyleSheet.formItem}>
        <Text style={ProfileStyleSheet.label}>Age:</Text>
        <InputController
          control={control}
          formFlagger={formFlagger}
          handleAddFormFlagger={handleAddFormFlagger}
          name="age"
        />
      </View>

      <Button
        styles={ProfileStyleSheet.submit}
        text="Edit"
        isDisable={!isValid}
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
};

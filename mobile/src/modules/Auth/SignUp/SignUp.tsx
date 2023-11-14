import React, {useMemo, useState} from 'react';
import {SignUpStyleSheet} from './styles';
import {Button} from '../../ui/Button/Button';
import {View, Text, Image, ScrollView} from 'react-native';
import {Input} from '../../ui/Input';
import {Controller, useForm} from 'react-hook-form';
import {
  useFindAllCountriesQuery,
  useFindAllGendersQuery,
  useSignUpMutation,
} from '../../../rtk-query';
import DocumentPicker, {
  DocumentPickerResponse,
  types,
} from 'react-native-document-picker';
import {Dropdown} from '../../ui/Dropdown';
import {useNavigation} from '@react-navigation/native';
export const SignUp = () => {
  const {navigate} = useNavigation();
  const {data: countriesData} = useFindAllCountriesQuery({});
  const {data: gendersData} = useFindAllGendersQuery({});
  const countriesDropdown = useMemo(() => {
    return countriesData?.map(({name, id}) => ({
      label: name,
      value: id.toString(),
    }));
  }, [countriesData]);
  const gendersDropdown = useMemo(() => {
    return gendersData?.map(({name, id}) => ({
      label: name,
      value: id.toString(),
    }));
  }, [gendersData]);

  const [country, setCountry] = useState(null);
  const [gender, setGender] = useState(null);
  const [genderToMatch, setGenderToMatch] = useState(null);

  const [result, setResult] = React.useState<
    Array<DocumentPickerResponse> | undefined | null
  >();

  const [mutate] = useSignUpMutation({
    fixedCacheKey: 'signUp',
  });
  const defaultValues = {
    name: '',
    lastName: '',
    age: '',
    email: '',
    password: '',
  };
  const {
    control,
    handleSubmit,
    formState: {isValid},
  } = useForm({
    mode: 'onBlur',
    defaultValues,
  });

  const onSubmit = async (data: any) => {
    if (!isValid) {
      return;
    }

    try {
      const request = new FormData();
      request.append('name', data?.name);
      request.append('lastName', data?.lastName);
      request.append('age', data?.age);
      request.append('email', data?.email);
      request.append('password', data?.password);
      request.append('file', result?.[0]);
      request.append('countryId', country);
      request.append('genderId', gender);
      request.append('genderToMatchId', genderToMatch);

      await mutate(request);
      (navigate as any)('SignIn');
    } catch (error) {
      console.log('test', error);
    }
  };

  return (
    <ScrollView style={SignUpStyleSheet.container}>
      <View style={SignUpStyleSheet.formField}>
        {result?.[0] && (
          <View style={SignUpStyleSheet.profileImg}>
            <Image
              style={SignUpStyleSheet.logo}
              source={{
                uri: result?.[0]?.uri,
              }}
            />
          </View>
        )}
        <Button
          text="Image Profile"
          colors={['#ad56ff', '#ad56ff']}
          onPress={async () => {
            try {
              const pickerResult = await DocumentPicker.pickSingle({
                type: types.images,
              });
              setResult([pickerResult]);
            } catch (e) {}
          }}
        />
      </View>

      <View style={SignUpStyleSheet.formField}>
        <Text style={SignUpStyleSheet.label}>Name:</Text>
        <Controller
          control={control}
          name="name"
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              value={value}
              placeholder="Insert your name"
              onChangeText={onChange}
              onBlur={onBlur}
            />
          )}
        />
      </View>
      <View style={SignUpStyleSheet.formField}>
        <Text style={SignUpStyleSheet.label}>LastName</Text>
        <Controller
          control={control}
          name="lastName"
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              value={value}
              placeholder="Insert your lastname"
              onChangeText={onChange}
              onBlur={onBlur}
            />
          )}
        />
      </View>
      <View style={SignUpStyleSheet.formField}>
        <Text style={SignUpStyleSheet.label}>Age</Text>
        <Controller
          control={control}
          name="age"
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              value={value}
              placeholder="Insert your age"
              onChangeText={onChange}
              onBlur={onBlur}
            />
          )}
        />
      </View>
      <View style={SignUpStyleSheet.formField}>
        <Text style={SignUpStyleSheet.label}>Email:</Text>
        <Controller
          control={control}
          name="email"
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              value={value}
              placeholder="Insert your email"
              onChangeText={onChange}
              onBlur={onBlur}
            />
          )}
        />
      </View>
      <View style={SignUpStyleSheet.formField}>
        <Text style={SignUpStyleSheet.label}>Password</Text>
        <Controller
          control={control}
          name="password"
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              value={value}
              placeholder="Insert your password"
              textContentType="password"
              onChangeText={onChange}
              onBlur={onBlur}
            />
          )}
        />
      </View>

      {countriesDropdown && (
        <View style={SignUpStyleSheet.formField}>
          <Text style={SignUpStyleSheet.label}>Country</Text>
          <Dropdown
            value={country}
            setValue={setCountry}
            data={countriesDropdown}
          />
        </View>
      )}

      {gendersDropdown && (
        <View style={SignUpStyleSheet.formField}>
          <Text style={SignUpStyleSheet.label}>Gender</Text>
          <Dropdown
            value={gender}
            setValue={setGender}
            data={gendersDropdown}
          />
        </View>
      )}

      {gendersDropdown && (
        <View style={SignUpStyleSheet.formField}>
          <Text style={SignUpStyleSheet.label}>Gender To Match</Text>
          <Dropdown
            value={genderToMatch}
            setValue={setGenderToMatch}
            data={gendersDropdown}
          />
        </View>
      )}
      <Button text="Register Now" onPress={handleSubmit(onSubmit)} />
    </ScrollView>
  );
};

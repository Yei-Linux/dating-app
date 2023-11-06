import {StyleSheet} from 'react-native';

export const ProfileStyleSheet = StyleSheet.create({
  container: {
    gap: 5,
  },
  formItem: {
    gap: 5,
  },
  label: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  inputContainer: {flexDirection: 'row'},
  input: {
    padding: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    color: 'gray',
    width: '100%',
  },
  submit: {
    marginTop: 15,
    marginBottom: 40,
  },
  edit: {},
});

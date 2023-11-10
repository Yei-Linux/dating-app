import {StyleSheet} from 'react-native';

export const SignUpStyleSheet = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  container: {
    minWidth: 300,
    gap: 20,
    paddingVertical: 20,
  },
  formField: {
    gap: 10,
  },
  label: {
    fontWeight: 'bold',
  },
});

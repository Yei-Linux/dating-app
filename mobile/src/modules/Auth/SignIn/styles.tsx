import {StyleSheet} from 'react-native';

export const SignInStyleSheet = StyleSheet.create({
  container: {
    minWidth: 300,
    gap: 20,
  },
  formField: {
    gap: 10,
  },
  label: {
    fontWeight: 'bold',
  },
  logoContainer: {
    width: 300,
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    display: 'flex',
  },
  anchor: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

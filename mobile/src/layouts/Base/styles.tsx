import {StyleSheet} from 'react-native';

export const BaseStyleSheet = StyleSheet.create({
  wrapper: {
    backgroundColor: '#ad56ff',
    height: '100%',
  },
  header: {
    height: '10%',
  },
  body: {
    backgroundColor: '#ededfd',
    height: '90%',
    justifyContent: 'space-between',
    padding: 15,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
});

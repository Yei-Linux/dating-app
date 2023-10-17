import {StyleSheet} from 'react-native';

export const MessageStyleSheet = StyleSheet.create({
  wrapper: {
    gap: 15,
  },
  containerYours: {
    alignItems: 'flex-end',
  },
  message: {
    padding: 15,
    borderRadius: 10,
    maxWidth: '80%',
    width: 'auto',
    position: 'relative',
  },
  text: {
    margin: 3,
  },
  date: {
    fontSize: 10,
    position: 'absolute',
    bottom: 2,
    right: 5,
  },
  mine: {
    backgroundColor: '#F6FDC3',
  },
  yours: {
    backgroundColor: 'white',
  },
});

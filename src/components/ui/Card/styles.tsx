import {StyleSheet} from 'react-native';

export const CardStyles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'white',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
  },
  cover: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
  },
  coverContainer: {
    padding: 28,
  },
  info: {},
  title: {
    color: 'white',
    fontSize: 25,
    fontWeight: '700',
  },
  description: {
    color: 'white',
    fontSize: 18,
    fontWeight: '400',
  },
});

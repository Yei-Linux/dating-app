import {StyleSheet} from 'react-native';

export const UserActionsStyleSheet = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconWrapper: {
    width: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 40,
    overflow: 'hidden',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 2,
    padding: 5,
  },
  closeIcon: {
    width: 45,
  },
  closeIconContent: {
    width: 30,
    fontSize: 30,
    color: 'red',
  },
  heartIcon: {
    width: 55,
  },
  heartIconContent: {
    width: 40,
    fontSize: 40,
    color: 'white',
  },
  chatIcon: {
    width: 45,
  },
  chatIconContent: {
    width: 30,
    fontSize: 30,
    color: 'blue',
  },
  closeWrapper: {
    backgroundColor: 'white',
  },
  chatWrapper: {
    backgroundColor: 'white',
  },
  heartWrapper: {
    backgroundColor: '#BEADFA',
    padding: 10,
  },
});

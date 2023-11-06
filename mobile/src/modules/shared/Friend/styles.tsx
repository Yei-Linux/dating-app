import {StyleSheet} from 'react-native';

export const FriendHeaderStyleSheet = StyleSheet.create({
  friendChatHeader: {
    padding: 15,
    flexDirection: 'row',
    gap: 15,
  },

  online: {
    width: 15,
    height: 15,
    backgroundColor: 'green',
    borderRadius: 30,
  },

  userInfoWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  userName: {
    fontWeight: '700',
    fontSize: 20,
    color: 'white',
  },
  userStatus: {
    fontWeight: '400',
    fontSize: 15,
    color: 'white',
  },
});

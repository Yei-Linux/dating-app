import {StyleSheet} from 'react-native';

export const CommentStyleSheet = StyleSheet.create({
  wrapper: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 15,
  },
  container: {
    flexDirection: 'row',
    gap: 15,
  },
  details: {
    gap: 15,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  comment: {
    fontSize: 15,
  },

  metaInfo: {
    marginTop: 10,
    flexDirection: 'row-reverse',
    gap: 15,
  },
  metaItem: {
    flexDirection: 'row',
  },
  metaText: {
    fontWeight: 'bold',
  },
  likeIconWrapper: {
    width: 28,
    height: 28,
  },
  likeIcon: {
    width: 28,
    height: 28,
  },
});

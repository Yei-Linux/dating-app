import React from 'react';
import {Text, View} from 'react-native';
import {CommentStyleSheet} from './styles';
import {Avatar} from '../../shared';
import Icon from 'react-native-vector-icons/FontAwesome';

export interface IComment {
  username: string;
  comment: string;
  timestamp: number;
  replies: number;
  likes: number;
}
export const Comment = ({username, comment, replies, likes}: IComment) => {
  return (
    <View style={[CommentStyleSheet.wrapper]}>
      <View style={[CommentStyleSheet.container]}>
        <Avatar src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png" />
        <View style={[CommentStyleSheet.details]}>
          <Text style={[CommentStyleSheet.username]}>{username}</Text>
          <Text style={[CommentStyleSheet.comment]}>{comment}</Text>
        </View>
      </View>
      <View style={[CommentStyleSheet.metaInfo]}>
        <View style={[CommentStyleSheet.metaItem]}>
          <Text style={[CommentStyleSheet.metaText]}>{replies} Replies</Text>
        </View>
        <View style={[CommentStyleSheet.metaItem]}>
          <Text style={[CommentStyleSheet.metaText]}>{likes}</Text>
          <Icon.Button
            color="#ad56ff"
            backgroundColor="transparent"
            name="heart"
            style={CommentStyleSheet.likeIconWrapper}
            iconStyle={CommentStyleSheet.likeIcon}
          />
        </View>
      </View>
    </View>
  );
};

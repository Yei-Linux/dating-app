import React from 'react';
import {atom, useAtom} from 'jotai';
import {View} from 'react-native';
import {IComment, Comment} from '../Comment/Comment';
import {commentDefaultState} from '../mock';
import {CommentsStyleSheet} from './styles';

const commentsAtom = atom<Array<IComment>>(commentDefaultState);

export const Comments = () => {
  const [comments] = useAtom(commentsAtom);
  return (
    <View style={[CommentsStyleSheet.wrapper]}>
      {comments.map((comment, index) => (
        <Comment {...comment} key={index} />
      ))}
    </View>
  );
};

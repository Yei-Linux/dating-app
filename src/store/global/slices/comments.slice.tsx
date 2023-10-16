import {createSlice} from '@reduxjs/toolkit';
import {commentDefaultState} from '../states/comments.state';

const commentsSlice = createSlice({
  name: 'comments',
  initialState: commentDefaultState,
  reducers: {},
});

export default commentsSlice.reducer;

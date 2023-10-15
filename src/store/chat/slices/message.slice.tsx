import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {messagesDefaultState} from '../states/messages.state';

export interface IMessage {
  text: string;
  timestamp: number;
  owner: 'mine' | 'yours';
}

const messagesSlice = createSlice({
  name: 'messages',
  initialState: messagesDefaultState,
  reducers: {
    addMessage: (state, action: PayloadAction<IMessage>) => {
      if (!action.payload) {
        return state;
      }

      return [...state, action.payload];
    },
  },
});

export const {addMessage} = messagesSlice.actions;
export default messagesSlice.reducer;

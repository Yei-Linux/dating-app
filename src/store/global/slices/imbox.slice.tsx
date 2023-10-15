import {PayloadAction, createSlice} from '@reduxjs/toolkit';

const imboxSlice = createSlice({
  name: 'imbox',
  initialState: [],
  reducers: {
    setChats: (state: Array<any>, action: PayloadAction<Array<any>>) => {
      state = action.payload;
    },
  },
});

export const {setChats} = imboxSlice.actions;
export default imboxSlice.reducer;

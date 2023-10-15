/* eslint-disable @typescript-eslint/no-unused-vars */
import {PayloadAction, createSlice} from '@reduxjs/toolkit';

const typerSlice = createSlice({
  name: 'typer',
  initialState: '',
  reducers: {
    setTyper: (state: string, action: PayloadAction<string>) => action.payload,
    clearTyper: (state: string) => '',
  },
});

export const {setTyper, clearTyper} = typerSlice.actions;
export default typerSlice.reducer;

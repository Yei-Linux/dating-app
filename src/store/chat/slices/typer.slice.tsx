import {PayloadAction, createSlice} from '@reduxjs/toolkit';

const typerSlice = createSlice({
  name: 'typer',
  initialState: '',
  reducers: {
    setTyper: (state: string, action: PayloadAction<string>) => action.payload,
  },
});

export const {setTyper} = typerSlice.actions;
export default typerSlice.reducer;

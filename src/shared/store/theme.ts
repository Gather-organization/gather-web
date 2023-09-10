import { createSlice } from '@reduxjs/toolkit';
import { ThemeOptions } from 'shared/Types';

type State = {
  mode: ThemeOptions;
};

const initialState: State = {
  mode: localStorage.getItem('theme') as ThemeOptions,
};

const themeSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    updateTheme(state, action) {
      state.mode = action.payload;
    },
  },
});

export const { updateTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;

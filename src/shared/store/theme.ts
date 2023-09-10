import { createSlice } from '@reduxjs/toolkit';
import { ThemeModes, ThemeOptions } from 'shared/Types';

type State = {
  mode: ThemeModes;
  option: ThemeOptions;
};

const initialState: State = {
  mode: (localStorage.getItem('theme_mode') as ThemeModes) ?? 'Auto',
  option: localStorage.getItem('theme_option') as ThemeOptions,
};

const themeSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    updateTheme(state, action) {
      state.option = action.payload;
    },
    updateMode(state, action) {
      state.mode = action.payload;
    },
  },
});

export const { updateTheme, updateMode } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;

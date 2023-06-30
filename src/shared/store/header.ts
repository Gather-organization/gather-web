import { createSlice } from '@reduxjs/toolkit';

type HeaderState = {
  showHeader: boolean;
};

const initialState: HeaderState = {
  showHeader: true,
};

const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    showHeader(state, action) {
      state.showHeader = action.payload;
    },
  },
});

export const headerActions = headerSlice.actions;

export const headerReducer = headerSlice.reducer;

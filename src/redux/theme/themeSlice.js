import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentTheme: 'light',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: state => {
      state.currentTheme = state.currentTheme === 'light' ? 'dark' : 'light';
    },
    setLightTheme: state => {
      state.currentTheme = 'light';
    },
  },
});

export const { toggleTheme, setLightTheme } = themeSlice.actions;
export const selectTheme = state => state.theme.currentTheme;
export const themeReducer = themeSlice.reducer;

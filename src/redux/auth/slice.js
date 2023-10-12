import { createSlice } from '@reduxjs/toolkit';

import {
  register,
  logIn,
} from './operations';

const initialState = {
  user: {
    _id: null,
    userName: null,
    email: null,
    avatarURL: null,
    phone: null,
    skype: null,
    birthDay: null,
    verify: null,
  },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
  },
});

export const authReducer = authSlice.reducer;

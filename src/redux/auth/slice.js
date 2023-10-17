import { createSlice } from '@reduxjs/toolkit';

import {
  register, logIn, logOut,
  getCurrentUser, updateUser, getVerifyEmailUser,
} from './operations';

const initialState = {
  user: null,
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
      .addCase(register.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      //================================================================
      .addCase(logIn.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      //================================================================
      .addCase(logOut.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = null;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      //================================================================
      .addCase(getCurrentUser.pending, state => {
        state.isLoading = true;
        state.isFetchingCurrentUser = true;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = false;
        state.isFetchingCurrentUser = false;
      })
      .addCase(getCurrentUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoggedIn = false;
        state.isFetchingCurrentUser = false;
      })
      //================================================================
      .addCase(updateUser.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoading = false;
        state.isFetchingCurrentUser = false;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoggedIn = false;
        state.isFetchingCurrentUser = false;
      })
      //================================================================
      .addCase(getVerifyEmailUser.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getVerifyEmailUser.fulfilled, state => {
        state.user.verify = true;
        state.user.verificationToken = "Verify"
        state.isLoggedIn = false;
      })
      .addCase(getVerifyEmailUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoggedIn = false;
      });

  },
});

export const authReducer = authSlice.reducer;


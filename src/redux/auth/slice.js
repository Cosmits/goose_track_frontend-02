import { createSlice } from '@reduxjs/toolkit';

import {
  register, logIn, logOut,
  getCurrentUser, updateUser, getVerifyEmailUser, updatePassword, deleteUser,
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
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = false; // need to submit the VerifyToken in email
      })
      .addCase(register.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoggedIn = false;
      })
      //================================================================
      .addCase(logIn.pending, state => {
        state.error = null;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoggedIn = false;
      })
      //================================================================
      .addCase(logOut.pending, state => {
        state.error = null;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = null;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoggedIn = false;
      })
      //================================================================
      .addCase(getCurrentUser.pending, state => {
        state.isFetchingCurrentUser = true;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.isFetchingCurrentUser = false;
      })
      .addCase(getCurrentUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoggedIn = false;
        state.isFetchingCurrentUser = false;
      })
      //================================================================
      .addCase(updateUser.pending, state => {
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.isFetchingCurrentUser = false;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoggedIn = false;
        state.isFetchingCurrentUser = false;
      })
      //================================================================
      .addCase(getVerifyEmailUser.pending, state => {
        state.error = null;
      })
      .addCase(getVerifyEmailUser.fulfilled, state => {
        state.user = null;
        state.token = null;
      })
      .addCase(getVerifyEmailUser.rejected, (state, action) => {
        state.error = action.payload;
     
      })
      //================================================================
      .addCase(updatePassword.pending, (state) => {
        state.isFetchingCurrentUser = true;
        state.error = null;
      })
      .addCase(updatePassword.fulfilled, (state) => {
        state.isFetchingCurrentUser = false;
        state.error = null;
        state.isLoggedIn = true;
      })
      .addCase(updatePassword.rejected, (state, action) => {
        state.isFetchingCurrentUser = false;
        state.error = action.error.message;
        state.isLoggedIn = false;
      })
      //================================================================
      .addCase(deleteUser.pending, (state) => {
        state.isFetchingCurrentUser = true;
        state.error = null;
      })
      .addCase(deleteUser.fulfilled, (state) => {
        state.isFetchingCurrentUser = false;
        state.isLoggedIn = false;
        state.user = null;
        state.token = null;
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.isFetchingCurrentUser = false;
        state.error = action.payload;
      })
      ;

  },
});

export const authReducer = authSlice.reducer;


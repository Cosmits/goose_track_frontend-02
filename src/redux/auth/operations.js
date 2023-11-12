import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { showSuccessToast, showErrorToast } from '../../services/showToast';

axios.defaults.baseURL = 'https://goose-track-backend-02.onrender.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

//================================================================
export const register = createAsyncThunk('/users/register',
  async (credentials, thunkAPI) => {
    const theme = thunkAPI.getState()?.theme?.currentTheme;
    try {
      const response = await axios.post('/users/register', credentials);
      showSuccessToast('Registration successfully. Check your email and verify your registration', theme);
      return response.data;
    } catch (error) {
      if (error.response) {
        const { status } = error.response;
        if (status === 400) showErrorToast('User register error.', theme);
        if (status === 409) showErrorToast('User already exists.', theme);
        if (status === 500) showErrorToast('Server error.', theme);
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//================================================================
export const logIn = createAsyncThunk('/users/login',
  async (formData, thunkAPI) => {
    const theme = thunkAPI.getState()?.theme?.currentTheme;
    try {
      const response = await axios.post('/users/login', formData);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      if (error.response) {
        const { status } = error.response;
        if (status === 400) showErrorToast('User login error.', theme);
        if (status === 401) showErrorToast('Email or password is wrong.', theme);
        if (status === 500) showErrorToast('Server error.', theme);
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//================================================================
export const logOut = createAsyncThunk('/users/logout', async (_, thunkAPI) => {
  const theme = thunkAPI.getState()?.theme?.currentTheme;
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
  } catch (error) {
    if (error.response) {
      const { status } = error.response;
      if (status === 401) showErrorToast('Not authorized.', theme);
      if (status === 500) showErrorToast('Server error.', theme);
    }
    return thunkAPI.rejectWithValue(error.message);
  }
});

//================================================================
export const getCurrentUser = createAsyncThunk('/users/current',
  async (_, thunkAPI) => {
    const theme = thunkAPI.getState()?.theme?.currentTheme;
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      setAuthHeader(persistedToken);
      const response = await axios.get('/users/current');
      return response.data;
    } catch (error) {
      if (error.response) {
        const { status } = error.response;
        // if (status === 401) showErrorToast('Not authorized.');
        if (status === 500) showErrorToast('Server error.', theme);
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//================================================================
export const updateUser = createAsyncThunk(
  '/users/edit',
  async (credentials, thunkAPI) => {
    const theme = thunkAPI.getState()?.theme?.currentTheme;
    try {
      const response = await axios.patch('/users/edit', credentials);
      showSuccessToast('All data saved successfully', theme)
      return response.data;
    } catch (error) {
      showErrorToast(error.response.data.message, theme);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//================================================================
export const updatePassword = createAsyncThunk(
  '/users/edit/password',
  async (formData, thunkAPI) => {
    const theme = thunkAPI.getState()?.theme?.currentTheme;
    try {
      const response = await axios.patch('/users/edit/password', formData);
      return response.data;
    } catch (error) {
      showErrorToast(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data.message, theme);
    }
  },
);

//================================================================
export const sendVerifyEmailUser = createAsyncThunk(
  '/users/verify',
  async (credentials, thunkAPI) => {
    const theme = thunkAPI.getState()?.theme?.currentTheme;
    try {
      await axios.post('/users/verify', credentials);
      showSuccessToast('Letter for email verification has been sent to your mail', theme);
      return;
    } catch (error) {
      showErrorToast(error.response.data.message, theme);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//================================================================
export const getVerifyEmailUser = createAsyncThunk(
  '/users/verify',
  async (verifyToken, thunkAPI) => {
    const theme = thunkAPI.getState()?.theme?.currentTheme;
    try {
      const response = await axios.get(`/users/verify/${verifyToken}`);
      showSuccessToast('Verification Account successfully', theme);
      return response.data;
    } catch (error) {
      showErrorToast(error.response.data.message, theme);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//================================================================
export const deleteUser = createAsyncThunk(
  '/users/delete',
  async (secretKey, thunkAPI) => {
    const theme = thunkAPI.getState()?.theme?.currentTheme;
    try {
      const response = await axios.delete('/users/delete', {
        data: secretKey,
      });

      return response.data;
    } catch (error) {
      showErrorToast(error.response.data.message, theme);
      return thunkAPI.rejectWithValue(error.response);
    }
  },
);
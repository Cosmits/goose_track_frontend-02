import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

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
    try {
      const response = await axios.post('/users/register', credentials);
      // setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      if (error.response) {
        const { status } = error.response;
        if (status === 400) toast.error('User register error.');
        if (status === 409) toast.error('User already exists.');
        if (status === 500) toast.error('Server error.');
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//================================================================
export const logIn = createAsyncThunk('/users/login',
  async (formData, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', formData);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      if (error.response) {
        const { status } = error.response;
        if (status === 400) toast.error('User login error.');
        if (status === 401) toast.error('Email or password is wrong.');
        if (status === 500) toast.error('Server error.');
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//================================================================
export const logOut = createAsyncThunk('/users/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
  } catch (error) {
    if (error.response) {
      const { status } = error.response;
      if (status === 401) toast.error('Not authorized.');
      if (status === 500) toast.error('Server error.');
    }
    return thunkAPI.rejectWithValue(error.message);
  }
});

//================================================================
export const getCurrentUser = createAsyncThunk('/users/current',
  async (_, thunkAPI) => {
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
        if (status === 401) toast.error('Not authorized.');
        if (status === 500) toast.error('Server error.');
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//================================================================
export const updateUser = createAsyncThunk(
  '/users/edit',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.patch('/users/edit', credentials);
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//================================================================
export const updatePassword = createAsyncThunk(
  '/users/edit/password',
  async (formData, thunkApi) => {

    try {
      const response = await axios.patch('/users/edit/password', formData);
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  },
);

//================================================================
export const sendVerifyEmailUser = createAsyncThunk(
  '/users/verify',
  async (credentials, thunkAPI) => {
    try {
      await axios.post('/users/verify', credentials);
      toast.success('Letter for email verification has been sent to your mail');
      return;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//================================================================
export const getVerifyEmailUser = createAsyncThunk(
  '/users/verify',
  async (verifyToken, thunkAPI) => {
    try {
      const response = await axios.get(`/users/verify/${verifyToken}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//================================================================
export const deleteUser = createAsyncThunk(
  '/users/delete',
  async (secretKey, thunkApi) => {
    try {
      const response = await axios.delete('/users/delete', {
        data: secretKey,
      });

      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkApi.rejectWithValue(error.response);
    }
  },
);
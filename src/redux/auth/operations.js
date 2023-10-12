import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://goose-track-backend-02.onrender.com/users';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = '';
// };

export const register = createAsyncThunk(
  '/register',
  async (formData, thunkAPI) => {
    try {
      const response = await axios.post('/register', formData);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      if (error.response) {
        const { status } = error.response;
        if (status === 400) {
          console.log('User register error.');
        }
        if (status === 409) {
          console.log('User already exists.');
        }
        if (status === 500) {
          console.log('Server error.');
        }
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  '/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/login', credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      if (error.response) {
        const { status } = error.response;
        if (status === 400) {
          console.log('User login error.');
        }
        if (status === 401) {
          console.log('Email or password is wrong.');
        }
        if (status === 500) {
          console.log('Server error.');
        }
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


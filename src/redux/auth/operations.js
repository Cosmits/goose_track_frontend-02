import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://goose-track-backend-02.onrender.com/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = '';
// };

export const register = createAsyncThunk(
  'users/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('users/register', credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      if (error.response) {
        const { status } = error.response;
        if (status === 400) {
          toast.error('User register error.');
        }
        if (status === 409) {
          toast.error('User already exists.');
        }
        if (status === 500) {
          toast.error('Server error.');
        }
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'users/login',
  async (formData, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', formData);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      if (error.response) {
        const { status } = error.response;
        if (status === 400) {
          toast.error('User login error.');
        }
        if (status === 401) {
          toast.error('Email or password is wrong.');
        }
        if (status === 500) {
          toast.error('Server error.');
        }
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);



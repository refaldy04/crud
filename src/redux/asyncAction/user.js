import { createAsyncThunk } from '@reduxjs/toolkit';
import qs from 'qs';
import http from '../../helpers/http';

export const login = createAsyncThunk('auth/login', async (request) => {
  const result = {};
  try {
    const send = qs.stringify(request);
    const { data } = await http().post('/login', send);
    result.token = data.data.token;
    result.email = data.data.email;
    result.name = data.data.name;
    result.id = data.data.name;
    return result;
  } catch (e) {
    result.errorMsg = e.response.data.message || 'user not found';
    return result;
  }
});

export const logout = createAsyncThunk('auth/logout', async (request) => {
  const result = {};
  try {
    await http(request).post('/logout');
  } catch (e) {
    result.errorMsg = e.response.data.message;
    return result;
  }
});

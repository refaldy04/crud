import { createAsyncThunk } from '@reduxjs/toolkit';
import qs from 'qs';
import http from '../../helpers/http';

export const login = createAsyncThunk('auth/login', async (request) => {
  const result = {};
  try {
    const send = qs.stringify(request.data);
    const { data } = await http().post('/login', send);
    console.log('ini data dari backend waktu login', data.data);

    result.token = data.data.token;
    result.email = data.data.email;
    result.name = data.data.name;
    result.id = data.data.name;
    request.cb();
    return result;
  } catch (e) {
    result.errorMsg = e.response.data.message;
    return result;
  }
});

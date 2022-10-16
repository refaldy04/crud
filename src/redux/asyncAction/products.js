import { createAsyncThunk } from '@reduxjs/toolkit';
import qs from 'qs';
import http from '../../helpers/http';

export const getProducts = createAsyncThunk('product/getData', async (request) => {
  const result = {};
  try {
    const send = qs.stringify(request);
    console.log(send);
    const { data } = await http(request).get('/product');
    console.log('ini data dari backend waktu login', data);
    result.data = data.data;
    return result;
  } catch (e) {
    result.errorMsg = e.response.data.message;
    return result;
  }
});

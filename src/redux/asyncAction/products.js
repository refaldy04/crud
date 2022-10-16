import { createAsyncThunk } from '@reduxjs/toolkit';
import qs from 'qs';
import http from '../../helpers/http';

export const getProducts = createAsyncThunk('product/getData', async (request) => {
  const result = {};
  try {
    const { data } = await http(request).get('/product');
    result.data = data.data;
    return result;
  } catch (e) {
    result.errorMsg = e.response.data.message;
    return result;
  }
});

export const getProduct = createAsyncThunk('product/getDataById', async (request) => {
  const result = {};
  try {
    const { data } = await http(request.token).get('/product/show?product_id=' + request.id);
    request.cb();
    result.data = data.data;
    return result;
  } catch (e) {
    result.errorMsg = e.response.data.message;
    return result;
  }
});

export const createProduct = createAsyncThunk('product/createProduct', async (request) => {
  const result = {};
  try {
    const send = qs.stringify(request.data);
    const { data } = await http(request.token).post('/product/store', send);
    request.cb();
    result.data = data.data;
    return result;
  } catch (e) {
    result.errorMsg = e.response.data.message;
    return result;
  }
});

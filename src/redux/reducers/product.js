import { createSlice } from '@reduxjs/toolkit';
import { getProducts, getProduct, editProduct } from '../asyncAction/products';

const initialState = {
  data: null,
  dataProduct: null,
  errorMsg: null,
};

const products = createSlice({
  name: 'first',
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(getProducts.fulfilled, (state, action) => {
      state.data = action.payload.data;
    });

    build.addCase(getProduct.fulfilled, (state, action) => {
      state.dataProduct = action.payload.data;
    });

    build.addCase(editProduct.pending, (state, action) => {
      state.errorMsg = null;
    });

    build.addCase(editProduct.fulfilled, (state, action) => {
      state.errorMsg = action.payload.errorMsg;
    });
  },
});

// export const {} = products.actions;

export default products.reducer;

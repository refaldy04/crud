import { createSlice } from '@reduxjs/toolkit';
import { getProducts, getProduct } from '../asyncAction/products';

const initialState = {
  data: null,
  dataProduct: null,
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
  },
});

// export const {} = products.actions;

export default products.reducer;

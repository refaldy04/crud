import { createSlice } from '@reduxjs/toolkit';
import { getProducts } from '../asyncAction/products';

const initialState = {
  data: null,
};

const products = createSlice({
  name: 'first',
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(getProducts.fulfilled, (state, action) => {
      console.log('ini dari redicers product', action.payload);

      state.data = action.payload.data;
    });
  },
});

// export const {} = products.actions;

export default products.reducer;

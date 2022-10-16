import { createSlice } from '@reduxjs/toolkit';
import { login } from '../asyncAction/user';

const initialState = {
  token: null,
  id: null,
  email: null,
  name: null,
  errorMsg: null,
  successMsg: null,
};

const user = createSlice({
  name: 'second',
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(login.pending, (state) => {
      state.errorMsg = null;
      state.successMsg = null;
    });
    build.addCase(login.fulfilled, (state, action) => {
      const token = action.payload?.token;
      const email = action.payload?.email;
      const name = action.payload?.name;
      const id = action.payload?.id;
      if (token) {
        state.token = token;
        state.email = email;
        state.name = name;
        state.id = id;
      } else {
        state.errorMsg = action.payload?.errorMsg;
        state.successMsg = action.payload?.successMsg;
      }
    });
  },
});

// export const {} = user.actions;

export default user.reducer;

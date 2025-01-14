import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuth: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
});

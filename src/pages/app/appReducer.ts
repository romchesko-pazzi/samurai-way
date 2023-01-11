import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { authAPI } from '../../services/authAPI';

const initialState = { initialized: false };

export const initializeApp = createAsyncThunk(
  'app/initApp',
  async (arg, { rejectWithValue }) => {
    try {
      const response = await authAPI.authMe();

      if (response.data.resultCode === 0) {
        const { id, email, login } = response.data.data;

        return { id, email, login, isAuth: true, error: '' };
      }
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  },
);

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder.addCase(initializeApp.fulfilled, state => {
      state.initialized = true;
    }),
});

export const appReducer = slice.reducer;

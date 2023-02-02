import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { authAPI } from '../../auth/api/authAPI';

const initialState = {
  isInitialized: false,
  isLoading: false,
};

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
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: builder =>
    builder.addCase(initializeApp.fulfilled, state => {
      state.isInitialized = true;
    }),
});

export const appReducer = slice.reducer;
export const { setIsLoading } = slice.actions;

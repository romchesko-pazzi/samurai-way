import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { appActions } from '../../app';
import { authAPI } from '../api/authAPI';

import { IAuthData, ILoginData } from 'modules/auth/interfaces';

const initialState: IAuthData = {
  id: null,
  email: '',
  login: '',
  isAuth: false,
  error: '',
};

const { initializeApp } = appActions;

export const getAuthUserData = createAsyncThunk(
  'auth/getUserData',
  async (arg, { rejectWithValue }) => {
    try {
      const response = await authAPI.authMe();

      if (response.data.resultCode === 0) {
        const { id, email, login } = response.data.data;

        return { id, email, login, isAuth: true, error: '' };
      }

      return rejectWithValue(response.data);
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  },
);

export const login = createAsyncThunk(
  'auth/login',
  async (loginData: ILoginData, { dispatch, rejectWithValue }) => {
    try {
      const response = await authAPI.login(loginData);

      if (response.data.resultCode !== 0) {
        return rejectWithValue(response.data.messages[0]);
      }
      dispatch(getAuthUserData());
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  },
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (arg, { rejectWithValue }) => {
    try {
      await authAPI.logout();

      return { id: null, email: '', login: '', isAuth: false, error: '' };
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  },
);

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetError: state => {
      state.error = null;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(getAuthUserData.fulfilled, (state, action) => {
        Object.assign(state, action.payload);
      })
      .addCase(logout.fulfilled, (state, action) => {
        Object.assign(state, action.payload);
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload as string;
      })
      .addCase(initializeApp.fulfilled, (state, action) => {
        Object.assign(state, action.payload);
      }),
});

export const authReducer = slice.reducer;
export const { resetError } = slice.actions;

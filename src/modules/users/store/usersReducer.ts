import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootStateType } from '../../../store/store';
import { appActions } from '../../app';
import { usersAPI } from '../api/usersAPI';
import { IUsersPage } from '../data/interfaces';

const initialState: IUsersPage = {
  users: [],
  totalCount: 0,
  queryParams: {
    count: 8,
    page: 1,
    term: '',
    friend: null,
  },
  isLoading: false,
  isFollowed: [],
};
const { setIsLoading } = appActions;

export const getUsers = createAsyncThunk<any, undefined, { state: RootStateType }>(
  'users/getUsers',
  async (args, { rejectWithValue, getState }) => {
    try {
      const queryParams = { ...getState().users.queryParams };
      const response = await usersAPI.getUsers(queryParams);

      return response.data;
    } catch (e) {
      return rejectWithValue('error with getting users');
    }
  },
);

export const followUser = createAsyncThunk(
  'users/followUser',
  async (arg: { userId: number; isDelete: boolean }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(setIsLoading(true));
      const { userId, isDelete } = arg;
      const response = isDelete
        ? await usersAPI.unFollow(userId)
        : await usersAPI.follow(userId);

      if (response.data.resultCode === 0) return userId;

      return rejectWithValue('error');
    } catch (err) {
      return rejectWithValue('error');
    } finally {
      dispatch(setIsLoading(false));
    }
  },
);

const slice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.queryParams.page = action.payload;
    },
    setUsersPerPage: (state, action: PayloadAction<number>) => {
      state.queryParams.count = action.payload;
    },
    setName: (state, action: PayloadAction<string>) => {
      state.queryParams.term = action.payload;
    },
    setIsFriend: (state, action: PayloadAction<boolean | null>) => {
      state.queryParams.friend = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getUsers.fulfilled, (state, action) => {
        state.users = action.payload.items;
        state.totalCount = action.payload.totalCount;
      })
      .addCase(followUser.fulfilled, (state, action) => {
        state.users = state.users.map(user =>
          user.id === action.payload ? { ...user, followed: !user.followed } : user,
        );
      });
  },
});

export const usersReducer = slice.reducer;
export const { setCurrentPage, setUsersPerPage, setName, setIsFriend } = slice.actions;

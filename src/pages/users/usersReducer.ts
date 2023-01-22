import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { usersAPI } from '../../services/usersAPI';
import { AppThunkType } from '../../store/hooks';
import {
  ACTIONS_TYPE,
  setLoadingIcon,
  setTotalUsersCount,
  setUsers,
  UsersActionType,
} from '../../store/UsersActions';

import { IUsersPage } from './interfaces';

const initialState: IUsersPage = {
  users: [],
  totalCount: 0,
  pageSize: 4,
  currentPage: 1,
  isLoading: false,
  isFollowed: [],
};

export const _getUsers =
  (currentPage: number, pageSize: number): AppThunkType =>
  async dispatch => {
    dispatch(setLoadingIcon(true));
    const response = await usersAPI.getUsers(currentPage, pageSize);

    dispatch(setLoadingIcon(false));
    dispatch(setUsers(response.data.items));
    dispatch(setTotalUsersCount(response.data.totalCount));
  };

const getUsers = createAsyncThunk(
  'users/getUsers',
  async (
    args: { currentPage: number; pageSize: number },
    { dispatch, rejectWithValue },
  ) => {
    try {
      const { currentPage, pageSize } = args;

      dispatch(setLoadingIcon(true));
      const response = await usersAPI.getUsers(currentPage, pageSize);
    } catch (e) {
      return rejectWithValue('error with getting users');
    }
  },
);

const slice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: {},
});

export const usersReducer = slice.reducer;

export const UsersReducer = (
  state = initialState,
  action: UsersActionType,
): IUsersPage => {
  switch (action.type) {
    case ACTIONS_TYPE.FOLLOW: {
      return {
        ...state,
        users: state.users.map(m =>
          m.id === action.payload.userId ? { ...m, followed: !m.followed } : m,
        ),
      };
    }
    case ACTIONS_TYPE.SET_LOADING_ICON:
    case ACTIONS_TYPE.SET_USERS: {
      return { ...state, ...action.payload };
    }
    case ACTIONS_TYPE.SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.payload.pageNumber };
    }
    case ACTIONS_TYPE.SET_TOTAL_USERS_COUNT: {
      return { ...state, totalCount: action.payload.usersCount };
    }
    case ACTIONS_TYPE.SET_FOLLOW_LOADING: {
      return {
        ...state,
        isFollowed: action.payload.isFetching
          ? [...state.isFollowed, action.payload.userId]
          : state.isFollowed.filter(f => f !== action.payload.userId),
      };
    }
    default:
      return state;
  }
};

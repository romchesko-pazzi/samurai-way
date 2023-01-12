import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { v1 } from 'uuid';

import { PostsType } from '../../components/My Posts/MyPosts';
import { profileAPI } from '../../services/profileAPI';
import {
  ACTIONS_TYPE,
  ProfileAndMessageActionType,
} from '../../store/ProfileAndMessagesActions';

import { UserProfileType } from './types';

type InitType = {
  posts: Array<PostsType>;
  newPostText: string;
  userProfile: UserProfileType;
  isAuth: boolean;
  status: string;
};

const initialState: InitType = {
  newPostText: '',
  posts: [
    { id: v1(), message: 'MyPost1', likesCount: 10 },
    { id: v1(), message: 'MyPost2', likesCount: 12 },
    { id: v1(), message: 'MyPost3', likesCount: 16 },
    { id: v1(), message: 'MyPost4', likesCount: 7 },
  ],
  userProfile: {
    aboutMe: '',
    lookingForAJob: false,
    lookingForAJobDescription: '',
    fullName: '',
    photos: {
      small: '',
      large: '',
    },
    contacts: {
      facebook: '',
      website: '',
      twitter: '',
      instagram: '',
      youtube: '',
      github: '',
      mainLink: '',
      vk: '',
    },
  },
  isAuth: false,
  status: '',
};

export const getUserProfile = createAsyncThunk(
  'profile/getUserProfile',
  async (userId: number, { rejectWithValue }) => {
    try {
      const response = await profileAPI.getData(userId);

      return { profile: response.data };
    } catch (e) {
      return rejectWithValue('some error occurred');
    }
  },
);

export const getUserStatus = createAsyncThunk(
  'profile/getUserStatus',
  async (userId: number, { rejectWithValue }) => {
    try {
      const response = await profileAPI.getStatus(userId);

      return response.data;
    } catch (err: any) {
      return rejectWithValue;
    }
  },
);

export const updateUserStatus = createAsyncThunk(
  'profile/updateUserStatus',
  async (status: string, { rejectWithValue }) => {
    try {
      const response = await profileAPI.updateStatus(status);

      if (response.data.resultCode === 0) return status;
    } catch (err: any) {
      return rejectWithValue('some error occurred');
    }
  },
);

const slice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.userProfile = action.payload.profile;
      })
      .addCase(getUserStatus.fulfilled, (state, action) => {
        state.status = action.payload;
      })
      .addCase(updateUserStatus.fulfilled, (state, action) => {
        state.status = action.payload!;
      });
  },
});

export const _ProfileReducer = (
  state = initialState,
  action: ProfileAndMessageActionType,
): InitType => {
  switch (action.type) {
    case ACTIONS_TYPE.ADD_POST: {
      const x = { id: v1(), message: action.payload.newPostText, likesCount: 0 };

      return { ...state, posts: [x, ...state.posts], newPostText: '' };
    }
    default:
      return state;
  }
};
export const profileReducer = slice.reducer;

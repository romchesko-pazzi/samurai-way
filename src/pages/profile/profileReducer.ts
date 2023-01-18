import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v1 } from 'uuid';

import { profileAPI } from '../../services/profileAPI';
import { RootStateType } from '../../store/store';

import { IProfileFormData, IProfileState, IProfileUpdateData } from './interfaces';

const initialState: IProfileState = {
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
      return rejectWithValue('err');
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

export const updateUserAvatar = createAsyncThunk(
  'profile/updateUserAvatar',
  async (photo: File, { rejectWithValue }) => {
    try {
      const response = await profileAPI.updateUserAvatar(photo);

      if (response.data.resultCode === 0) return { photos: response.data.data.photos };

      return rejectWithValue('some error occurred');
    } catch (err: any) {
      return rejectWithValue('some error occurred');
    }
  },
);

export const updateUserData = createAsyncThunk<
  any,
  { data: IProfileFormData; userId: number },
  { state: RootStateType }
>(
  'profile/updateUserData',
  async (params: { data: IProfileFormData; userId: number }, { rejectWithValue }) => {
    try {
      const {
        youtube,
        website,
        vk,
        twitter,
        mainLink,
        instagram,
        facebook,
        github,
        lookingForAJobDescription,
        lookingForAJob,
        fullName,
        aboutMe,
      } = params.data;

      const model: IProfileUpdateData = {
        userId: params.userId,
        fullName,
        lookingForAJobDescription,
        lookingForAJob,
        AboutMe: aboutMe,
        contacts: {
          facebook,
          website,
          vk,
          twitter,
          youtube,
          github,
          instagram,
          mainLink,
        },
      };
      const response = await profileAPI.updateProfileData(model);

      if (response.data.resultCode === 0) return model;

      return rejectWithValue('error');
    } catch (err: any) {
      return rejectWithValue('error');
    }
  },
);

const slice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<string>) => {
      const model = { id: v1(), message: action.payload, likesCount: 0 };

      state.posts.unshift(model);
    },
  },
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
      })
      .addCase(updateUserAvatar.fulfilled, (state, action) => {
        state.userProfile.photos = action.payload.photos;
      })
      .addCase(updateUserData.fulfilled, (state, action) => {
        state.userProfile.aboutMe = action.payload.AboutMe;
        state.userProfile.fullName = action.payload.fullName;
        state.userProfile.lookingForAJobDescription =
          action.payload.lookingForAJobDescription;
        state.userProfile.lookingForAJob = action.payload.lookingForAJob;
        state.userProfile.contacts = action.payload.contacts;
      });
  },
});

export const profileReducer = slice.reducer;
export const { addPost } = slice.actions;

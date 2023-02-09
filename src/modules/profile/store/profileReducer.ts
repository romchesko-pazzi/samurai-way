import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { v1 } from 'uuid';

import { profileAPI } from '../api/profileAPI';
import { IProfileFormData, IProfileState, IProfileUpdateData } from '../data/interfaces';
import { posts } from '../data/userPosts';
import { userProfile } from '../data/userProfile';

const initialState: IProfileState = {
  newPostText: '',
  status: '',
  isProfileFetched: false,
  error: null,
  posts,
  userProfile,
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

      return rejectWithValue(response.data.messages[0]);
    } catch (err: any) {
      return rejectWithValue('some error occurred');
    }
  },
);

export const updateUserAvatar = createAsyncThunk(
  'profile/updateUserAvatar',
  async (photo: File, { dispatch, rejectWithValue }) => {
    try {
      const response = await profileAPI.updateUserAvatar(photo);

      if (response.data.resultCode === 0) return { photos: response.data.data.photos };

      return rejectWithValue(response.data.messages[0]);
    } catch (err) {
      const error = err as Error | AxiosError;

      return rejectWithValue(error.message);
    } finally {
      dispatch(resetError());
    }
  },
);

export const updateUserData = createAsyncThunk(
  'profile/updateUserData',
  async (
    params: { data: IProfileFormData; userId: number },
    { dispatch, rejectWithValue },
  ) => {
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

      return rejectWithValue(response.data.messages[0]);
    } catch (err) {
      const error = err as Error | AxiosError;

      return rejectWithValue(error.message);
    } finally {
      dispatch(resetError());
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
    setIsProfileFetched: (state, action: PayloadAction<boolean>) => {
      state.isProfileFetched = action.payload;
    },
    resetPosts: state => {
      state.posts = posts;
    },
    resetError: state => {
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.userProfile = action.payload.profile;
        state.isProfileFetched = true;
      })
      .addCase(getUserStatus.fulfilled, (state, action) => {
        state.status = action.payload;
      })
      .addCase(updateUserStatus.fulfilled, (state, action) => {
        state.status = action.payload;
      })
      .addCase(updateUserStatus.rejected, (state, action) => {
        state.error = action.payload as string;
      })
      .addCase(updateUserAvatar.fulfilled, (state, action) => {
        state.userProfile.photos = action.payload.photos;
      })
      .addCase(updateUserAvatar.rejected, (state, action) => {
        state.error = action.payload as string;
      })
      .addCase(updateUserData.fulfilled, (state, action) => {
        state.userProfile.aboutMe = action.payload.AboutMe;
        state.userProfile.fullName = action.payload.fullName;
        state.userProfile.lookingForAJobDescription =
          action.payload.lookingForAJobDescription;
        state.userProfile.lookingForAJob = action.payload.lookingForAJob;
        state.userProfile.contacts = action.payload.contacts;
      })
      .addCase(updateUserData.rejected, (state, action) => {
        state.error = action.payload as string;
      });
  },
});

export const profileReducer = slice.reducer;
export const { addPost, setIsProfileFetched, resetPosts, resetError } = slice.actions;

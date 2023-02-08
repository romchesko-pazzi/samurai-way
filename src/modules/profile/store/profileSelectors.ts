import { RootStateType } from 'store/store';

export const selectSocials = (state: RootStateType) => state.profile.userProfile.contacts;

export const selectFullName = (state: RootStateType) =>
  state.profile.userProfile.fullName;

export const selectAboutMe = (state: RootStateType) => state.profile.userProfile.aboutMe;

export const selectLargePhoto = (state: RootStateType) =>
  state.profile.userProfile.photos?.large;

export const selectIsLookingForAJob = (state: RootStateType) =>
  state.profile.userProfile.lookingForAJob;

export const selectLookingForAJobDescription = (state: RootStateType) =>
  state.profile.userProfile.lookingForAJobDescription;

export const selectUserId = (state: RootStateType) => state.profile.userProfile.userId;

export const selectStatus = (state: RootStateType) => state.profile.status;

export const selectPosts = (state: RootStateType) => state.profile.posts;

export const selectIsProfileFetched = (state: RootStateType) =>
  state.profile.isProfileFetched;

export const selectError = (state: RootStateType) => state.profile.error;

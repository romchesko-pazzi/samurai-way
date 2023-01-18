import { RootStateType } from '../../store/store';

export const selectSocials = (state: RootStateType) => state.profile.userProfile;
export const selectFullName = (state: RootStateType) =>
  state.profile.userProfile.fullName;

export const selectAboutMe = (state: RootStateType) => state.profile.userProfile.aboutMe;

export const selectLargePhoto = (state: RootStateType) =>
  state.profile.userProfile.photos?.large;

export const selectIsLookingForAJob = (state: RootStateType) =>
  state.profile.userProfile.lookingForAJob;

export const selectLookingForAJobDescription = (state: RootStateType) =>
  state.profile.userProfile.lookingForAJobDescription;

export const selectStatus = (state: RootStateType) => state.profile.status;

export const selectPosts = (state: RootStateType) => state.profile;

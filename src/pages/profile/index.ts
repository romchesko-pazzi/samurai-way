import {
  updateUserData,
  getUserStatus,
  updateUserStatus,
  getUserProfile,
  updateUserAvatar,
} from './profileReducer';

export const profileActions = {
  updateUserData,
  getUserStatus,
  updateUserStatus,
  getUserProfile,
  updateUserAvatar,
};

export { profileReducer } from './profileReducer';
export type {
  PhotosType,
  ContactsType,
  ProfileResponseType,
  ProfileUpdateDataType,
  UpdateUserAvatarType,
  ProfileFormDataType,
} from './types';

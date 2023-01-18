import {
  updateUserData,
  getUserStatus,
  updateUserStatus,
  getUserProfile,
  updateUserAvatar,
  addPost,
} from './profileReducer';

export const profileActions = {
  updateUserData,
  getUserStatus,
  updateUserStatus,
  getUserProfile,
  updateUserAvatar,
  addPost,
};

export { profileReducer } from './profileReducer';
export * from './interfaces';

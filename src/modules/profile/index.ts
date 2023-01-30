import {
  updateUserData,
  getUserStatus,
  updateUserStatus,
  getUserProfile,
  updateUserAvatar,
  addPost,
} from './store/profileReducer';

export const profileActions = {
  updateUserData,
  getUserStatus,
  updateUserStatus,
  getUserProfile,
  updateUserAvatar,
  addPost,
};

export { profileReducer } from './store/profileReducer';
export * from './interfaces';

export { Profile } from './Profile';

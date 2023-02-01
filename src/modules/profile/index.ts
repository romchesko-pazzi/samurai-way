import {
  updateUserData,
  getUserStatus,
  updateUserStatus,
  getUserProfile,
  updateUserAvatar,
  addPost,
  setIsProfileFetched,
} from './store/profileReducer';

export const profileActions = {
  updateUserData,
  getUserStatus,
  updateUserStatus,
  getUserProfile,
  updateUserAvatar,
  addPost,
  setIsProfileFetched,
};

export { profileReducer } from './store/profileReducer';
export * from './interfaces';

export { Profile } from './Profile';

import {
  updateUserData,
  getUserStatus,
  updateUserStatus,
  getUserProfile,
  updateUserAvatar,
  addPost,
  setIsProfileFetched,
  resetPosts,
  resetError,
} from './store/profileReducer';

export const profileActions = {
  updateUserData,
  getUserStatus,
  updateUserStatus,
  getUserProfile,
  updateUserAvatar,
  addPost,
  setIsProfileFetched,
  resetPosts,
  resetError,
};

export { profileReducer } from './store/profileReducer';
export * from './data/interfaces';

export { Profile } from './Profile';

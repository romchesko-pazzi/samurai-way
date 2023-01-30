import {
  getUsers,
  followUser,
  setCurrentPage,
  setUsersPerPage,
  setName,
  setIsFriend,
} from './store/usersReducer';

export * from './interfaces';

export const usersActions = {
  getUsers,
  followUser,
  setCurrentPage,
  setUsersPerPage,
  setName,
  setIsFriend,
};

export { Users } from './Users';

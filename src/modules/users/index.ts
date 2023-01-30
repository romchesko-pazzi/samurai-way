import {
  getUsers,
  followUser,
  setCurrentPage,
  setUsersPerPage,
  setName,
} from './store/usersReducer';

export * from './interfaces';

export const usersActions = {
  getUsers,
  followUser,
  setCurrentPage,
  setUsersPerPage,
  setName,
};

export { Users } from './Users';

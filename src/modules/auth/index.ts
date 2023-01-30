import { login, logout } from './store/authReducer';

export const authActions = { login, logout };

export { SignIn } from './SignIn';
export { authReducer } from './store/authReducer';
export {
  selectUserId,
  selectIsAuth,
  selectEmail,
  selectLogin,
} from './store/authSelectors';
export type { AuthDataType, LoginDataType } from './types';

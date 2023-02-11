import { login, logout, resetError } from './store/authReducer';

export const authActions = { login, logout, resetError };

export { SignIn } from './SignIn';
export { authReducer } from './store/authReducer';
export {
  selectAuthId,
  selectIsAuth,
  selectEmail,
  selectLogin,
} from './store/authSelectors';
export type { IAuthData, ILoginData } from './interfaces';

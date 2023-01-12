import { login, logout } from './authReducer';

export const authActions = { login, logout };

export { SignIn } from './SignIn';
export { authReducer } from './authReducer';
export { selectUserId, selectIsAuth, selectEmail, selectLogin } from './authSelectors';
export type { AuthDataType, LoginDataType } from './types';

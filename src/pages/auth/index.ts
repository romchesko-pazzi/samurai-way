import { login, logout } from './authReducer';

export { authReducer } from './authReducer';
export type { AuthDataType, LoginDataType } from './types';
export { SignIn } from './SignIn';
export const authActions = { login, logout };

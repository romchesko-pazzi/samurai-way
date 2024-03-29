import { RootStateType } from 'store/store';

export const selectIsAuth = (state: RootStateType) => state.auth.isAuth;
export const selectLogin = (state: RootStateType) => state.auth.login;
export const selectEmail = (state: RootStateType) => state.auth.email;
export const selectAuthId = (state: RootStateType) => state.auth.id;
export const selectError = (state: RootStateType) => state.auth.error;

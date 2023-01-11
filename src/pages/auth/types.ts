export type AuthDataType = {
  id: number | null;
  email: string;
  login: string;
  isAuth: boolean;
  error: string;
};

export type LoginDataType = {
  email: string;
  password: string;
  rememberMe: boolean;
};

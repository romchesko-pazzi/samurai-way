export interface IAuthData {
  id: number | null;
  email: string;
  login: string;
  isAuth: boolean;
  error: string | null;
}

export interface ILoginData {
  email: string;
  password: string;
  rememberMe: boolean;
}

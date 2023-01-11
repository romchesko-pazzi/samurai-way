import { LoginDataType } from '../pages/auth';

import { instance } from './instance';

export const authAPI = {
  authMe() {
    return instance.get(`/auth/me`);
  },
  login(loginData: LoginDataType) {
    return instance.post('/auth/login', loginData);
  },
  logout() {
    return instance.delete('/auth/login');
  },
};

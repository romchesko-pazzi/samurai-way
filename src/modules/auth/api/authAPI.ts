import { instance } from '../../../data/instance';
import { LoginDataType } from '../index';

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

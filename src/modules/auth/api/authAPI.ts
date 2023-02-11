import { ILoginData } from '../index';

import { instance } from 'data/instance';

export const authAPI = {
  authMe() {
    return instance.get(`/auth/me`);
  },
  login(loginData: ILoginData) {
    return instance.post('/auth/login', loginData);
  },
  logout() {
    return instance.delete('/auth/login');
  },
};

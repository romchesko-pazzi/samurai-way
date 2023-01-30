import { instance } from '../../../data/instance';
import { IGetUser, IQueryParams } from '../index';

export const usersAPI = {
  getUsers(params: IQueryParams) {
    return instance.get<IGetUser>('/users', {
      params,
    });
  },
  follow(userId: number) {
    return instance.post(`/follow/${userId}`);
  },
  unFollow(userId: number) {
    return instance.delete(`/follow/${userId}`);
  },
  choosePageNumber(pageNumber: number, pageSize: number) {
    return instance.get(`/users?page=${pageNumber}&count=${pageSize}`).then(response => {
      return response.data;
    });
  },
};

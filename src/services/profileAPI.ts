import { instance } from './instance';

export const profileAPI = {
  getStatus(userId: number) {
    return instance.get(`/profile/status/${userId}`);
  },
  updateStatus(status: string) {
    return instance.put(`/profile/status`, { status });
  },
  follow(userId: string) {
    return instance.post(`/follow/${userId}`).then(response => {
      return response.data;
    });
  },
  unFollow(userId: string) {
    return instance.delete(`/follow/${userId}`).then(response => {
      return response.data;
    });
  },
  getData(userId: number) {
    return instance.get(`/profile/${userId}`);
  },
};

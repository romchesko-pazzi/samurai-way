import { ProfileUpdateDataType, UpdateUserAvatarType } from '../pages/profile';

import { instance } from './instance';

export const profileAPI = {
  getStatus(userId: number) {
    return instance.get(`/profile/status/${userId}`);
  },
  updateProfileData(data: ProfileUpdateDataType) {
    return instance.put(`/profile`, data);
  },
  updateUserAvatar(photo: File) {
    const formData = new FormData();

    formData.append('image', photo);

    return instance.put<UpdateUserAvatarType>('/profile/photo', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
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

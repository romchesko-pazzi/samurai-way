import { instance } from '../../../data/instance';
import { IProfileUpdateData, IUpdateUserAvatar } from '../index';

export const profileAPI = {
  getStatus(userId: number) {
    return instance.get(`/profile/status/${userId}`);
  },
  updateProfileData(data: IProfileUpdateData) {
    return instance.put(`/profile`, data);
  },
  updateUserAvatar(photo: File) {
    const formData = new FormData();

    formData.append('image', photo);

    return instance.put<IUpdateUserAvatar>('/profile/photo', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  updateStatus(status: string) {
    return instance.put(`/profile/status`, { status });
  },

  getData(userId: number) {
    return instance.get(`/profile/${userId}`);
  },
};

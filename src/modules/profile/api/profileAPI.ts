import { IPhotos, IProfileUpdateData, IResponseCommon } from '../index';

import { instance } from 'data/instance';

export const profileAPI = {
  getStatus(userId: number) {
    return instance.get(`/profile/status/${userId}`);
  },
  updateProfileData(data: IProfileUpdateData) {
    return instance.put<IResponseCommon>(`/profile`, data);
  },
  updateUserAvatar(photo: File) {
    const formData = new FormData();

    formData.append('image', photo);

    return instance.put<IResponseCommon<IPhotos>>('/profile/photo', formData);
  },
  updateStatus(status: string) {
    return instance.put<IResponseCommon>(`/profile/status`, { status });
  },

  getData(userId: number) {
    return instance.get(`/profile/${userId}`);
  },
};

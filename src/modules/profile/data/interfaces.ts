export interface IProfileCommon {
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: IContacts;
}

export interface IContacts {
  github: string;
  vk: string;
  facebook: string;
  instagram: string;
  twitter: string;
  website: string;
  youtube: string;
  mainLink: string;
}

export interface IProfileFormData extends IProfileCommon, IContacts {
  aboutMe: string;
}

export interface IPhotos {
  small: string | null;
  large: string | null;
}

export interface IProfileResponse extends IProfileCommon {
  aboutMe: string;
  userId: number | null;
  photos: IPhotos;
}

export interface IProfileUpdateData extends IProfileCommon {
  userId: number;
  AboutMe: string;
}

export interface IUpdateUserAvatar {
  resultCode: number;
  messages: string[];
  data: {
    photos: {
      small: string;
      large: string;
    };
  };
}

export interface IPosts {
  id: string;
  message: string;
  likesCount: number;
}

export interface IProfileState {
  posts: Array<IPosts>;
  newPostText: string;
  userProfile: IProfileResponse;
  status: string;
  isProfileFetched: boolean;
}

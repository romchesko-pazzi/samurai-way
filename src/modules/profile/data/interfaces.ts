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

export interface IPhotosFields {
  small: string | null;
  large: string | null;
}

export interface IProfileResponse extends IProfileCommon {
  aboutMe: string;
  userId: number | null;
  photos: IPhotosFields;
}

export interface IProfileUpdateData extends IProfileCommon {
  userId: number;
  AboutMe: string;
}

export interface IResponseCommon<T = {}> {
  resultCode: number;
  messages: string[];
  data: T;
  fieldsError: string[];
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
  error: string | null;
}

export interface IPhotos {
  photos: IPhotosFields;
}

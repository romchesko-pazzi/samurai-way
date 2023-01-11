export type SocialNetworksType = {
  facebook: string;
  website: string;
  twitter: string;
  instagram: string;
  youtube: string;
  github: string;
  mainLink: string;
  vk: string;
};

export type PhotosType = {
  small: string;
  large: string;
};

export type UserProfileType = {
  aboutMe: string;
  isLookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  photos: PhotosType;
  contacts: SocialNetworksType;
};

export type ProfileInfoPropsType = {
  userProfile: UserProfileType;
  status: string;
  updateUserStatusTC: (status: string) => void;
};

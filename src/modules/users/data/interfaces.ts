import { IPhotos } from '../../profile';

export interface IUser {
  name: string;
  id: number;
  uniqueUrlName: null | string;
  status: null | string;
  photos: IPhotos;
  followed: boolean;
}

export interface IUsersPage {
  users: IUser[];
  totalCount: number;
  queryParams: IQueryParams;
  isLoading: boolean;
  isFollowed: string[];
}

export interface IQueryParams {
  count: number;
  page: number;
  term: string;
  friend: boolean | null;
}

export interface IGetUser {
  items: IUser[];
  totalCount: number;
  error: null | string;
}

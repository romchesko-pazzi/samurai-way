import axios from 'axios';

import { apiKey } from './apiKey';

export const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0',
  headers: {
    'api-key': apiKey,
  },
});

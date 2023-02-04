import axios from 'axios';

export const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0',
  headers: {
    'api-key': process.env.REACT_APP_API_KEY,
  },
});

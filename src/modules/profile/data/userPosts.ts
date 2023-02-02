import { v1 } from 'uuid';

export const posts = [
  { id: v1(), message: 'MyPost1', likesCount: 10 },
  { id: v1(), message: 'MyPost2', likesCount: 12 },
  { id: v1(), message: 'MyPost3', likesCount: 16 },
  { id: v1(), message: 'MyPost4', likesCount: 7 },
];

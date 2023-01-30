import React from 'react';

import { useAppSelector } from '../../../../hooks/useAppSelector';
import { selectFullName, selectPosts } from '../../store/profileSelectors';

import { AddPostForm } from './AddPostForm';
import s from './myPosts.module.scss';

export const MyPosts = () => {
  const { posts } = useAppSelector(selectPosts);
  const userName = useAppSelector(selectFullName);

  return (
    <div className={s.main}>
      <h3>My posts</h3>
      <AddPostForm />
      <div>
        {posts.map(post => (
          <div key={post.id} className={s.postBox}>
            <span>{userName}</span>
            <span>{post.message}</span>
            <p className={s.heart}>&hearts; {post.likesCount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

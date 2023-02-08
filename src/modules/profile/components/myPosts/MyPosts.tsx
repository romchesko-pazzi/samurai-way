import React, { memo, useEffect } from 'react';

import { profileActions } from '../../index';
import { selectFullName, selectPosts } from '../../store/profileSelectors';

import { AddPostForm } from './AddPostForm';
import s from './myPosts.module.scss';

import { useActions } from 'hooks/useActions';
import { useAppSelector } from 'hooks/useAppSelector';

export const MyPosts = memo(() => {
  const posts = useAppSelector(selectPosts);

  const userName = useAppSelector(selectFullName);
  const { resetPosts } = useActions(profileActions);

  useEffect(() => {
    return () => {
      resetPosts();
    };
  }, [resetPosts]);

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
});

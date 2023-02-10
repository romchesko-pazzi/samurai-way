import React from 'react';

import { Link } from 'react-router-dom';

import { usersActions } from '../../index';
import { selectUsers } from '../../store/usersSelectors';

import s from './user.module.scss';

import { path } from 'data/paths';
import { useActions } from 'hooks/useActions';
import { useAppSelector } from 'hooks/useAppSelector';
import { ButtonComponent } from 'ui/button';

export const User = () => {
  const users = useAppSelector(selectUsers);
  const { followUser } = useActions(usersActions);

  const follow = (userId: number) => followUser({ userId, isDelete: false });
  const unFollow = (userId: number) => followUser({ userId, isDelete: true });

  return (
    <div className={s.usersBox}>
      {users.map((user: any) => (
        <div key={user.id} className={s.user}>
          <div className={s.avatar}>
            {user.photos.large === null ? (
              <img
                src="https://icon-library.com/images/avatar-png-icon/avatar-png-icon-13.jpg"
                alt="avatar"
              />
            ) : (
              <img src={user.photos.large} alt="avatar" />
            )}
          </div>
          <h3 className={s.name}>{user.name}</h3>
          <div className={s.status}>{user.status}</div>
          <div className={s.actions}>
            {user.followed ? (
              <ButtonComponent
                callback={() => unFollow(user.id)}
                title="unfollow"
                disabled={false}
              />
            ) : (
              <ButtonComponent
                callback={() => follow(user.id)}
                title="follow"
                disabled={false}
              />
            )}
            <Link to={`${path.profile}/${user.id}`}>
              <ButtonComponent title="view profile" disabled={false} />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

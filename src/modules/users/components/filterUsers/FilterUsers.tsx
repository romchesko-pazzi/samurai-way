import React, { memo } from 'react';

import { usersActions } from '../../index';
import { selectIsFriend } from '../../store/usersSelectors';

import s from './filterUsers.module.scss';

import { buttonTitle } from 'data/buttonTitle';
import { useActions } from 'hooks/useActions';
import { useAppSelector } from 'hooks/useAppSelector';
import { selectIsLoading } from 'modules/app/store/appSelectors';

export const FilterUsers = memo(() => {
  const isLoading = useAppSelector(selectIsLoading);
  const isFriend = useAppSelector(selectIsFriend);
  const { setIsFriend } = useActions(usersActions);

  const getFriends = () => setIsFriend(true);
  const getAllUsers = () => setIsFriend(null);

  return (
    <div className={s.main}>
      <span>Show users</span>
      <div className={s.buttons}>
        <button
          onClick={getFriends}
          className={isFriend ? [s.button, s.active].join(' ') : s.button}
          type="button"
          disabled={isLoading}
        >
          {buttonTitle.friends}
        </button>
        <button
          onClick={getAllUsers}
          className={isFriend ? s.button : [s.button, s.active].join(' ')}
          type="button"
          disabled={isLoading}
        >
          {buttonTitle.allUsers}
        </button>
      </div>
    </div>
  );
});

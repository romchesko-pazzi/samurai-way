import React, { useEffect } from 'react';

import { useActions } from '../../hooks/useActions';
import { useAppSelector } from '../../hooks/useAppSelector';

import { FilterUsers } from './components/filterUsers/FilterUsers';
import { PaginationComponent } from './components/pagination/PaginationComponent';
import { Search } from './components/search/Search';
import { User } from './components/user';
import {
  selectCount,
  selectCurrentPage,
  selectIsFriend,
  selectName,
} from './store/usersSelectors';
import s from './users.module.scss';

import { usersActions } from './index';

export const Users = () => {
  const { getUsers } = useActions(usersActions);

  // for query
  const currentPage = useAppSelector(selectCurrentPage);
  const count = useAppSelector(selectCount);
  const name = useAppSelector(selectName);
  const isFriend = useAppSelector(selectIsFriend);

  useEffect(() => {
    getUsers();
  }, [currentPage, count, name, isFriend, getUsers]);

  return (
    <div className={s.main}>
      <div className={s.settings}>
        <Search />
        <FilterUsers />
      </div>
      <User />
      <PaginationComponent />
    </div>
  );
};

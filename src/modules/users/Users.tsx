import React, { useEffect } from 'react';

import { useActions } from '../../hooks/useActions';
import { useAppSelector } from '../../hooks/useAppSelector';

import { PaginationComponent } from './components/pagination/PaginationComponent';
import { Search } from './components/search/Search';
import { User } from './components/user';
import { selectCount, selectCurrentPage, selectName } from './store/usersSelectors';
import s from './users.module.scss';

import { usersActions } from './index';

export const Users = () => {
  const { getUsers } = useActions(usersActions);
  const currentPage = useAppSelector(selectCurrentPage);
  const count = useAppSelector(selectCount);
  const name = useAppSelector(selectName);

  useEffect(() => {
    getUsers();
  }, [currentPage, count, name, getUsers]);

  return (
    <div className={s.main}>
      <Search />
      <User />
      <PaginationComponent />
    </div>
  );
};

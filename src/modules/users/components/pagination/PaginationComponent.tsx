import React from 'react';

import {
  FormControl,
  MenuItem,
  Pagination,
  Select,
  SelectChangeEvent,
} from '@mui/material';

import { useActions } from '../../../../hooks/useActions';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { usersActions } from '../../index';
import {
  selectCount,
  selectCurrentPage,
  selectTotalCount,
} from '../../store/usersSelectors';

import s from './pagination.module.scss';

export const PaginationComponent = () => {
  const totalCount = useAppSelector(selectTotalCount);
  const count = useAppSelector(selectCount);
  const currentPage = useAppSelector(selectCurrentPage);

  const { setCurrentPage, setUsersPerPage } = useActions(usersActions);

  const limit = Math.ceil(totalCount / count);
  // const dispatch = useAppDispatch();
  const perPageValue = count.toString();

  const changePage = (event: React.ChangeEvent<unknown>, currentPage: number) => {
    setCurrentPage(currentPage);
  };
  const perPageHandler = (event: SelectChangeEvent) => {
    const pageCount = +event.target.value;

    setUsersPerPage(pageCount);
  };

  return (
    <div className={s.main}>
      <Pagination onChange={changePage} page={currentPage} count={limit} />
      <div className={s.perPage}>
        <div>Show</div>
        <FormControl sx={{ margin: '0 1rem' }} size="small">
          <Select
            sx={{ fontFamily: 'inherit', fontSize: 'inherit' }}
            value={perPageValue}
            onChange={perPageHandler}
          >
            <MenuItem className={s.menuItem} value={4}>
              4
            </MenuItem>
            <MenuItem className={s.menuItem} value={8}>
              8
            </MenuItem>
          </Select>
        </FormControl>
        <div>users per page</div>
      </div>
    </div>
  );
};

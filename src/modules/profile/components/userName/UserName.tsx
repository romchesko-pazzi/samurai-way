import React from 'react';

import { TextField } from '@mui/material';

import common from '../../assets/commonStyles.module.scss';
import { IProps } from '../../interfaces/interfaces';
import { selectFullName } from '../../store/profileSelectors';

import s from './userName.module.scss';

import { useAppSelector } from 'hooks/useAppSelector';

export const UserName = ({ isEdit, register }: IProps) => {
  const name = useAppSelector(selectFullName);

  return isEdit ? (
    <TextField
      sx={{ display: 'block' }}
      InputProps={{ className: common.input }}
      variant="standard"
      {...register('fullName', {
        value: name,
      })}
      type="text"
    />
  ) : (
    <div className={s.userName}>{name}</div>
  );
};

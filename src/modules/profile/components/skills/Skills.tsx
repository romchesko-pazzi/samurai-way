import React from 'react';

import { TextField } from '@mui/material';

import common from '../../assets/commonStyles.module.scss';
import { skills } from '../../data/constants';
import { IProps } from '../../interfaces/interfaces';
import { selectLookingForAJobDescription } from '../../store/profileSelectors';

import s from './skills.module.scss';

import { useAppSelector } from 'hooks/useAppSelector';

export const Skills = ({ isEdit, register }: IProps) => {
  const lookingForAJobDescription = useAppSelector(selectLookingForAJobDescription);

  return (
    <div className={s.skills}>
      <b>{skills}</b>
      {isEdit ? (
        <TextField
          InputProps={{ className: common.input }}
          variant="standard"
          {...register('lookingForAJobDescription', {
            value: lookingForAJobDescription,
          })}
          type="text"
        />
      ) : (
        <div>{lookingForAJobDescription}</div>
      )}
    </div>
  );
};

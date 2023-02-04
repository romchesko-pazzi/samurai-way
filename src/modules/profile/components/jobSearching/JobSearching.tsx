import React from 'react';

import { lookingForAJob, no, yes } from '../../data/constants';
import { IProps } from '../../interfaces/interfaces';
import { selectIsLookingForAJob } from '../../store/profileSelectors';

import s from './jobSearching.module.scss';

import { useAppSelector } from 'hooks/useAppSelector';

export const JobSearching = ({ isEdit, register }: IProps) => {
  const isLookingForAJob = useAppSelector(selectIsLookingForAJob);

  return isEdit ? (
    <div className={s.checkbox}>
      <label>
        {lookingForAJob}
        <input
          type="checkbox"
          {...register('lookingForAJob', { value: isLookingForAJob })}
        />
      </label>
    </div>
  ) : (
    <div>{isLookingForAJob ? <span>{yes}</span> : <span>{no}</span>}</div>
  );
};

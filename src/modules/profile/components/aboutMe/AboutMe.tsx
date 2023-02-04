import React from 'react';

import { IProps } from '../../interfaces/interfaces';
import { selectAboutMe } from '../../store/profileSelectors';

import s from './aboutMe.module.scss';

import { useAppSelector } from 'hooks/useAppSelector';

export const AboutMe = ({ isEdit, register }: IProps) => {
  const aboutMe = useAppSelector(selectAboutMe);

  return isEdit ? (
    <div className={s.aboutMe}>
      <textarea
        cols={72}
        {...register('aboutMe', {
          value: aboutMe,
        })}
      />
    </div>
  ) : (
    <div className={s.introduction}>{aboutMe}</div>
  );
};

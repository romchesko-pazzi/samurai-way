import React, { ChangeEvent, memo } from 'react';

import { profileActions } from '../../index';
import { selectLargePhoto } from '../../store/profileSelectors';

import s from './profileAvatar.module.scss';

import { useActions } from 'hooks/useActions';
import { useAppSelector } from 'hooks/useAppSelector';
import { SvgSelector } from 'ui/svgSelector';

export const ProfileAvatar = memo(({ isMyPage }: IProfileAvatarProps) => {
  const photo = useAppSelector(selectLargePhoto);
  const { updateUserAvatar } = useActions(profileActions);

  const selectFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    updateUserAvatar(e.target.files[0]);
  };

  return (
    <div className={s.avatar}>
      <div className={s.avatarBox}>
        {!photo ? (
          <img
            src="https://icon-library.com/images/avatar-png-icon/avatar-png-icon-13.jpg"
            alt="avatar"
          />
        ) : (
          <img src={photo} alt="avatar" />
        )}
        {isMyPage && (
          <div className={s.svgPhoto}>
            <SvgSelector id="uploadPhoto" />
            <div className={s.round}>
              <input type="file" onChange={selectFile} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
});

interface IProfileAvatarProps {
  isMyPage: boolean;
}

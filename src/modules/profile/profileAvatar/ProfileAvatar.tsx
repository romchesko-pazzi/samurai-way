import React, { ChangeEvent } from 'react';

import { SvgSelector } from '../../../ui/svgSelector';

import s from './profileAvatar.module.scss';

export const ProfileAvatar: React.FC<ProfileAvatarPropsType> = ({
  photo,
  callback,
  isMyPage,
}) => {
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
              <input type="file" onChange={callback} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

type ProfileAvatarPropsType = {
  isMyPage: boolean;
  photo: string;
  callback: (photo: ChangeEvent<HTMLInputElement>) => void;
};

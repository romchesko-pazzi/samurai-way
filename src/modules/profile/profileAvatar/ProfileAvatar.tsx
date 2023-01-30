import React, { ChangeEvent } from 'react';

import { SvgSelector } from '../../../ui/svgSelector';

import s from './profileAvatar.module.scss';

export const ProfileAvatar: React.FC<ProfileAvatarPropsType> = ({ photo, callback }) => {
  return (
    <div className={s.avatar}>
      {photo === undefined ? (
        <img
          src="https://icon-library.com/images/avatar-png-icon/avatar-png-icon-13.jpg"
          alt="avatar"
        />
      ) : (
        <img src={photo} alt="avatar" />
      )}
      <div className={s.svgPhoto}>
        <SvgSelector id="uploadPhoto" />
      </div>
      <div className={s.round}>
        <input type="file" onChange={callback} />
      </div>
    </div>
  );
};

type ProfileAvatarPropsType = {
  photo: string;
  callback: (photo: ChangeEvent<HTMLInputElement>) => void;
};

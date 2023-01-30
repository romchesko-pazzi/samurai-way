import React, { ChangeEvent, useEffect, useState } from 'react';

import { TextField } from '@mui/material';
import { useForm } from 'react-hook-form';

import { useActions } from '../../hooks/useActions';
import { useAppSelector } from '../../hooks/useAppSelector';
import { selectUserId } from '../auth';

import { Contacts } from './components/contacts';
import { EditableSpan } from './components/editableSpan/EditableSpan';
import { MyPosts } from './components/my posts';
import s from './profile.module.scss';
import { ProfileAvatar } from './profileAvatar/ProfileAvatar';
import {
  selectAboutMe,
  selectFullName,
  selectIsLookingForAJob,
  selectLargePhoto,
  selectLookingForAJobDescription,
  selectSocials,
  selectStatus,
} from './store/profileSelectors';

import { profileActions, IProfileFormData } from './index';

export const Profile = () => {
  const {
    getUserProfile,
    updateUserStatus,
    getUserStatus,
    updateUserAvatar,
    updateUserData,
  } = useActions(profileActions);
  const userId = useAppSelector(selectUserId);
  const name = useAppSelector(selectFullName);
  const aboutMe = useAppSelector(selectAboutMe);
  const largePhoto = useAppSelector(selectLargePhoto);
  const lookingForAJob = useAppSelector(selectIsLookingForAJob);
  const lookingForAJobDescription = useAppSelector(selectLookingForAJobDescription);
  const status = useAppSelector(selectStatus);
  const { contacts } = useAppSelector(selectSocials);

  useEffect(() => {
    getUserProfile(userId!);
    getUserStatus(userId!);
  }, []);

  const [isEdit, setIsEdit] = useState(false);

  const { register, handleSubmit } = useForm<IProfileFormData>();

  const updateUserStatusHandler = (localStatus: string) => updateUserStatus(localStatus);

  const selectFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    updateUserAvatar(e.target.files[0]);
  };

  const changeFields = () => setIsEdit(true);

  const collectAllData = (data: IProfileFormData) => {
    updateUserData({ data, userId: userId! });
    setIsEdit(false);
  };

  return (
    <div className={s.wrapper}>
      <form className={s.profile} onSubmit={handleSubmit(collectAllData)}>
        <ProfileAvatar photo={largePhoto!} callback={selectFile} />
        {isEdit ? (
          <TextField
            sx={{ display: 'block' }}
            InputProps={{ className: s.input }}
            variant="standard"
            {...register('fullName', {
              value: name,
            })}
            type="text"
          />
        ) : (
          <div className={s.userName}>{name}</div>
        )}
        {isEdit ? (
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
        )}
        <div className={s.skills}>
          <b>My skills:</b>
          {isEdit ? (
            <TextField
              InputProps={{ className: s.input }}
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
        <div className={s.status}>
          <EditableSpan status={status} callback={updateUserStatusHandler} />
        </div>
        {isEdit && (
          <div className={s.checkbox}>
            <label>
              Are you looking for a job?
              <input
                type="checkbox"
                {...register('lookingForAJob', { value: lookingForAJob })}
              />
            </label>
          </div>
        )}
        {lookingForAJob ? (
          <div>I am looking for a job</div>
        ) : (
          <div>I am not looking for a job</div>
        )}
        <Contacts
          callback={changeFields}
          register={register}
          isEdit={isEdit}
          contacts={contacts}
        />
      </form>
      <MyPosts />
    </div>
  );
};

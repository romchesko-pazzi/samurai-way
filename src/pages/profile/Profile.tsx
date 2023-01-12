import React, { useEffect } from 'react';

import { EditableSpan } from '../../components/editableSpan/EditableSpan';
import { MyPostsContainer } from '../../components/My Posts/MyPostsContainer';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../store/hooks';
import { selectUserId } from '../auth';

import s from './profile.module.scss';
import { getUserProfile, getUserStatus, updateUserStatus } from './profileReducer';
import {
  selectAboutMe,
  selectFullName,
  selectIsLookingForAJob,
  selectLargePhoto,
  selectSocials,
  selectStatus,
} from './profileSelectors';
import { UserProfileType } from './types';

export type ProfilePageType = {
  status: string;
  userProfile: UserProfileType;
};

export const Profile = () => {
  const dispatch = useAppDispatch();
  const userId = useAppSelector(selectUserId);
  const name = useAppSelector(selectFullName);
  const largePhoto = useAppSelector(selectLargePhoto);
  const isLookingForAJob = useAppSelector(selectIsLookingForAJob);
  const aboutMe = useAppSelector(selectAboutMe);
  const status = useAppSelector(selectStatus);
  const { mainLink, twitter, instagram, github } = useAppSelector(selectSocials);

  useEffect(() => {
    dispatch(getUserProfile(userId!));
    dispatch(getUserStatus(userId!));
  }, [dispatch, userId]);

  const updateUserStatusHandler = (localStatus: string) => {
    dispatch(updateUserStatus(localStatus));
  };

  const contacts = [
    { link: mainLink, title: 'LinkedIn' },
    { link: github, title: 'Github' },
    { link: twitter, title: 'Twitter' },
    { link: instagram, title: 'Instagram' },
  ];

  return (
    <div className={s.wrapper}>
      <div className={s.profile}>
        <div className={s.avatar}>
          {largePhoto === null ? (
            <img
              src="https://icon-library.com/images/avatar-png-icon/avatar-png-icon-13.jpg"
              alt="avatar"
            />
          ) : (
            <img src={largePhoto} alt="avatar" />
          )}
        </div>
        <div className={s.userName}>{name}</div>
        <div className={s.introduction}>{aboutMe}</div>
        <div className={s.status}>
          <EditableSpan status={status} callback={updateUserStatusHandler} />
        </div>
        {isLookingForAJob ? (
          <div>I am looking for a job</div>
        ) : (
          <div>I am not looking for a job</div>
        )}
        <div className={s.contacts}>
          {contacts.map(contact => (
            <a key={contact.title} target="_blank" href={contact.link} rel="noreferrer">
              {contact.title}: {contact.link}
            </a>
          ))}
        </div>
      </div>
      <MyPostsContainer />
    </div>
  );
};

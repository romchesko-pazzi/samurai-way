import React, { ChangeEvent, useEffect } from 'react';

import { Contacts } from '../../components/contacts';
import { EditableSpan } from '../../components/editableSpan/EditableSpan';
import { MyPostsContainer } from '../../components/My Posts/MyPostsContainer';
import { SvgSelector } from '../../components/svgSelector';
import { useActions } from '../../hooks/useActions';
import { useAppSelector } from '../../store/hooks';
import { selectUserId } from '../auth';

import s from './profile.module.scss';
import {
  selectAboutMe,
  selectFullName,
  selectIsLookingForAJob,
  selectLargePhoto,
  selectSocials,
  selectStatus,
} from './profileSelectors';

import { profileActions } from './index';

export const Profile = () => {
  const { getUserProfile, updateUserStatus, getUserStatus, updateUserAvatar } =
    useActions(profileActions);
  const userId = useAppSelector(selectUserId);
  const name = useAppSelector(selectFullName);
  const largePhoto = useAppSelector(selectLargePhoto);
  const isLookingForAJob = useAppSelector(selectIsLookingForAJob);
  const aboutMe = useAppSelector(selectAboutMe);
  const status = useAppSelector(selectStatus);
  const { mainLink, twitter, instagram, github, youtube, vk, website, facebook } =
    useAppSelector(selectSocials);

  useEffect(() => {
    getUserProfile(userId!);
    getUserStatus(userId!);
  }, []);

  const updateUserStatusHandler = (localStatus: string) => {
    updateUserStatus(localStatus);
  };

  const contacts = [
    { link: mainLink, title: 'mainLink' },
    { link: github, title: 'github' },
    { link: twitter, title: 'twitter' },
    { link: instagram, title: 'instagram' },
    { link: vk, title: 'vk' },
    { link: facebook, title: 'facebook' },
    { link: website, title: 'website' },
    { link: youtube, title: 'youtube' },
  ];

  const selectFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    updateUserAvatar(e.target.files[0]);
  };

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
          <div className={s.svgPhoto}>
            <SvgSelector id="uploadPhoto" />
          </div>
          <div className={s.round}>
            <input type="file" onChange={selectFile} />
          </div>
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
          <h3>Contacts</h3>
          {contacts.map(contact => (
            <Contacts key={contact.title} title={contact.title} link={contact.link} />
          ))}
        </div>
      </div>
      <MyPostsContainer />
    </div>
  );
};

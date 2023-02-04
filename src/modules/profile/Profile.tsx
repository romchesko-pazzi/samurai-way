import React, { useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

import { selectAuthId } from '../auth';

import { AboutMe } from './components/aboutMe/AboutMe';
import { Contacts } from './components/contacts';
import { JobSearching } from './components/jobSearching/JobSearching';
import { MyPosts } from './components/myPosts';
import { ProfileAvatar } from './components/profileAvatar/ProfileAvatar';
import { Skills } from './components/skills/Skills';
import { Status } from './components/status/Status';
import { UserName } from './components/userName/UserName';
import s from './profile.module.scss';
import { selectIsProfileFetched, selectUserId } from './store/profileSelectors';

import { IProfileFormData, profileActions } from './index';

import c from 'assets/commonStyles/commonStyles.module.scss';
import { useActions } from 'hooks/useActions';
import { useAppSelector } from 'hooks/useAppSelector';

export const Profile = () => {
  const [isEdit, setIsEdit] = useState(false);
  const { paramId } = useParams();
  const { register, handleSubmit } = useForm<IProfileFormData>();

  const { getUserProfile, getUserStatus, updateUserData, setIsProfileFetched } =
    useActions(profileActions);

  const authId = useAppSelector(selectAuthId);
  const userId = useAppSelector(selectUserId);
  const isProfileFetched = useAppSelector(selectIsProfileFetched);

  useEffect(() => {
    if (paramId) {
      getUserProfile(+paramId);
      getUserStatus(+paramId);
    } else {
      getUserProfile(authId!);
      getUserStatus(authId!);
    }
  }, [paramId, authId, getUserStatus, getUserProfile]);

  useEffect(() => {
    return () => {
      setIsProfileFetched(false);
    };
  }, [setIsProfileFetched]);

  const collectAllData = (data: IProfileFormData) => {
    updateUserData({ data, userId: authId! });
    setIsEdit(false);
  };

  const openEdit = () => setIsEdit(true);

  if (!isProfileFetched) {
    return (
      <div className={c.center}>
        <div className={c.loader} />
      </div>
    );
  }

  return (
    <div className={s.wrapper}>
      <form className={s.profile} onSubmit={handleSubmit(collectAllData)}>
        <ProfileAvatar isMyPage={userId === authId} />
        <UserName isEdit={isEdit} register={register} />
        <AboutMe isEdit={isEdit} register={register} />
        <Skills isEdit={isEdit} register={register} />
        <Status userId={userId!} authId={authId!} />
        <JobSearching isEdit={isEdit} register={register} />
        <Contacts
          callback={openEdit}
          isEdit={isEdit}
          register={register}
          isDisabled={userId !== authId}
        />
      </form>
      <MyPosts />
    </div>
  );
};

import React, { useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';

import common from '../../assets/commonStyles/commonStyles.module.scss';
import { DialogsContainer } from '../../components/Dialogs/DialogsContainer';
import { Header } from '../../components/header';
import UsersContainer from '../../components/Users/UsersContainer';
import { path } from '../../data/paths';
import { useActions } from '../../hooks/useActions';
import { useAppSelector } from '../../store/hooks';
import { SignIn } from '../auth';
import { NotFound } from '../notFound';
import { Profile } from '../profile/Profile';

import { appActions, selectIsInitialized } from './index';

export const App = () => {
  const { initializeApp } = useActions(appActions);
  const isInitialized = useAppSelector(selectIsInitialized);

  useEffect(() => {
    initializeApp();
  }, [initializeApp]);

  if (!isInitialized) {
    return (
      <div className={common.center}>
        <div className={common.loader} />
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<SignIn />} />
        <Route path={`${path.profile}/:userId?`} element={<Profile />} />
        <Route path={path.messages} element={<DialogsContainer />} />
        <Route path={path.users} element={<UsersContainer />} />
      </Route>
      <Route path={path.notFound} element={<NotFound />} />
    </Routes>
  );
};

import React, { useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';

import common from '../../assets/commonStyles/commonStyles.module.scss';
import { Header } from '../../components/header';
import { path } from '../../data/paths';
import { useActions } from '../../hooks/useActions';
import { useAppSelector } from '../../hooks/useAppSelector';
import { SignIn } from '../auth';
import { NotFound } from '../notFound';
import { Profile } from '../profile';
import { Users } from '../users';

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
        <Route path={`${path.profile}/:paramId?`} element={<Profile />} />
        <Route path={path.users} element={<Users />} />
      </Route>
      <Route path={path.notFound} element={<NotFound />} />
    </Routes>
  );
};

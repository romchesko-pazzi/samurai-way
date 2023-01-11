import React, { useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';

import { DialogsContainer } from '../../components/Dialogs/DialogsContainer';
import { Header } from '../../components/header';
import { Profile } from '../../components/profile/Profile';
import UsersContainer from '../../components/Users/UsersContainer';
import { path } from '../../data/paths';
import { useActions } from '../../hooks/useActions';
import { SignIn } from '../auth';

import { appActions } from './index';

export const App = () => {
  const { initializeApp } = useActions(appActions);

  useEffect(() => {
    initializeApp();
  }, [initializeApp]);

  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<SignIn />} />
        <Route path={`${path.profile}/:userId?`} element={<Profile />} />
        <Route path={path.messages} element={<DialogsContainer />} />
        <Route path={path.users} element={<UsersContainer />} />
      </Route>
    </Routes>
  );
};

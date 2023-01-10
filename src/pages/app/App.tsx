import React, { useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';

import { DialogsContainer } from '../../components/Dialogs/DialogsContainer';
import HeaderContainer from '../../components/Header/HeaderContainer';
import { SignInContainer } from '../../components/Login/SignInContainer';
import { Profile } from '../../components/profile/Profile';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import UsersContainer from '../../components/Users/UsersContainer';
import { path } from '../../data/paths';
import { useActions } from '../../hooks/useActions';

import { appActions } from './index';

export const App = () => {
  const { initializeApp } = useActions(appActions);

  useEffect(() => {
    initializeApp();
  }, [initializeApp]);

  return (
    <>
      <HeaderContainer />
      <Sidebar />
      <Routes>
        <Route path={`${path.profile}/:userId?`} element={<Profile />} />
        <Route path={path.messages} element={<DialogsContainer />} />
        <Route path={path.users} element={<UsersContainer />} />
        <Route path={path.signIn} element={<SignInContainer />} />
      </Routes>
    </>
  );
};

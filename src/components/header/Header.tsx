import React from 'react';

import { NavLink, Outlet } from 'react-router-dom';

import { useActions } from '../../hooks/useActions';
import { authActions } from '../../pages/auth';
import { selectEmail, selectIsAuth, selectLogin } from '../../pages/auth/authSelectors';
import { useAppSelector } from '../../store/hooks';

import s from './header.module.scss';

export const Header = () => {
  const isAuth = useAppSelector(selectIsAuth);
  const login = useAppSelector(selectLogin);
  const email = useAppSelector(selectEmail);

  const { logout } = useActions(authActions);

  const logoutHandler = () => logout();

  return (
    <>
      <div className={s.header}>
        <div className={s.section}>
          <div className={s.item}>
            <NavLink to="/profile" className={pressed => (pressed ? s.active : s.link)}>
              Profile
            </NavLink>
          </div>
          <div className={s.item}>
            <NavLink to="/messages" className={pressed => (pressed ? s.active : s.link)}>
              Messages
            </NavLink>
          </div>
          <div className={s.item}>
            <NavLink to="/users" className={pressed => (pressed ? s.active : s.link)}>
              Users
            </NavLink>
          </div>
        </div>
        <div className={s.section}>
          {isAuth ? (
            <div className={s.login}>
              <div>{login}</div>
              <div>{email}</div>
              <button type="button" onClick={logoutHandler}>
                Log out
              </button>
            </div>
          ) : (
            <div className={s.item}>
              <NavLink to="/login" className={pressed => (pressed ? s.active : s.link)}>
                Log in
              </NavLink>
            </div>
          )}

          <div className={s.item}>
            <NavLink to="/settings" className={pressed => (pressed ? s.active : s.link)}>
              Settings
            </NavLink>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

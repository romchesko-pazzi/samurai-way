import React, { useEffect } from 'react';

import { NavLink, Outlet, useNavigate } from 'react-router-dom';

import { useActions } from '../../hooks/useActions';
import { authActions } from '../../pages/auth';
import { selectEmail, selectIsAuth, selectLogin } from '../../pages/auth/authSelectors';
import { useAppSelector } from '../../store/hooks';
import { ButtonComponent } from '../buttonComponent';

import s from './header.module.scss';
import { headerItems, isStyleActive } from './utils';

export const Header = () => {
  const isAuth = useAppSelector(selectIsAuth);
  const login = useAppSelector(selectLogin);
  const email = useAppSelector(selectEmail);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate('/');
    }
  }, [isAuth, navigate]);
  const { logout } = useActions(authActions);
  const logoutHandler = () => logout();

  return (
    <>
      <div className={s.header}>
        <div className={s.section}>
          {isAuth ? (
            <>
              {headerItems.map(item => (
                <div key={item.destination} className={s.item}>
                  <NavLink to={item.path} style={isStyleActive}>
                    {item.destination}
                  </NavLink>
                </div>
              ))}
            </>
          ) : (
            <div className={s.item}>Social Network</div>
          )}
        </div>
        {isAuth && (
          <div className={s.logoutSection}>
            <div>
              <div>{login}</div>
              <div>{email}</div>
            </div>
            <ButtonComponent
              disabled={false}
              type="submit"
              callback={logoutHandler}
              title="Log out"
            />
          </div>
        )}
      </div>
      <Outlet />
    </>
  );
};

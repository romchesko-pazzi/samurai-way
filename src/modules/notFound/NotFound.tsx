import React from 'react';

import { Link, useLocation } from 'react-router-dom';

import s from './notFound.module.scss';

export const NotFound = () => {
  const location = useLocation();

  return (
    <div className={s.container}>
      <div className={s.block}>
        <p>404, Resource not found at {location.pathname}.</p>
        <Link className={s.link} to="/">
          go back
        </Link>
      </div>
    </div>
  );
};

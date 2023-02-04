import React, { ReactNode } from 'react';

import s from './wrapper.module.scss';

export const Wrapper = ({ children, ...props }: IProps) => {
  const { heading } = props;

  return (
    <div className={s.centerContent}>
      <div className={s.frame}>
        <div className={s.flexContainer}>
          <h2 className={s.heading}>{heading}</h2>
          {children}
        </div>
      </div>
    </div>
  );
};

interface IProps {
  children: ReactNode;
  heading: string;
}

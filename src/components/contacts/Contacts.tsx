import React, { ChangeEvent, useEffect, useState } from 'react';

import { TextField } from '@mui/material';

import { useActions } from '../../hooks/useActions';
import { selectUserId } from '../../pages/auth';
import { profileActions } from '../../pages/profile';
import { useAppSelector } from '../../store/hooks';
import { SvgSelector } from '../svgSelector';

import s from './contacts.module.scss';

export const Contacts: React.FC<ContactsPropsType> = ({ link, title }) => {
  const [field, setField] = useState<'a' | 'input'>('a');
  const [localValue, setLocalValue] = useState(link);
  const userId = useAppSelector(selectUserId);

  const { updateUserData } = useActions(profileActions);

  useEffect(() => {
    setLocalValue(link);
  }, [link]);

  const switchToInput = () => {
    setField('input');
  };

  const sendUpdatedData = () => {
    setField('a');
    updateUserData({ title, value: localValue, userId: userId! });
  };

  const onChangeHandler = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setLocalValue(event.currentTarget.value);
  };

  return (
    <div className={s.contactBox}>
      {field === 'a' ? (
        <>
          <a key={title} target="_blank" href={localValue} rel="noreferrer">
            {title}: {localValue}
          </a>
          <button className={s.button} onClick={switchToInput} type="button">
            <SvgSelector id="edit" />
          </button>
        </>
      ) : (
        <TextField
          InputProps={{ className: s.input }}
          onBlur={sendUpdatedData}
          autoFocus
          variant="standard"
          onChange={onChangeHandler}
          value={localValue}
          type="text"
        />
      )}
    </div>
  );
};

type ContactsPropsType = {
  title: string;
  link: string;
};

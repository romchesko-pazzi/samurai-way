import React from 'react';

import { Button, TextField } from '@mui/material';

import { ButtonComponent } from '../../../../ui/button';
import { IContacts } from '../../index';

import s from './contacts.module.scss';

export const Contacts: React.FC<ContactsPropsType> = ({
  callback,
  contacts,
  isEdit,
  register,
}) => {
  return (
    <div className={s.contacts}>
      <div className={s.contactsHeader}>
        <h3>Contacts</h3>
        {isEdit ? (
          <ButtonComponent type="submit" title="save" disabled={false} />
        ) : (
          <Button
            sx={[
              { backgroundColor: '#366EFF' },
              { '&:hover': { backgroundColor: '#366EFF' } },
            ]}
            onClick={callback}
            className={s.editButton}
            type="button"
            variant="contained"
            disabled={false}
          >
            edit
          </Button>
        )}
      </div>
      {Object.keys(contacts).map(key => (
        <div key={key}>
          {isEdit ? (
            <div className={s.spanAndInput}>
              <span>{key}: </span>
              <TextField
                sx={{ flex: 1 }}
                InputProps={{ className: s.input }}
                variant="standard"
                {...register(key as keyof typeof contacts, {
                  value: contacts[key as keyof typeof contacts],
                })}
                type="text"
              />
            </div>
          ) : (
            <>
              <span>{key}: </span>
              <a
                href={contacts[key as keyof typeof contacts]}
                target="_blank"
                rel="noreferrer"
              >
                {contacts[key as keyof typeof contacts]}
              </a>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

type ContactsPropsType = {
  isEdit: boolean;
  contacts: IContacts;
  register: any;
  callback: () => void;
};

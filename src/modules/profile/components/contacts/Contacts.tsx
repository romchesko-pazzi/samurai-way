import React, { memo } from 'react';

import { Button, TextField } from '@mui/material';

import { selectSocials } from '../../store/profileSelectors';

import s from './contacts.module.scss';

import { buttonTitle } from 'data/buttonTitle';
import { useAppSelector } from 'hooks/useAppSelector';
import { ButtonComponent } from 'ui/button';

export const Contacts = memo(
  ({ callback, isEdit, register, isMyPage, errorsForm }: IContactsProps) => {
    const contacts = useAppSelector(selectSocials);

    return (
      <div className={s.contacts}>
        <div className={s.contactsHeader}>
          <h3>Contacts</h3>
          {isMyPage && (
            <div>
              {isEdit ? (
                <ButtonComponent
                  type="submit"
                  title={buttonTitle.save}
                  disabled={false}
                />
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
                >
                  {buttonTitle.edit}
                </Button>
              )}
            </div>
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
                  InputLabelProps={{ className: s.input }}
                  variant="standard"
                  {...register(key as keyof typeof contacts, {
                    value: contacts[key as keyof typeof contacts],
                  })}
                  type="text"
                  error={!!errorsForm[key]?.message}
                  label={errorsForm[key]?.message}
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
  },
);

interface IContactsProps {
  callback: () => void;
  isEdit: boolean;
  register: any;
  isMyPage: boolean;
  errorsForm: any;
}

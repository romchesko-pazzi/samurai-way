import React, { ChangeEvent, memo, useEffect, useState } from 'react';

import { TextField } from '@mui/material';

import { selectStatus } from '../../store/profileSelectors';

import s from './editableSpan.module.scss';

import { useAppSelector } from 'hooks/useAppSelector';
import { maxStatusLength, statusError } from 'modules/profile/data/constants';
import { SvgSelector } from 'ui/svgSelector';

export const EditableSpan = memo(({ callback, isMyPage }: IProps) => {
  const status = useAppSelector(selectStatus);
  const [field, setField] = useState<'span' | 'input'>('span');
  const [value, setValue] = useState(status);
  const [error, setError] = useState('');

  useEffect(() => {
    setValue(status);
  }, [status]);

  const onClickHandler = () => {
    setField('input');
  };

  const onBlurHandler = () => {
    if (value.length >= maxStatusLength) {
      setError(statusError);

      return;
    }
    callback(value);
    setField('span');
    setError('');
  };

  const onChangeHandler = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setValue(event.currentTarget.value);
  };

  return (
    <div>
      {field === 'span' ? (
        <div className={s.spanBox}>
          <span>{value}</span>
          {isMyPage && (
            <button type="button" onClick={onClickHandler}>
              <SvgSelector id="edit" />
            </button>
          )}
        </div>
      ) : (
        <TextField
          InputProps={{ className: s.input }}
          InputLabelProps={{ className: s.input }}
          onBlur={onBlurHandler}
          autoFocus
          variant="standard"
          onChange={onChangeHandler}
          value={value}
          type="text"
          error={!!error}
          label={error}
        />
      )}
    </div>
  );
});

interface IProps {
  isMyPage: boolean;
  callback: (name: string) => void;
}

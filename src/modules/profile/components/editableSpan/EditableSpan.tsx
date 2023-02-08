import React, { ChangeEvent, memo, useEffect, useState } from 'react';

import { TextField } from '@mui/material';

import { selectError, selectStatus } from '../../store/profileSelectors';

import s from './editableSpan.module.scss';

import { useAppSelector } from 'hooks/useAppSelector';
import { SvgSelector } from 'ui/svgSelector';

export const EditableSpan = memo(({ callback, isMyPage }: IProps) => {
  const status = useAppSelector(selectStatus);
  const error = useAppSelector(selectError);
  const [field, setField] = useState<'span' | 'input'>('span');
  const [value, setValue] = useState(status);

  useEffect(() => {
    setValue(status);
  }, [status]);

  const onClickHandler = () => {
    setField('input');
  };

  const onBlurHandler = () => {
    callback(value);
    setField('span');
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
          onBlur={onBlurHandler}
          autoFocus
          variant="standard"
          onChange={onChangeHandler}
          value={value}
          type="text"
          error={!!error}
          helperText={error && 'Max length is 300'}
        />
      )}
    </div>
  );
});

interface IProps {
  isMyPage: boolean;
  callback: (name: string) => void;
}

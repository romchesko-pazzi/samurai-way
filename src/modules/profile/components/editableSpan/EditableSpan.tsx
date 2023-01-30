import React, { ChangeEvent, useEffect, useState } from 'react';

import { TextField } from '@mui/material';

import { SvgSelector } from '../../../../ui/svgSelector';

import s from './editableSpan.module.scss';

export const EditableSpan: React.FC<PropsType> = ({ status, callback }) => {
  const [field, setField] = useState<'span' | 'input'>('span');
  const [value, setValue] = useState(status);

  useEffect(() => {
    setValue(status);
  }, [status]);

  const onClickHandler = () => {
    setField('input');
  };

  const onBlurHandler = () => {
    setField('span');
    callback(value);
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
          <button type="button" onClick={onClickHandler}>
            <SvgSelector id="edit" />
          </button>
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
        />
      )}
    </div>
  );
};

type PropsType = {
  status: string;
  callback: (name: string) => void;
};

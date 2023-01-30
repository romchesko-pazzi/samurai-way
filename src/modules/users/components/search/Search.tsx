import React, { ChangeEvent, useEffect, useState } from 'react';

import { useActions } from '../../../../hooks/useActions';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { useDebounce } from '../../../../hooks/useDebounce';
import { SvgSelector } from '../../../../ui/svgSelector';
import { selectIsLoading } from '../../../app/appSelectors';
import { usersActions } from '../../index';

import s from './search.module.scss';

export const Search = () => {
  const [value, setValue] = useState<string>('');
  const isLoading = useAppSelector(selectIsLoading);
  const debouncedValue = useDebounce(value);
  const { setName } = useActions(usersActions);

  useEffect(() => {
    setName(value);
  }, [debouncedValue]);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  const removeInputDataHandler = () => {
    if (value) setValue(''); // for cross and remove search area
  };

  return (
    <div className={s.search}>
      <span>Search</span>
      <div className={s.inputBlock}>
        <input
          className={s.input}
          onChange={onChangeHandler}
          value={value}
          type="text"
          placeholder="Search by name"
          disabled={isLoading}
        />
        <button onClick={removeInputDataHandler} type="button" className={s.inputButton}>
          {value ? <SvgSelector id="cross" /> : <SvgSelector id="search" />}
        </button>
      </div>
    </div>
  );
};

import React, { ChangeEvent, memo, useEffect, useState } from 'react';

import { usersActions } from '../../index';

import s from './search.module.scss';

import { useActions } from 'hooks/useActions';
import { useAppSelector } from 'hooks/useAppSelector';
import { useDebounce } from 'hooks/useDebounce';
import { selectIsLoading } from 'modules/app/store/appSelectors';
import { SvgSelector } from 'ui/svgSelector';

export const Search = memo(() => {
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
});

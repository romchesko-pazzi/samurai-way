import * as React from 'react';
import { useEffect, useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, InputAdornment } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { rememberMe, testAuthData } from './data/constants';
import s from './signIn.module.scss';
import { selectIsAuth } from './store/authSelectors';
import { LoginDataType } from './types';
import { signInValidate } from './utils/validators';

import { authActions } from './index';

import { buttonTitle } from 'data/buttonTitle';
import { path } from 'data/paths';
import { wrapperHeading } from 'data/wrapperHeadings';
import { useActions } from 'hooks/useActions';
import { useAppSelector } from 'hooks/useAppSelector';
import { ButtonComponent } from 'ui/button';
import { Wrapper } from 'ui/wrapper/Wrapper';

export const SignIn = () => {
  const isAuth = useAppSelector(selectIsAuth);
  const { login } = useActions(authActions);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (isAuth) {
      navigate(path.profile);
    }
  }, [isAuth, navigate]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginDataType>({
    mode: 'onBlur',
    resolver: yupResolver(signInValidate),
  });

  const onSubmit = (data: LoginDataType) => {
    login(data);
    reset();
  };

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  return (
    <Wrapper heading={wrapperHeading.signIn}>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register('email')}
          label={errors.email?.message}
          InputProps={{ className: s.input }}
          InputLabelProps={{ className: s.input }}
          error={!!errors.email?.message}
          variant="outlined"
          placeholder="Email"
          type="email"
        />
        <TextField
          {...register('password')}
          label={errors.password?.message}
          InputProps={{
            className: s.input,
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          InputLabelProps={{ className: s.input }}
          error={!!errors.password?.message}
          variant="outlined"
          placeholder="Password"
          type={showPassword ? 'text' : 'password'}
        />
        <div className={s.checkbox}>
          <Checkbox
            {...register('rememberMe')}
            id="check"
            sx={{ '& .MuiSvgIcon-root': { fontSize: 25 } }}
          />
          <label htmlFor="check">{rememberMe}</label>
        </div>
        <div className={s.button}>
          <ButtonComponent type="submit" title={buttonTitle.signIn} />
        </div>
        <div className={s.test}>
          <div>{testAuthData.email}</div>
          <div>{testAuthData.password}</div>
        </div>
      </form>
    </Wrapper>
  );
};

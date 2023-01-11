import * as React from 'react';
import { useEffect, useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, InputAdornment } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { ButtonComponent } from '../../components/buttonComponent';
import { Wrapper } from '../../components/wrapper/Wrapper';
import { useActions } from '../../hooks/useActions';
import { useAppSelector } from '../../store/hooks';
import { signInValidate } from '../../utils/validators';

import { selectIsAuth } from './authSelectors';
import s from './signIn.module.scss';
import { LoginDataType } from './types';

import { authActions } from './index';

export const SignIn = () => {
  const isAuth = useAppSelector(selectIsAuth);
  const { login } = useActions(authActions);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (isAuth) {
      navigate('/profile');
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

  const onSubmit: SubmitHandler<LoginDataType> = data => {
    login(data);
    reset();
  };

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  return (
    <Wrapper heading="Sign in">
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
          <label style={{ cursor: 'pointer' }} htmlFor="check">
            Remember me
          </label>
        </div>
        <div className={s.button}>
          <ButtonComponent disabled={false} type="submit" title="Sign in" />
        </div>
        <div className={s.test}>
          <div>Email: free@samuraijs.com</div>
          <div>Password: free</div>
        </div>
      </form>
    </Wrapper>
  );
};

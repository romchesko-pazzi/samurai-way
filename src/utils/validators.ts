import * as yup from 'yup';

import { commonNums } from '../data/commonNums';

const emailValidation = yup
  .string()
  .email('Invalid email format')
  .required('Email is required');

const passwordValidation = yup
  .string()
  .required('Password is required')
  .min(commonNums.minPasswordLength, 'Password must be more than 7 symbols');

export const signInValidate = yup.object({
  email: emailValidation,
  password: passwordValidation,
});

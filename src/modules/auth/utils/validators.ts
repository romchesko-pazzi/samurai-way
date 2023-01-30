import * as yup from 'yup';

import { minPasswordLength } from '../../../data/commonNums';

const emailValidation = yup
  .string()
  .email('Invalid email format')
  .required('Email is required');

const passwordValidation = yup
  .string()
  .required('Password is required')
  .min(minPasswordLength, 'Password must be more than 3 symbols');

export const signInValidate = yup.object({
  email: emailValidation,
  password: passwordValidation,
});

import * as yup from 'yup';

const commonValidation = yup.string().url();

export const websiteValidate = yup.object({
  website: commonValidation,
  facebook: commonValidation,
  vk: commonValidation,
  twitter: commonValidation,
  youtube: commonValidation,
  github: commonValidation,
  instagram: commonValidation,
  mainLink: commonValidation,
});

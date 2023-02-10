import React from 'react';

import Textarea from '@mui/joy/Textarea';
import { SubmitHandler, useForm } from 'react-hook-form';

import { profileActions } from '../../index';

import s from './myPosts.module.scss';

import { useActions } from 'hooks/useActions';
import { ButtonComponent } from 'ui/button';

type FormInputs = {
  newPostText: string;
};

export const AddPostForm = () => {
  const { addPost } = useActions(profileActions);

  const { handleSubmit, register, reset } = useForm<FormInputs>({ mode: 'onBlur' });

  const onSubmit: SubmitHandler<FormInputs> = data => {
    const { newPostText } = data;

    addPost(newPostText);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={s.field}>
        <Textarea
          className={s.textField}
          placeholder={"What's happening?"}
          size="lg"
          {...register('newPostText', {
            required: 'post is required',
            maxLength: {
              value: 50,
              message: 'Too many symbols',
            },
          })}
          minRows={2}
        />
        <div className={s.btn}>
          <ButtonComponent title="add post" type="submit" />
        </div>
      </div>
    </form>
  );
};

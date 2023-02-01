import React from 'react';

import Textarea from '@mui/joy/Textarea';
import { SubmitHandler, useForm } from 'react-hook-form';

import { useActions } from '../../../../hooks/useActions';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { ButtonComponent } from '../../../../ui/button';
import { selectAuthId } from '../../../auth';
import { profileActions } from '../../index';
import { selectUserId } from '../../store/profileSelectors';

import s from './myPosts.module.scss';

type FormInputs = {
  newPostText: string;
};

export const AddPostForm = () => {
  const { addPost } = useActions(profileActions);
  const authId = useAppSelector(selectAuthId);
  const userId = useAppSelector(selectUserId);

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
          disabled={authId !== userId}
        />
        <div className={s.btn}>
          <ButtonComponent title="add post" type="submit" disabled={authId !== userId} />
        </div>
      </div>
    </form>
  );
};

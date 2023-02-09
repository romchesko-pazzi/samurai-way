import React, { memo, useCallback } from 'react';

import { status } from '../../data/constants';
import { profileActions } from '../../index';
import { EditableSpan } from '../editableSpan/EditableSpan';

import s from './status.module.scss';

import { useActions } from 'hooks/useActions';

export const Status = memo(({ authId, userId }: IProps) => {
  const { updateUserStatus } = useActions(profileActions);

  const updateUserStatusHandler = useCallback(
    (localStatus: string) => updateUserStatus(localStatus),
    [updateUserStatus],
  );

  return (
    <div className={s.status}>
      <span>{status}</span>
      <EditableSpan isMyPage={userId === authId} callback={updateUserStatusHandler} />
    </div>
  );
});

interface IProps {
  userId: number;
  authId: number;
}

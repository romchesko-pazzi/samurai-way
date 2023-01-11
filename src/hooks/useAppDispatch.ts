import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import { ActionTypeForApp } from '../store/hooks';
import { RootStateType } from '../store/store';

export const useAppDispatch: () => ThunkDispatchType = useDispatch;
export type ThunkDispatchType = ThunkDispatch<RootStateType, unknown, ActionTypeForApp>;

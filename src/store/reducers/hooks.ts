import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import {AppDispatch, RootStateType} from '../store';
import {ThunkAction} from "redux-thunk";
import {ActionTypeForApp} from "../types";

// типизация для диспатча санок в санках
export type AppThunkType = ThunkAction<void, RootStateType, unknown, ActionTypeForApp>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;

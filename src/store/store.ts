import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { appReducer } from '../modules/app';
import { authReducer } from '../modules/auth';
import { profileReducer } from '../modules/profile';
import { usersReducer } from '../modules/users/store/usersReducer';

import { MessagesReducer } from './reducers/MessagesReducer';

export type RootStateType = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  profile: profileReducer,
  messagePage: MessagesReducer,
  users: usersReducer,
  auth: authReducer,
  app: appReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware),
});

// @ts-ignore
window.store = store;

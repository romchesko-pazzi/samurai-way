import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { profileReducer } from '../components/profile';
import { appReducer } from '../pages/app';
import { authReducer } from '../pages/auth';

import { MessagesReducer } from './reducers/MessagesReducer';
import { UsersReducer } from './reducers/UsersReducer';

export type RootStateType = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  profile: profileReducer,
  messagePage: MessagesReducer,
  usersPage: UsersReducer,
  auth: authReducer,
  app: appReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware),
});

// @ts-ignore
window.store = store;

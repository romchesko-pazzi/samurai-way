import { ThunkAction } from 'redux-thunk';

import { ProfileAndMessageActionType } from './ProfileAndMessagesActions';
import { RootStateType } from './store';
import { UsersActionType } from './UsersActions';

// типизация для диспатча санок в санках
export type AppThunkType = ThunkAction<void, RootStateType, unknown, ActionTypeForApp>;
export type ActionTypeForApp = ProfileAndMessageActionType | UsersActionType;

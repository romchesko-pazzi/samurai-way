import {ProfileAndMessageActionType} from "./ProfileAndMessagesActions";
import {UsersActionType} from "./UsersActions";
import {AuthActionType} from "./reducers/AuthReducer";

// все типы action для всего app
export type ActionTypeForApp = ProfileAndMessageActionType | UsersActionType | AuthActionType;
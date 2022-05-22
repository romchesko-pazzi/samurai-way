import {Action, applyMiddleware, combineReducers} from "redux";
import {legacy_createStore as createStore} from 'redux'
import {ProfileReducer} from "./ProfileReducer";
import {MessagesReducer} from "./MessagesReducer";
import {UsersReducer} from "./UsersReducer";
import {AuthReducer} from "./AuthReducer";
import thunkMiddleware, {ThunkDispatch} from "redux-thunk";

export type RootStateType = ReturnType<typeof rootReducer>
export type AppThunk = ThunkDispatch<RootStateType, unknown, Action>

const rootReducer = combineReducers({
    profilePage: ProfileReducer,
    messagePage: MessagesReducer,
    usersPage: UsersReducer,
    auth: AuthReducer,
});


export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
//@ts-ignore
window.store = store;

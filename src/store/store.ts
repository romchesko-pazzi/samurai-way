import {combineReducers, createStore} from "redux";
import {ProfileReducer} from "./ProfileReducer";
import {MessagesReducer} from "./MessagesReducer";
import {UsersReducer} from "./UsersReducer";
import {AuthReducer} from "./AuthReducer";

export type RootStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    profilePage: ProfileReducer,
    messagePage: MessagesReducer,
    usersPage: UsersReducer,
    auth: AuthReducer,
});


export const store = createStore(rootReducer);
//@ts-ignore
window.store = store;

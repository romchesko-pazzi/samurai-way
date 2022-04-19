import {combineReducers, createStore} from "redux";
import {ProfileReducer} from "./ProfileReducer";
import {MessagesReducer} from "./MessagesReducer";

export type RootStateType = ReturnType<typeof RootReducer>

const RootReducer = combineReducers({
    profilePage: ProfileReducer,
    messagePage: MessagesReducer,
})


export const store = createStore(RootReducer);

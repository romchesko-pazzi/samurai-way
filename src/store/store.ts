import {Action, applyMiddleware, combineReducers, compose} from "redux";
import {legacy_createStore as createStore} from 'redux'
import {ProfileReducer} from "./reducers/ProfileReducer";
import {MessagesReducer} from "./reducers/MessagesReducer";
import {UsersReducer} from "./reducers/UsersReducer";
import {AuthReducer} from "./reducers/AuthReducer";
import thunkMiddleware, {ThunkDispatch} from "redux-thunk";
import { reducer as FormReducer } from 'redux-form';

export type RootStateType = ReturnType<typeof rootReducer>
export type AppThunk = ThunkDispatch<RootStateType, unknown, Action>

const rootReducer = combineReducers({
    profilePage: ProfileReducer,
    messagePage: MessagesReducer,
    usersPage: UsersReducer,
    auth: AuthReducer,
    form: FormReducer,
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));


// export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

//@ts-ignore
window.store = store;

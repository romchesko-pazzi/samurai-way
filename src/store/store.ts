import {applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from "redux";
import {ProfileReducer} from "./reducers/ProfileReducer";
import {MessagesReducer} from "./reducers/MessagesReducer";
import {UsersReducer} from "./reducers/UsersReducer";
import {AuthReducer} from "./reducers/AuthReducer";
import thunkMiddleware from "redux-thunk";
import {reducer as FormReducer} from 'redux-form';

export type RootStateType = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch;

const rootReducer = combineReducers({
    profilePage: ProfileReducer,
    messagePage: MessagesReducer,
    usersPage: UsersReducer,
    auth: AuthReducer,
    form: FormReducer,
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

//@ts-ignore
window.store = store;

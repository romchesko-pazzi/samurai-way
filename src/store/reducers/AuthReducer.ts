import {AuthDataType} from "../../components/Header/HeaderContainer";
import {authAPI} from "../../api/api";
import {FormDataType} from "../../components/Login/Login";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {RootStateType} from "../store";

enum ACTIONS_TYPE {
    SET_USER_DATA = "SET_USER_DATA",
}

type ActionType = SetUserDataType;
type SetUserDataType = ReturnType<typeof setAuthUserData>;
export type AuthThunkType = ThunkAction<any, RootStateType, unknown, ActionType>;
export type ThunkDispatchType = ThunkDispatch<RootStateType, unknown, ActionType>;

const initialState: AuthDataType = {
    id: null,
    email: "",
    login: "",
    isAuth: false,
}

export const AuthReducer = (state = initialState, action: ActionType): AuthDataType => {
    switch (action.type) {
        case ACTIONS_TYPE.SET_USER_DATA: {
            return {...state, ...action.payload, isAuth: true}
        }
        default:
            return state
    }
}


export const setAuthUserData = (id: number, email: string, login: string) => {
    return {
        type: ACTIONS_TYPE.SET_USER_DATA,
        payload: {id, email, login},
    } as const
}

export const getAuthUserDataTC = (): AuthThunkType => (dispatch: ThunkDispatchType) => {
    authAPI.authMe()
        .then(data => {
            if (data.resultCode === 0) {
                const {id, email, login} = data.data;
                dispatch(setAuthUserData(id, email, login));
            }
        })
}

export const loginTC = (email: string, password: string, rememberMe: boolean): AuthThunkType => (dispatch: ThunkDispatchType) => {
    authAPI.logIn(email, password, rememberMe)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(getAuthUserDataTC());
            }
        })
        .catch(err => {
            console.log(err);
        })
}